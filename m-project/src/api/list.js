import request from './request'




/**
 * 商品列表
 * @param {Object} params { userid, token }
 */
 function getListinfo (params) {
      return request({
        url: 'goods/index.jsp',
        // url: 'http://kg.zhaodashen.cn/v1/goods/index.jsp',
        method: 'get',
        params
      }).then(res => res.data)
}

/**
 * 猜你喜欢
 * @param {Object} params { userid, token }
 */
 function getLikeinfo (params) {
      return request({
        url: 'goods/like.jsp',
        method: 'get',
        params
      }).then(res => res.data)
}

/**
 * 商品详情
 * @param {Object} params { userid, token }
 */
 function goodsDetail (params) {
      return request({
        url: 'goods/detail.jsp',
        method: 'get',
        params
      }).then(res => res.data)
}


 

export default {
    getListinfo,
    getLikeinfo,
    goodsDetail
}