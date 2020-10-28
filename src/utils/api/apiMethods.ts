import axios from "axios";

import { API_URL } from "./consts";
import { API_KEY } from "../../../config";

import { IEntryHeadlinesResponseSuccess, IEntrySourcesResponseSuccess, RequestBuilder } from "./types";
import { IEntryHeadliners } from "../../store/actions/headliners/types";
import { IEntrySources } from "../../store/actions/sources/types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const buildRequest = ({ url, params, method = "GET" }: RequestBuilder): any => {
    return axios({
        baseURL: API_URL,
        headers: { "X-Api-Key": API_KEY },
        method,
        url,
        params,
    });
};

export const formatHeadersResponseData = (
    responsePayload: IEntryHeadlinesResponseSuccess,
): IEntryHeadliners => {
    const { totalResults, articles } = responsePayload;

    const headliners = articles.map(({ source, content, ...rest }) => {
        return {
            // TODO: fix bug where toRead is being overwritten by ...rest spread
            // status: HEADLINER_STATUSES.toRead,
            source: source.name,
            ...rest,
        };
    });

    return {
        totalResults,
        headliners,
    };
};

export const formatSourcesResponseData = (responsePayload: IEntrySourcesResponseSuccess): IEntrySources => {
    const { sources } = responsePayload;
    return {
        sources: sources.map(({ id, name }) => ({ value: id, label: name })),
    };
};
