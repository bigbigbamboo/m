<template>
<div class="pay">
    <div class="header">
        <p class='Ptag1'>&lt;</p>
        <p class='Ptag2'>支付方式</p>
         <p class='Ptag3'>&lt;</p>
    </div>
    <div class="payStyle">
        <a class="wx" href="javascript:;">
            <p class="wxImg"> <img src="../assets/imgs/wechat.jpg" alt=""></p>
        </a>
        <a class="zfb" href="javascript:;">
            <p class="zfbImg"> <img src="../assets/imgs/zfb.jpg" alt=""></p>
            <iframe class="frame" src="" frameborder="0"></iframe>
        </a>
    </div>
   
<!-- end -->  
</div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    mounted(){
        this.zfbPay()
        this.wxPay()
    },
    methods:{
        zfbPay(){
            let total_price = localStorage.getItem('total_price')
            let order_sn = localStorage.getItem('order_sn')
            document.querySelector('.zfb').setAttribute('href',`http://kg.zhaodashen.cn/v1/alipay/pagepay/pagepay.jsp?trade_no=${order_sn}&amount=${total_price}`)
        },
        wxPay(){
            document.querySelector('.wxImg').onclick=function(){
                // let order_sn = localStorage.getItem('order_sn')
                document.querySelector('.frame').setAttribute('src','http://kg.zhaodashen.cn/v1/wxpay/native.jsp?out_trade_no=QF202008301209193973')
                // document.querySelector('.frame').setAttribute('src',`http://kg.zhaodashen.cn/v1/wxpay/native.jsp?out_trade_no=${order_sn}`)
            }
        },
        //判断支付成功
        // isPay(){
        //     setInterval(function(){

        //     },1000)
        // }
    },
    computed:{
        ...mapState({
            order_sn:state=> state.users.order_sn,
            total_price:state=> state.users.total_price
        })
    },
}
</script>
<style lang='scss' scoped>
@import '@/assets/css/common.scss';

.pay{ width: 100%; height: 100%; display: flex; flex-direction: column; }
.header{ display: flex; justify-content: space-between; padding: 0 px2rem(35); 
         box-sizing: border-box; align-items: center; font-size:px2rem(18);
         width:px2rem(375); height: px2rem(50); 
         box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);}
.Ptag3{ visibility: hidden; }
.payStyle{ display: flex; justify-content: space-around; margin-top: px2rem(20); }
.wxImg,.zfbImg{ width: px2rem(100); height: px2rem(100); 
                img{ width: 100%; height: 100%; }}

.frame{ width: px2rem(180); height: px2rem(180);  }
</style>