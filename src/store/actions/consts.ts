import { IEntryHeadlinerStatus } from "./headliners/types";
import { ILoadingStateObject } from "./ui/types";

// headliners list action names
export const GET_HEADLINERS = "GET_HEADLINERS";
export const APPEND_HEADLINERS = "APPEND_HEADLINERS";
export const REFRESH_HEADLINERS = "REFRESH_HEADLINERS";

// to-read action names
export const GET_TO_READ_LIST = "GET_TO_READ_LIST";
export const ADD_HEADLINER_TO_LIST = "ADD_HEADLINER_TO_LIST";
export const REMOVE_HEADLINER_FROM_LIST = "REMOVE_HEADLINER_FROM_LIST";
export const CHANGE_HEADLINER_STATUS = "CHANGE_HEADLINER_STATUS";

export const HEADLINER_STATUSES: IEntryHeadlinerStatus = {
    toRead: 0,
    beenRead: 1,
    toDelete: 2,
};

// sources action names
export const SET_SOURCES = "SET_SOURCES";
export const SET_CHOSEN_SOURCES = "SET_CHOSEN_SOURCES";

// searchParams action names
export const SET_PARAMETERS = "SET_PARAMETERS";

// ui action names
export const SET_LOADING_STATE = "SET_LOADING_STATE";

export const LOADING_STATUSES: ILoadingStateObject = {
    loading: "loading",
    success: "success",
    error: "error",
    initial: null,
};
