import React from "react";
import { loadingStateRange } from "../store/actions/ui/types";
import { useSelector } from "react-redux";
import { RootStore } from "../store/types";
import HeadlinersPlaceholder from "./HeadlinersPlaceholder";
import LoadMoreButton from "./LoadMoreButton";
import HeadlinersRenderer from "./HeadlinersRenderer";
import { LOADING_STATUSES } from "../store/actions/consts";
import { ENTRY_headliner } from "../store/actions/headliners/types";

const HeadlinersList: React.FC = () => {
    const totalResults: number = useSelector(({ headliners }: RootStore) => headliners.totalResults);
    const headliners: ENTRY_headliner[] = useSelector(({ headliners }: RootStore) => headliners.headliners);
    const loadingHeadliners: loadingStateRange = useSelector(({ ui }: RootStore) => ui.loadingHeadliners);

    const ifHeadlinersLoading = loadingHeadliners === LOADING_STATUSES.loading;
    const hasMoreHeadliners = headliners.length !== totalResults;

    return (
        <>
            <HeadlinersRenderer />
            {ifHeadlinersLoading && <HeadlinersPlaceholder quantity={3} />}
            {!ifHeadlinersLoading && hasMoreHeadliners && <LoadMoreButton />}
        </>
    );
};

export default HeadlinersList;
