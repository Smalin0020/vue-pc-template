import request from '@/api/index'

export function getUserInfo () {
  return request({
    url: '/test',
    method: 'post'
  })
}
