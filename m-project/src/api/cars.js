import request from './request'
import qs from 'qs'


/**
 * 购物车列表
 * @param {Object} params { username: '', password: ''}
 */
function getCartList (params) {
  return request({
    url: 'cart/index.jsp',
    method: 'get',
    params
  }).then(res => res.data)
}


/**
 * 购物车更新
 * @param {Object} params { username: '', password: ''}
 */
function postUpdateCar (params) {
  return request({
    url: 'cart/update.jsp',
    method: 'post',
    data: qs.stringify(params)
  }).then(res => res.data)
}

/**
 * 购物车删除
 * @param {Object} params { username: '', password: ''}
 */
function postDelCar (params) {
  return request({
    url: 'cart/delete.jsp',
    method: 'post',
    data: qs.stringify(params)
  }).then(res => res.data)
}

 

export default {
  getCartList,
  postUpdateCar,
  postDelCar
}