import { IEntryHeadliners, IOutputHeadliners } from "./types";
import { GET_HEADLINERS, APPEND_HEADLINERS, REFRESH_HEADLINERS } from "../consts";

export const getHeadliners = (payload: IEntryHeadliners): IOutputHeadliners => ({
    type: GET_HEADLINERS,
    payload,
});

export const appendHeadliners = (payload: IEntryHeadliners): IOutputHeadliners => ({
    type: APPEND_HEADLINERS,
    payload,
});

export const overrideHeadliners = (): { type: string } => ({
    type: REFRESH_HEADLINERS,
});
