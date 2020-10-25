import { SourcesParams } from "../../../utils/api/types";
import IOutputSearchParams from "./types";
import { SET_PARAMETERS } from "../consts";

const setSearchParams = (payload: SourcesParams): IOutputSearchParams => ({
    type: SET_PARAMETERS,
    payload,
});

export default setSearchParams;
