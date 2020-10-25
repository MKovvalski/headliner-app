// entries
export interface IEntrySource {
    label: string;
    value: string;
}

export interface IEntrySources {
    sources: IEntrySource[];
}

export interface IEntryChosenSources {
    chosenSources: IEntrySource[];
}

// outputs
export interface IOutputDefaultAction {
    type: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload: any;
}

export interface IOutputSources extends IOutputDefaultAction {
    payload: IEntrySources;
}

export interface IOutputChosenSources extends IOutputDefaultAction {
    payload: IEntryChosenSources;
}
