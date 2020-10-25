import { IEntryChosenSources, IEntrySources, IOutputSources, IOutputChosenSources } from "./types";
import { SET_SOURCES, SET_CHOSEN_SOURCES } from "../consts";

export const setSources = (payload: IEntrySources): IOutputSources => ({
    type: SET_SOURCES,
    payload,
});

export const setChosenSources = (payload: IEntryChosenSources): IOutputChosenSources => ({
    type: SET_CHOSEN_SOURCES,
    payload,
});
