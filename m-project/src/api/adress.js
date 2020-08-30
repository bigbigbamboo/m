import request from './request'
import qs from 'qs'


/**
 * 创建收货地址
 * @param {Object} params { username: '', password: ''}
 */
function creatAddress (params) {
  return request({
    url: 'address/create.jsp',
    method: 'post',
    data: qs.stringify(params)
  }).then(res => res.data)
}
/**
 * 设置默认收货地址
 * @param {Object} params { username: '', password: ''}
 */
function mrAddress (params) {
  return request({
    url: 'address/default.jsp',
    method: 'post',
    data: qs.stringify(params)
  }).then(res => res.data)
}
/**
 * 删除收货地址
 * @param {Object} params { username: '', password: ''}
 */
function delAddress (params) {
  return request({
    url: 'address/delete.jsp',
    method: 'post',
    data: qs.stringify(params)
  }).then(res => res.data)
}

/**
 * 省市区县接口
 * @param {Object} params { userid, token }
 */
 function adressData (params) {
  return request({
    url: 'area/index.jsp',
    method: 'get',
    params
  }).then(res => res.data)
}
/**
 * 收货地址
 * @param {Object} params { userid, token }
 */
 function adressList (params) {
  return request({
    url: 'address/index.jsp',
    method: 'get',
    params
  }).then(res => res.data)
}
 



export default {
  creatAddress,
  adressData,
  adressList,
  mrAddress,
  delAddress
}