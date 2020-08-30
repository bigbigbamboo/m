export default {
    namespaced: true,
    state: {
       
        order_sn: localStorage.getItem("order_sn") || '',
        total_price: localStorage.getItem("total_price") || '',
    },
    getters: {},
    mutations: {
        setUserinfo(state, payload) {
            // console.log(payload)
            // console.log(payload.uname, payload.roleName)
            
            state.order_sn = payload.order_sn
            state.total_price = payload.total_price
           
            // 数据持久化
            
            localStorage.setItem("order_sn", payload.order_sn)
            localStorage.setItem("total_price", payload.total_price)
        }
    },
    actions: {
        setUserinfo(context,payload) {
            context.commit('setUserinfo',payload)
        }
    },
}