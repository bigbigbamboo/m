import request from './request'

/**
 * 登录
 * @param {Object} params { username: '', password: ''}
 */
export function login (params) {
      return request({
        url: '/users/login',
        method: 'post',
        data: params
      })
}

/**
 * 获取当前用户的信息
 * @param {Object} params { userid, token }
 */
export function getuserinfo (params) {
      return request({
        url: '/users/getuserinfo',
        method: 'get',
        params
      })
}

/**
 * 获取当验证码
 * @param {Object} params { userid, token }
 */
export function getListinfo (params) {
      return request({
        url: 'http://kg.zhaodashen.cn/v1/goods/index.jsp',
        method: 'get',
        params
      }).then(res => res.data)
}



import listApi from './list'
import userApi from './user'
import goodsApi from './goods'
import carsApi from './cars'

export {
    listApi,
    userApi,
    goodsApi,
    carsApi
}
 