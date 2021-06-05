import { request } from '@/request.js'

const prefix = '/user'

const url = {
  login: '/login'
}

export function userLogin ({ username, password, code, hash }) {
  return request(prefix + url.login, 1, { username, password, code, hash })
}
