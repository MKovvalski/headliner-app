import {
  CategoriesInterface,
  LanguagesInterface,
  CountriesInterface
} from './types'

export const CATEGORIES_ARRAY: CategoriesInterface[] = [
  { label: 'business', value: 'business' },
  { label: 'entertainment', value: 'entertainment' },
  { label: 'general', value: 'general' },
  { label: 'health', value: 'health' },
  { label: 'science', value: 'science' },
  { label: 'sports', value: 'sports' },
  { label: 'technology', value: 'technology' }
]

export const COUNTRIES_ARRAY: CountriesInterface[] = [
  { label: 'Poland', value: 'pl' },
  { label: 'United States', value: 'us' },
  { label: 'Russia', value: 'ru' },
  { label: 'Belgium', value: 'be' },
  { label: 'Canada', value: 'ca' },
  { label: 'China', value: 'cn' },
  { label: 'France', value: 'fr' },
  { label: 'Germany', value: 'de' },
  { label: 'United Kingdom', value: 'gb' }
]

export const LANGUAGES_ARRAY: LanguagesInterface[] = [
  { label: 'german', value: 'de' },
  { label: 'polish', value: 'pl' },
  { label: 'english', value: 'en' },
  { label: 'russian', value: 'ru' },
  { label: 'french', value: 'fr' },
  { label: 'chinese', value: 'zh' }
]
