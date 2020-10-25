import {
    IEntryToReadsStore,
    IEntryHeadlinersStore,
    IEntrySourcesStore,
    IEntrySearchParamsStore,
    IEntryUIStore,
} from "./reducers/types";

export interface RootStore {
    headliners: IEntryHeadlinersStore;
    toReads: IEntryToReadsStore;
    sources: IEntrySourcesStore;
    searchParams: IEntrySearchParamsStore;
    ui: IEntryUIStore;
}
