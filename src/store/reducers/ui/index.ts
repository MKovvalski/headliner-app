import { IEntryUIStore } from "../types";
import { IOutputUIState } from "../../actions/ui/types";
import { LOADING_STATUSES, SET_LOADING_STATE } from "../../actions/consts";

const INITIAL_STATE: IEntryUIStore = {
    loadingHeadliners: LOADING_STATUSES.initial,
    loadingSources: LOADING_STATUSES.initial,
    pageCount: 1,
};

const ui = (state: IEntryUIStore = INITIAL_STATE, { type, payload }: IOutputUIState): IEntryUIStore => {
    switch (type) {
        case SET_LOADING_STATE:
            return Object.assign(state, payload);
        default:
            return state;
    }
};

export default ui;
