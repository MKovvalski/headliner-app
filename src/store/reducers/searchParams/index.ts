import { SET_PARAMETERS } from "../../actions/consts";
import { CATEGORIES_ARRAY, COUNTRIES_ARRAY, LANGUAGES_ARRAY } from "../../../utils/api/consts";
import IOutputSearchParams from "../../actions/searchParams/types";
import { IEntrySearchParamsStore } from "../types";

export const INITIAL_STATE: IEntrySearchParamsStore = {
    category: CATEGORIES_ARRAY[6].value,
    country: COUNTRIES_ARRAY[1].value,
    language: LANGUAGES_ARRAY[2].value,
};

const searchParams = (
    state: IEntrySearchParamsStore = INITIAL_STATE,
    { type, payload }: IOutputSearchParams,
): IEntrySearchParamsStore => {
    switch (type) {
        case SET_PARAMETERS:
            return payload;
        default:
            return state;
    }
};

export default searchParams;
