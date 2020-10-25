import React from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../store/types";
import { loadingStateRange } from "../store/actions/ui/types";
import { LOADING_STATUSES } from "../store/actions/consts";
import NoInternetPlaceholder from "./NoInternetPlaceholder";
import ServerError from "./ServerError";
import HeadlinersList from "./HeadlinersList";

const HeadlinersContainer: React.FC = () => {
    const totalResults: number = useSelector((state: RootStore) => state.headliners.totalResults);
    const loadingSources: loadingStateRange = useSelector(({ ui }: RootStore) => ui.loadingSources);
    const loadingHeadliners: loadingStateRange = useSelector(({ ui }: RootStore) => ui.loadingHeadliners);

    const lostConnection = loadingSources === LOADING_STATUSES.error && loadingHeadliners === null;
    const cannotLoadHeadliners = loadingHeadliners === LOADING_STATUSES.error;

    return (
        <div className="headliners-container">
            <div className="headliners-container__header">
                <h2 className="headliners-container__title">Your Headliners</h2>
                <div className="headliners-container__results">{totalResults} headliners</div>
            </div>
            {lostConnection && <NoInternetPlaceholder />}
            {cannotLoadHeadliners && <ServerError />}
            {!cannotLoadHeadliners && <HeadlinersList />}
        </div>
    );
};

export default HeadlinersContainer;
