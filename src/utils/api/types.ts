import { StatusRange } from '../../store/actions/headliners/types'

export type CategoriesRange =
  'business' |
  'entertainment' |
  'general' |
  'health' |
  'science' |
  'sports' |
  'technology'

export type CountriesRange =
  'pl' |
  'gb' |
  'ru' |
  'be' |
  'ca' |
  'cn' |
  'fr' |
  'de' |
  'us'

export type LanguagesRange =
  'de' |
  'pl' |
  'en' |
  'ru' |
  'fr' |
  'zh'

export type ResponseStatusRange = 'ok' | 'error'

export interface CategoriesObject {
  [ key: string ]: CategoriesRange
}

export interface CountriesObject {
  [ key: string ]: CountriesRange
}

export interface LanguagesObject {
  [ key: string ]: LanguagesRange
}

export interface SourcesParams {
  category: CategoriesRange,
  country: CountriesRange,
  language: LanguagesRange
}

export interface HeadlinersParams {
  sources: string
}

export interface RequestBuilder {
  method?: any,
  url: string,
  params: SourcesParams | HeadlinersParams
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

export interface ENTRY_ResponseSuccess extends ENTRY_RawResponse {
  totalResults: number,
  articles: ENTRY_UnprocessedHeadliner[]
}
