import { IEntryHeadliner } from "../headliners/types";
import {
    IEntryToReads,
    IEntryModifyHeadliner,
    IEntryRemoveHeadliner,
    IOutputGetToReads,
    IOutputAddHeadliner,
    IOutputRemoveHeadliner,
    IOutputModifyHeadliner,
} from "./types";

import {
    GET_TO_READ_LIST,
    ADD_HEADLINER_TO_LIST,
    REMOVE_HEADLINER_FROM_LIST,
    CHANGE_HEADLINER_STATUS,
} from "../consts";

export const getToReads = (payload: IEntryToReads): IOutputGetToReads => ({
    type: GET_TO_READ_LIST,
    payload,
});

export const addHeadlinerToList = (payload: IEntryHeadliner): IOutputAddHeadliner => ({
    type: ADD_HEADLINER_TO_LIST,
    payload,
});

export const changeHeadlinerStatus = (payload: IEntryModifyHeadliner): IOutputModifyHeadliner => ({
    type: CHANGE_HEADLINER_STATUS,
    payload,
});

export const removeHeadlinerToList = (payload: IEntryRemoveHeadliner): IOutputRemoveHeadliner => ({
    type: REMOVE_HEADLINER_FROM_LIST,
    payload,
});
