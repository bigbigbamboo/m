import request from './request'
import qs from 'qs'




/**
 * 短信
 * @param {Object} params { username: '', password: ''}
 */
function postMessage (params) {
  return request({
    url: 'public/sendMsg.jsp',
    method: 'post',
    data: qs.stringify(params)
  }).then(res => res.data)
}
/**
 * 手机注册
 * @param {Object} params { username: '', password: ''}
 */
function postMobileSign (params) {
  return request({
    url: 'public/reg2.jsp',
    method: 'post',
    data: qs.stringify(params)
  }).then(res => res.data)
}
/**
 * 用户名注册
 * @param {Object} params { username: '', password: ''}
 */
function postUnameSign (params) {
  return request({
    url: 'public/reg.jsp',
    method: 'post',
    data: qs.stringify(params)
  }).then(res => res.data)
}
/**
 * 登录
 * @param {Object} params { username: '', password: ''}
 */
function postLogin (params) {
  return request({
    url: 'public/login.jsp',
    method: 'post',
    data: qs.stringify(params)
  }).then(res => res.data)
}

/**
 * 验证码
 * @param {Object} params { userid, token }
 */
 function getCode(params) {
      return request({
        url: 'public/captcha.jsp',
        method: 'get',
        params
      }).then(res => res.data)
}
/**
 * 订单列表
 * @param {Object} params { userid, token }
 */
 function orderList(params) {
      return request({
        url: 'order/index.jsp',
        method: 'get',
        params
      }).then(res => res.data)
}

/**
 * 订单创建
 * @param {Object} params { username: '', password: ''}
 */
function orderCreat (params) {
  return request({
    url: 'order/create.jsp',
    method: 'post',
    data: qs.stringify(params)
  }).then(res => res.data)
}




export default {
    postMessage,
    postMobileSign,
    postUnameSign,
    postLogin,
    getCode,
    orderCreat,
    orderList
}