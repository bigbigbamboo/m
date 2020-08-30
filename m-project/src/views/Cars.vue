<template>
<div class="cars">
    <!-- 顶部开始 -->
    <div class="head">
            <p  @click="change('/had')"> <van-icon name="arrow-left" /> </p>
            <p>购物车</p>
            <p> <van-icon name="coupon-o" /> </p>
    </div>
    <!-- 顶部结束 -->
    <!-- 内容区域开始 -->
    <div class="main">
        <div class="singelGood">
            <div class="img_name">
                <p class="pTag"><img src="../assets/imgs/1.jpg" alt=""></p>
                <p class="detail"> 
                    <span class="goodName">商品名字</span>
                    <span class="goodPrice">￥100.00</span>
                </p>
                <p class="allPrice">￥999.00</p>
            </div>
            <div class="del_add">
                <p class="delTag">删除</p>
                <div class="update">
                    <span class="addNum"> - </span>
                    <span class="num">1</span>
                    <span class="smaller">+</span>
                </div>
            </div>
        </div>
        
    </div>
    <!-- 内容区域结束 -->
    
    <!-- 底部开始 -->
    <div class="footer">
        <div class="submit">
            <van-submit-bar :price=allTotalPrice button-text="提交订单" @submit="onSubmit" :safe-area-inset-bottom='false'>
            <van-checkbox v-model="checked">全选</van-checkbox>
            <!-- <template #tip>
                你的收货地址不支持同城送, <span @click="onClickEditAddress">修改地址</span>
            </template> -->
            </van-submit-bar>
        </div>
        <div>
            <Footer></Footer>
        </div>
        
    </div>
    <!-- 底部结束 -->
    

