import request from './request'
import qs from 'qs'


/**
 * 添加购物车
 * @param {Object} params { username: '', password: ''}
 */
function postAddCar (params) {
  return request({
    url: 'cart/create.jsp',
    method: 'post',
    data: qs.stringify(params)
  }).then(res => res.data)
}

/**
 * 商品分类
 * @param {Object} params { userid, token }
 */
 function cateList (params) {
  return request({
    url: 'category/index.jsp',
    method: 'get',
    params
  }).then(res => res.data)
}
 

export default {
  postAddCar,
  cateList
}