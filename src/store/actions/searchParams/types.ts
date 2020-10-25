import { SourcesParams } from "../../../utils/api/types";

// outputs
interface IOutputDefaultAction {
    type: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload: any;
}

interface IOutputSearchParams extends IOutputDefaultAction {
    payload: SourcesParams;
}

export default IOutputSearchParams;
