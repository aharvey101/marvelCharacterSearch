import axios, { AxiosResponse } from 'axios'
import CryptoJS from 'crypto-js'
let cancelToken: AbortController

export const cancelRequest = () => {
  if (cancelToken) {
    cancelToken.abort()
  }
}
export default async function characterSearch(searchParam) {
  const url: string =
    (process.env.PRODUCTION
      ? process.env.marvelEndpoint
      : 'http://localhost:3001') || ''
  const ts = Date.now()
  const hash = CryptoJS.MD5(
    `${ts}${process.env.privateApiKey}${process.env.publicApiKey}`
  ).toString()
  cancelRequest()
  cancelToken = new AbortController()
  const characters = await axios
    .get(url, {
      params: {
        ts: ts,
        apikey: process.env.publicApiKey,
        hash,
        nameStartsWith: searchParam,
        limit: 100,
      },
      headers: {
        Accept: '*/*',
      },
      signal: cancelToken.signal,
    })
    .then((res: AxiosResponse) => {
      return res.data.data.results
    })
    .catch((error) => console.log(error))
  return characters
}
