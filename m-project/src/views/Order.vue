<template>
<div class="cars">
    <!-- 顶部开始 -->
    <div class="head">
            <p> <van-icon name="arrow-left" /> </p>
            <p>确认订单</p>
            <p> <van-icon name="coupon-o" /> </p>
    </div>
    <!-- 顶部结束 -->
    <div class="adress">
        <van-address-list
        v-model="chosenAddressId"
        :list="list"
        :disabled-list="disabledList"
        default-tag-text="默认"
        @edit="onEdit"
        />
    </div>
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
        <div class="inAll">
            <span class="spanTag1">总计:</span>
            <span class="spanTag2">￥</span>
            <span class="spanTag3">1111</span>
            <span class="spanTag4">.00</span>
        </div>
         <div class="onlinePay">
             在线支付
         </div>
        
    </div>
    <!-- 底部结束 -->
    

</div>
</template>

<script>
import { Toast } from 'vant'; 
import { userApi } from '@/api'
export default {
    mounted(){
        this.listData()
    },
     methods: {
         //获取订单开始
         listData(){
             let token = localStorage.getItem('token')
             userApi.orderList({token,delete:2})
             .then(res=>{
                let htmlData = ''
                let inAllPrice = 0
                let totalPrice = 0
                console.log(res)
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
        
         },
         //获取订单结束
        onEdit(item, index) {
        Toast('编辑地址:' + index);
        },
    },
    data(){
        return{
            checked:false,
            chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
          isDefault: true,
        },
      ],
      
        }
    }
}
</script>
<style lang='scss' >
@import '@/assets/css/common.scss';

.cars{
    width:100%; height: 100%;background: #e9ecf0;  display: flex; flex-direction: column; overflow: hidden;
    .head{width: 100%; height:px2rem(50); border: px2rem(0.5); background: white;
    display: flex; justify-content: space-between; align-items: center; font-size:px2rem(18);
    padding: 0 px2rem(15); box-sizing: border-box; margin-bottom: px2rem(10);
    }
.cartInput{ width:30px; text-align:center }

.van-address-list {
    box-sizing: border-box;
    height: 100%;
    padding:0 12px 12px 10px;
}
.van-address-list__bottom {
    display: none;
}

.main{ flex: 1; overflow: scroll; }
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
.inAll{ width: px2rem(355); line-height: px2rem(40);height: px2rem(40);  margin-left: px2rem(230); font-size:px2rem(18);color: grey;}
.spanTag3{ color: orange;  font-size:px2rem(22)}
.spanTag2{ color: orange; }
.spanTag4{ color: orange; }
.onlinePay{
    // clear: both;
    color: #fff;
    background: #3884ff;
    box-shadow: 0 3px 6px 0 rgba(0,58,152,.2);
    border: none;
    width: px2rem(355);
    height: px2rem(40);
    line-height: px2rem(40);
    margin: 0 auto;
    border-radius: px2rem(20);
    text-align: center;
}
.listGood{ position: relative; }
.del{ position: absolute; top: px2rem(120); left:px2rem(30);color:white; 
      font-size:px2rem(18); width: px2rem(100); height:px2rem(30); background: orange;
      border-radius: px2rem(50); text-align: center; line-height:px2rem(30);
      }
.footer{ widows: 100%; height: px2rem(105); }

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