import { IEntrySourcesStore } from "../types";
import { IOutputDefaultAction } from "../../actions/sources/types";
import { SET_CHOSEN_SOURCES, SET_SOURCES } from "../../actions/consts";

const INITIAL_STATE: IEntrySourcesStore = {
    sources: [],
    chosenSources: [],
};

const sources = (
    state: IEntrySourcesStore = INITIAL_STATE,
    { type, payload }: IOutputDefaultAction,
): IEntrySourcesStore => {
    switch (type) {
        case SET_SOURCES: {
            const { sources: sourcesList, ...rest } = state;
            return {
                sources: payload.sources,
                ...rest,
            };
        }

        case SET_CHOSEN_SOURCES: {
            const { chosenSources: chosenSourcesList, ...other } = state;
            return {
                chosenSources: payload.chosenSources,
                ...other,
            };
        }
        default:
            return state;
    }
};

export default sources;
