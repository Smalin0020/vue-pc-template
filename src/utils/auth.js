/*
*  获取 token 工具类
*/

import Cookies from 'js-cookie'

const TokenKey = 'publik-Token'

export function getToken () {
  return Cookies.get(TokenKey)
}

export function setToken (token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken () {
  return Cookies.remove(TokenKey)
}
