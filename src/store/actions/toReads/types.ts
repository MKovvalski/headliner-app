import { IEntryHeadliner, StatusRange } from "../headliners/types";

// entries
export interface IEntryToReads {
    totalResults: number;
    beenReads: string;
    toDeletes: string;
    toReads: IEntryHeadliner[];
}

export interface IEntryModifyHeadliner {
    status: StatusRange;
    title: string;
}

export interface IEntryRemoveHeadliner {
    title: string;
}

// Action Outputs
export interface IOutputDefaultAction {
    type: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload: any;
}

export interface IOutputGetToReads extends IOutputDefaultAction {
    payload: IEntryToReads;
}

export interface IOutputAddHeadliner extends IOutputDefaultAction {
    payload: IEntryHeadliner;
}

export interface IOutputRemoveHeadliner extends IOutputDefaultAction {
    payload: IEntryRemoveHeadliner;
}

export interface IOutputModifyHeadliner extends IOutputDefaultAction {
    payload: IEntryModifyHeadliner;
}
