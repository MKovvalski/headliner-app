import React from "react";
import { useSelector } from "react-redux";
import { TLoadingStateRange } from "../store/actions/ui/types";
import { RootStore } from "../store/types";
import HeadlinersPlaceholder from "./HeadlinersPlaceholder";
import LoadMoreButton from "./LoadMoreButton";
import HeadlinersRenderer from "./HeadlinersRenderer";
import { LOADING_STATUSES } from "../store/actions/consts";
import { IEntryHeadliner } from "../store/actions/headliners/types";

const HeadlinersList: React.FC = () => {
    const totalResults: number = useSelector(({ headliners }: RootStore) => headliners.totalResults);
    const headlinersList: IEntryHeadliner[] = useSelector(
        ({ headliners }: RootStore) => headliners.headliners,
    );
    const loadingHeadliners: TLoadingStateRange = useSelector(({ ui }: RootStore) => ui.loadingHeadliners);

    const ifHeadlinersLoading = loadingHeadliners === LOADING_STATUSES.loading;
    const hasMoreHeadliners = headlinersList.length !== totalResults;

    return (
        <>
            <HeadlinersRenderer />
            {ifHeadlinersLoading && <HeadlinersPlaceholder quantity={3} />}
            {!ifHeadlinersLoading && hasMoreHeadliners && <LoadMoreButton />}
        </>
    );
};

export default HeadlinersList;
