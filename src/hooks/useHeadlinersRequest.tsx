import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../store/types";
import setUIState from "../store/actions/ui/actions";
import { LOADING_STATUSES } from "../store/actions/consts";
import { IEntrySource } from "../store/actions/sources/types";
import { requestHeadlines } from "../utils/api/api";
import { formatHeadersResponseData } from "../utils/api/apiMethods";
import { getHeadliners, appendHeadliners, overrideHeadliners } from "../store/actions/headliners/actions";
import { TLoadingStateRange } from "../store/actions/ui/types";

type OperationTypeRange = "add" | "append";

interface OperationTypeObjectInterface {
    add: "add";
    append: "append";
}

export const OperationType: OperationTypeObjectInterface = {
    add: "add",
    append: "append",
};

type TriggerRequest = (operationType: OperationTypeRange) => void;

interface HeadlinersHookInterface {
    status: TLoadingStateRange;
    triggerRequest: TriggerRequest;
}

const formatDataForRequest = (sources: IEntrySource[]): string => {
    return sources.map(({ value }) => value).join(",");
};

const useHeadlinersRequest = (): HeadlinersHookInterface => {
    const pageCount: number = useSelector(({ ui }: RootStore) => ui.pageCount);
    const loadingHeadliners: TLoadingStateRange = useSelector(({ ui }: RootStore) => ui.loadingHeadliners);
    const sourcesList: IEntrySource[] = useSelector(({ sources }: RootStore) => sources.sources);
    const chosenSourcesList: IEntrySource[] = useSelector(({ sources }: RootStore) => sources.chosenSources);
    const dispatch = useDispatch();

    const triggerRequest = async (operationType: OperationTypeRange) => {
        dispatch(setUIState({ loadingHeadliners: LOADING_STATUSES.loading }));

        try {
            const sourcesToFormat = !!chosenSourcesList.length ? chosenSourcesList : sourcesList;
            const formattedSources = formatDataForRequest(sourcesToFormat);
            let newPageCount: number = pageCount;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            let requestData: any = null;
            let action;

            if (operationType === OperationType.add) {
                dispatch(overrideHeadliners());

                const addResponseData = await requestHeadlines({ sources: formattedSources });
                newPageCount = 1;
                requestData = addResponseData.data;
                action = getHeadliners;
            }

            if (operationType === OperationType.append) {
                newPageCount++;
                const appendResponseData = await requestHeadlines({
                    sources: formattedSources,
                    page: newPageCount,
                });
                requestData = appendResponseData.data;
                action = appendHeadliners;
            }

            const formattedData = formatHeadersResponseData(requestData);

            if (action) {
                dispatch(action(formattedData));
            }
            dispatch(setUIState({ loadingHeadliners: LOADING_STATUSES.success, pageCount: newPageCount }));
        } catch (e) {
            dispatch(setUIState({ loadingHeadliners: LOADING_STATUSES.error, pageCount: 0 }));
        }
    };

    return {
        status: loadingHeadliners,
        triggerRequest,
    };
};

export default useHeadlinersRequest;
