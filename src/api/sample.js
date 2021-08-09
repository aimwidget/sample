import request from '../utils/request'

export function postLotterys(url,data) {
  return request({
    url,
    method: 'post',
    data
  })
}