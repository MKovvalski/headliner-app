import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SourcesParams } from "../utils/api/types";
import { RootStore } from "../store/types";
import DropdownSelect from "./Inputs/DropdownSelect";
import { IEntrySource } from "../store/actions/sources/types";
import { setChosenSources } from "../store/actions/sources/actions";
import useSourcesRequest from "../hooks/useSourcesRequest";
import { LOADING_STATUSES } from "../store/actions/consts";

const SearchSources: React.FC = () => {
    const dispatch = useDispatch();

    const { status, triggerRequest } = useSourcesRequest();
    const searchParams: SourcesParams = useSelector((state: RootStore) => state.searchParams);
    const sources: IEntrySource[] = useSelector((state: RootStore) => state.sources.sources);
    const chosenSourcesList: IEntrySource[] = useSelector((state: RootStore) => state.sources.chosenSources);

    useEffect(() => {
        triggerRequest();
        dispatch(setChosenSources({ chosenSources: [] }));
    }, [searchParams]);

    const valueChangeHandler = (value: IEntrySource[]): void => {
        const chosenSources = value === null ? [] : value;

        dispatch(setChosenSources({ chosenSources }));
    };

    const isDisabled = status === LOADING_STATUSES.loading || status === LOADING_STATUSES.initial;

    return (
        <div className="search-sources">
            <DropdownSelect
                isMulti={true}
                options={sources}
                value={chosenSourcesList}
                onChange={valueChangeHandler}
                isDisabled={isDisabled}
                placeholder="Your sources"
            />
        </div>
    );
};

export default SearchSources;
