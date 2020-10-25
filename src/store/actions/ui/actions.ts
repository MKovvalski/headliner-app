import { IEntryUIState, IOutputUIState } from "./types";
import { SET_LOADING_STATE } from "../consts";

const setUIState = (payload: IEntryUIState): IOutputUIState => ({
    type: SET_LOADING_STATE,
    payload,
});

export default setUIState;
