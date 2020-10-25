export type TLoadingStateRange = "loading" | "success" | "error" | null;

export interface ILoadingStateObject {
    loading: "loading";
    success: "success";
    error: "error";
    initial: null;
}

// entries
export interface IEntryUIState {
    loadingHeadliners?: TLoadingStateRange;
    pageCount?: number;
    loadingSources?: TLoadingStateRange;
}

export interface IOutputUIState {
    type: string;
    payload: IEntryUIState;
}