</div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import { carsApi } from '@/api'
import { userApi } from '@/api'
import { Toast } from 'vant';
export default {
    created(){
        this.initData()
    },
    mounted(){
        this.delCar()
        this.addSl('+')
        this.addSl('-')
        this.updateNum()
    },
    methods:{
        //修改数量
        updateNum(){
            let _this = this
            document.querySelector('.main').addEventListener('keyup',function(e){
                 
                e = e || window.event 
                var target = e.target || e.srcElement
                console.log(target)
                let goodsId = target.getAttribute('goods_id')
                let buyNum = target.value
                let token = localStorage.getItem('token')
                
                 carsApi.postUpdateCar({goodsId,token,buyNum})
                    .then(res=>{
                        if(res.meta.state == 200){
                            _this.initData()
                        }
                        if(res.meta.state == 400){
                            Toast.fail(res.meta.msg);
                            _this.initData()
                        }
                    })
                
            })
        },
        //增加数量
        addSl(symbol){
            let _this = this
            document.querySelector('.main').addEventListener('click',function(e){
                 
                e = e || window.event 
                var target = e.target || e.srcElement
                // console.log(target)
                let goodsId = target.getAttribute('goods_id')
                let buyNum = target.getAttribute('goods_number')
                if(symbol=='-'){ buyNum = parseInt(buyNum) - 1 }    
                if(symbol=='+'){ buyNum = parseInt(buyNum) + 1 }
                let token = localStorage.getItem('token')
                
                if (target.innerText === symbol) {
                    carsApi.postUpdateCar({goodsId,token,buyNum})
                    .then(res=>{
                        if(res.meta.state == 200){
                            _this.initData()
                        }
                        if(res.meta.state == 400){
                            Toast.fail(res.meta.msg);
                        }
                    })
                }
                // console.log(target)
            })
        },
        //删除
        delCar(){
            let _this = this
            document.querySelector('.main').addEventListener('click',function(e){
                 
                e = e || window.event 
                var target = e.target || e.srcElement
                // console.log(target)
                let goods_id = target.getAttribute('goods_id')
                let token = localStorage.getItem('token')
                if (target.innerText === '删除') {
                    // alert(1)
                    carsApi.postDelCar({goods_id,token})
                    .then(res=>{
                        if(res.meta.state == 200){
                             _this.initData()
                        }
                    })
                }
            })
        },
        onSubmit(){
            let token = localStorage.getItem('token')
            userApi.orderCreat({token})
            .then(res=>{
                console.log(res)
                if(res.meta.state == 201){
                    Toast.success(res.meta.msg);
                    this.$store.dispatch('pay/setUserinfo',{
                                    order_sn: res.data.order_sn,
                                    total_price:res.data.total_price,
                                })
                    this.$router.push({path:'/pay'})
                }else{
                    Toast.fail(res.meta.msg);
                }
            })
        },
        initData(){
            let token = localStorage.getItem('token')
            carsApi.getCartList({token})
            .then(res=>{
                let htmlData = ''
                let inAllPrice = 0
                let totalPrice = 0
                // console.log(res)
                res.data.forEach(function(item){
                    inAllPrice = item.goods_price * item.goods_number
                    totalPrice += inAllPrice;
                    htmlData += `
                         <div class="singelGood">
                            <div class="img_name">
                                <p class="pTag"><img src="http://tmp00001.zhaodashen.cn/images/200905/source_img/28_P_1241972976150.jpg" alt=""></p>
                                <p class="detail"> 
                                    <span class="goodName">${item.goods_name}</span>
                                    <span class="goodPrice">￥${item.goods_price}</span>
                                </p>
                                <p class="allPrice">￥${inAllPrice}.00</p>
                            </div>
                            <div class="del_add">
                                <p class="delTag" goods_id=${item.goods_id}>删除</p>
                                <div class="update">
                                    <span class="addNum" goods_number=${item.goods_number} goods_id=${item.goods_id}>-</span>
                                    <input class="num" value=${item.goods_number} goods_number=${item.goods_number} goods_id=${item.goods_id} />
                                    <span class="smaller" goods_number=${item.goods_number} goods_id=${item.goods_id}>+</span>
                                </div>
                            </div>
                        </div>
                    `
                })
                this.allTotalPrice = totalPrice = totalPrice*100
                document.querySelector('.main').innerHTML = htmlData
            })
        }
    },
    components:{
        Footer
    },
    data(){
        return{
            allTotalPrice:'',
            data:[],
            checked:false
        }
    }
}
</script>
<style lang='scss'>
@import '@/assets/css/common.scss';
.cars{
    width:100%; height: 100%;background: #e9ecf0;  display: flex; flex-direction: column;
    .head{width: 100%; height:px2rem(50); border: px2rem(0.5); background: white;
    display: flex; justify-content: space-between; align-items: center; font-size:px2rem(18);
    padding: 0 px2rem(15); box-sizing: border-box; margin-bottom: px2rem(10);
    }
.cartInput{ width:30px; text-align:center }

.main{ flex: 1; overflow-y: scroll; }
.dd{ margin: px2rem(10); }


.submit{ margin-bottom: px2rem(30); }

.van-submit-bar {
    position: fixed;
    bottom: px2rem(55);
    left: 0;
    z-index: 100;
    width: 100%;
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
    background-color: #fff;
    -webkit-user-select: none;
    user-select: none;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
.del{ position: absolute; top: px2rem(120); left:px2rem(30);color:white; 
      font-size:px2rem(16); width: px2rem(90); height:px2rem(28); background: orange;
      border-radius: px2rem(50); text-align: center; line-height:px2rem(30);
      }
.footer{ widows: 100%; height: px2rem(105); }
.singelGood{ background: #fafafa; height: px2rem(160);box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08); margin-bottom: px2rem(5);}
.img_name{ display: flex; padding-top: px2rem(10); }
.img_name .pTag
        { width:px2rem(100); height:px2rem(100);  margin-left: px2rem(20);
        img{ width: 100%; height: 100%; }
}   
.del_add{display: flex; justify-content: space-between; margin: px2rem(10) px2rem(20);}
.detail{ display: flex; flex-direction: column; margin: px2rem(15);justify-content: space-around; }
.goodName{font-size:px2rem(18); width: px2rem(130);}
.delTag{ width: px2rem(60); height: px2rem(30); line-height: px2rem(30); background: orange; 
         text-align: center; color:white; border-radius: px2rem(20);}
.num{ width: px2rem(50); display: inline-block; text-align: center; margin: 0 px2rem(10); height: px2rem(20); border: px2rem(0.5) solid grey; }
.allPrice{ margin-top: px2rem(75); margin-left: px2rem(75); margin: px2rem(30); }
 
 
 
 //end   
}
</style>

