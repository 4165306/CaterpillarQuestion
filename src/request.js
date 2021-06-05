import axios from 'axios'
import config from '@/config/config'
import store from '@/store/index'

export function request (url, method, data, headers) {
  const tokenHeader = getToken()
  headers = { ...headers, tokenHeader }
  return axios.request({
    base_uri: config.base_uri,
    url,
    method: method === 0 ? 'get' : typeof method === 'string' ? method : 'post',
    data,
    headers
  })
}

function getToken () {
  return { 'X-TOKEN': store.getters.getToken ?? '' }
}
