export interface ICharacter {
  code: number
  status: string
  copyright: string
  attributionText: string
  attributionHTML: string
  etag: string
  data: Data
}
export interface Data {
  offset: number
  limit: number
  total: number
  count: number
  results?: ResultsEntity[] | null
}
export interface ResultsEntity {
  id: number
  name: string
  description: string
  modified: string
  thumbnail: Thumbnail
  resourceURI: string
  comics: ComicsOrSeriesOrEvents
  series: ComicsOrSeriesOrEvents
  stories: Stories
  events: ComicsOrSeriesOrEvents
  urls?: UrlsEntity[] | null
}
export interface Thumbnail {
  path: string
  extension: string
}
export interface ComicsOrSeriesOrEvents {
  available: number
  collectionURI: string
  items?: ItemsEntity[] | null
  returned: number
}
export interface ItemsEntity {
  resourceURI: string
  name: string
}
export interface Stories {
  available: number
  collectionURI: string
  items?: ItemsEntity1[] | null
  returned: number
}
export interface ItemsEntity1 {
  resourceURI: string
  name: string
  type: string
}
export interface UrlsEntity {
  type: string
  url: string
}

export interface IAPIRes {
  config: object
  data: ICharacter
  headers: object
  request: object
  status: number
  statusText: string
}
