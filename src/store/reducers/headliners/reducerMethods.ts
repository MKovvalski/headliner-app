import { IEntryHeadlinersStore } from "../types";
import { IEntryHeadliners } from "../../actions/headliners/types";

const appendHeadliners = (state: IEntryHeadlinersStore, payload: IEntryHeadliners): IEntryHeadlinersStore => {
    return {
        totalResults: payload.totalResults,
        headliners: state.headliners ? [...state.headliners, ...payload.headliners] : [...payload.headliners],
    };
};

export default appendHeadliners;
