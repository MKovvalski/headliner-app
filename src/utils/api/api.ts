import axios from 'axios'
import { CallParameters, CategoriesObject } from './types'

const API_KEY: string = 'b88bcd6cb83d4335ba3dbfd7227a1c07'
const API_URL: string = 'https://newsapi.org/v2/top-headlines'

const CATEGORIES: CategoriesObject = {
  business: 'business',
  entertainment: 'entertainment',
  general: 'general',
  health: 'health',
  science: 'science',
  sports: 'sports',
  technology: 'technology'
}

const defaultRequestConfig: any = {
  baseURL: API_URL,
  method: 'GET',
  headers: {
    'X-Api-Key': API_KEY
  },
}

export const apiCall = (params: CallParameters) =>
  axios({
    ...defaultRequestConfig,
    params
  })
