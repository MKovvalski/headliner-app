import { buildRequest } from "./apiMethods";
import { HeadlinersParams, SourcesParams } from "./types";
import { HEADLINES_URL, SOURCES_URL } from "./consts";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const requestSources = (params: SourcesParams): any => buildRequest({ url: SOURCES_URL, params });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const requestHeadlines = (params: HeadlinersParams): any =>
    buildRequest({ url: HEADLINES_URL, params });
