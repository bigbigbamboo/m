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


 

export default {
  postAddCar
}