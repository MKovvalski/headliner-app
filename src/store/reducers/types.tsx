import { IEntryHeadliner } from "../actions/headliners/types";
import { SourcesParams } from "../../utils/api/types";
import { IEntrySource } from "../actions/sources/types";
import { TLoadingStateRange } from "../actions/ui/types";

export interface IEntryHeadlinersStore {
    totalResults: number;
    headliners: IEntryHeadliner[];
}

export interface IEntryToReadsStore {
    totalResults: number;
    beenReads: number;
    toDeletes: number;
    toReads: IEntryHeadliner[];
}

export interface IEntrySourcesStore {
    sources: IEntrySource[];
    chosenSources: IEntrySource[];
}

export interface IEntrySearchParamsStore extends SourcesParams {}

export interface IEntryUIStore {
    loadingHeadliners: TLoadingStateRange;
    loadingSources: TLoadingStateRange;
    pageCount: number;
}
