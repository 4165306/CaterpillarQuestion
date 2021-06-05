import { request } from '@/request'

const prefix = '/verifycode'

const url = {
  get: '/get'
}

export function getVerifyCode () {
  return request(prefix + url.get, 0, {}, {})
}
