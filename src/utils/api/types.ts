import {StatusRange} from "../../store/actions/headliners/types";

export type CategoriesRange = 'business' | 'entertainment' | 'general' | 'health' | 'science' | 'sports' | 'technology'

export type ResponseStatusRange = 'ok' | 'error'

export interface CategoriesObject {
  [key: string]: CategoriesRange
}

export interface CallParameters {
  category?: CategoriesRange,
  q?: string,
  country?: string
}

export interface ENTRY_UnprocessedHeadliner {
  title: string,
  status: StatusRange,
  source: {
    id: string | null,
    name: string
  },
  author: string | null,
  description: string,
  url: string,
  urlToImage?: string,
  publishedAt: string,
  content?: string
}

export interface ENTRY_RawResponse {
  status: ResponseStatusRange,
}

export interface ENTRY_ResponseError extends ENTRY_RawResponse {
  code: string,
  message: string
}

export interface ENTRY_ResponseSuccess extends ENTRY_RawResponse {
  totalResults: number,
  articles: ENTRY_UnprocessedHeadliner[]
}
