import { GET_HEADLINERS, APPEND_HEADLINERS, REFRESH_HEADLINERS } from "../../actions/consts";
import { IOutputHeadliners } from "../../actions/headliners/types";
import { IEntryHeadlinersStore } from "../types";
import appendHeadliners from "./reducerMethods";

const INITIAL_STATE: IEntryHeadlinersStore = {
    totalResults: 0,
    headliners: [],
};

const headliners = (
    state: IEntryHeadlinersStore = INITIAL_STATE,
    { type, payload }: IOutputHeadliners,
): IEntryHeadlinersStore => {
    switch (type) {
        case GET_HEADLINERS:
            return payload;

        case APPEND_HEADLINERS:
            return appendHeadliners(state, payload);

        case REFRESH_HEADLINERS:
            return INITIAL_STATE;

        default:
            return state;
    }
};

export default headliners;
