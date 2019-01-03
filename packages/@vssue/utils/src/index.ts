import format from 'date-fns/format'
import {
  parse,
  stringify,
} from 'qs'

export const buildURL = (cleanURL: string, params: Object): string => {
  let query = stringify(params)
  query = query === '' ? '' : `?${query}`
  return `${cleanURL}${query}`
}

export const concatURL = (baseURL: string, path: string): string => {
  let firstPart = baseURL.replace(/\/$/, '')
  let secondPart = path.replace(/^\//, '')
  return `${firstPart}/${secondPart}`
}

export const getCleanURL = (fullURL: string): string => {
  const cleanURL = fullURL.split('?')[0] || ''
  return cleanURL
}

export const parseQuery = (URL: string): any => parse(URL)

export const buildQuery = (params: Object): string => stringify(params)

export const formatDateTime = (str: string): string => {
  const dateTime = format(str, 'YYYY-MM-DD HH:mm:ss')
  return dateTime
}

export const noop = () => {}

export default {
  buildURL,
  concatURL,
  getCleanURL,
  parseQuery,
  buildQuery,
  formatDateTime,
  noop,
}
