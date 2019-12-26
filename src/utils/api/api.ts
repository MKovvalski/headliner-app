import axios from 'axios'
import { API_KEY, API_URL } from '../../../config'
import { CallParameters, CategoriesObject } from './types'


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
  axios ({
    ...defaultRequestConfig,
    params
  })
