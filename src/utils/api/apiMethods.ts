import axios from "axios";

import { HEADLINER_STATUSES } from "../../store/actions/consts";
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
            status: HEADLINER_STATUSES.toRead,
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
