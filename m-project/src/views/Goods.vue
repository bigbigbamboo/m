<template>
<div class="goods">
    <div class="header">
        <div class="topBorder">
           
            <span class="iconfont icon-fangdajing" @click="search"></span> 
             <form action="./list" class="formSearch">
              <input placeholder="你想买些什么" type="text"  value="" name="keywords" id="">  
            </form>
        </div>
        <span class="iconfont icon-xiaoxi"></span>
    </div>
    <!-- 图片开始 -->
    <div class="goodsContent">
        <div class="topImg">
            <div class="topIcon">
                <p><van-icon name="arrow-left" /></p>
                <p class="pTag"><van-icon name="more-o" /></p>
            </div>
            <div class="topImg">
                <img src="../assets/imgs/test.jpg" alt="">
            </div>
        </div>
        <!-- 图片结束 -->
        <!-- 标题开始 -->
        <div class="priceTag">
            <div class="goodsPrice">
                <span>￥</span><span class="spanTag">99</span><span>.00</span>
            </div>
            <div class="goodsTitle">商品标题四大皆空发送快递发斯蒂芬斯柯达</div>{{this.apiData.token}}
        </div>
        <!-- 标题结束 -->
    </div>
    <!-- 底部导航开始 -->
    <div class="pay">
        <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
        <van-goods-action-icon icon="cart-o" text="购物车"  @click="change('/cart')"  />
        <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
        <van-goods-action-button type="warning" text="加入购物车" @click="addCart" />
        <van-goods-action-button type="danger" text="立即购买" />
        </van-goods-action>
    </div>
    <!-- 底部导航结束 -->
</div>
</template>
<script>
import {listApi,goodsApi} from '@/api'
// goodsDetail
export default {
    mounted(){
        console.log('首次:',this.$route.params.id)
        this.apiData.goodsId = this.$route.params.id
        this.initData()
    },
    methods:{
        search(){
          document.querySelector(".formSearch").submit();
      },
        addCart(){
            this.apiData.token = localStorage.getItem('token')
            goodsApi.postAddCar(this.apiData)
            .then(res=>{
                console.log(res)
                if(res.meta.state == 201){
                    this.$router.push({path:'/adress'})
                }
            })
        },
        initData(){
            listApi.goodsDetail(this.apiData)
            .then(res=>{
                // console.log(res)
                document.querySelector('.goodsContent').innerHTML = `
                    <div class="topImg">
                        <div class="topIcon">
                            <p><van-icon name="arrow-left" /></p>
                            <p class="pTag"><van-icon name="more-o" /></p>
                        </div>
                        <div class="topImg">
                            <img src="http://tmp00001.zhaodashen.cn/${res.data.goods_img}" alt="">
                        </div>
                    </div>
                    <!-- 图片结束 -->
                    <!-- 标题开始 -->
                    <div class="priceTag">
                        <div class="goodsPrice">
                            <span>￥</span><span class="spanTag">${res.data.shop_price}</span> 
                        </div>
                        <div class="goodsTitle">${res.data.goods_name}</div>
                    </div>
                `
            })
            
        }
    },
    watch:{
        $route(newData){
            // console.log('后续:',newData.params.id)
            console.log('后续:',newData)
        }
    },
    data(){
        return{
            apiData:{
                buyNum:1,
                goodsId:'',
                token:''
            }
        }
    },
}
</script>
<style lang='scss'>
@import '@/assets/css/common.scss';
.goods{
    .header{  display: flex; width: 100%; height: px2rem(50);  background: white;
              align-items: center; padding: px2rem(20);box-sizing: border-box; 
        .topBorder{ 
            display: flex; border-radius: px2rem(30); flex: 1; align-items: center; padding: 0 px2rem(10);
             width: 290px; height: px2rem(32);background: #e9ecf0; box-sizing: border-box;
            input{ width: px2rem(290); height: px2rem(32); border: none; background: none!important; padding: px2rem(10);}
            .iconfont{font-size: px2rem(16)!important;}  margin-right: px2rem(10);
        }
        .iconfont{font-size: px2rem(20)!important; font-weight: 300!important;}
    }
    width:100%; height: 100%;background: #e9ecf0;  display: flex; flex-direction: column; overflow: hidden;
    .topIcon{ position: absolute;  
        p{ width: px2rem(30); height: px2rem(30); background: #666; border-radius: px2rem(50%);float: left; 
            display: flex; align-items: center; justify-content: center; margin: px2rem(10); border-radius: 50%;
        }
        .pTag{ margin-left: px2rem(280); }
        .van-icon { font-size: px2rem(18); color: white; }
        .topImg{ width: px2rem(377); height: px2rem(377); text-align: center;
            img{ width: 100%; height: 100%; }
        }
    }
.priceTag{ width: 100%; height: px2rem(135); border-radius: 0 0 px2rem(20) px2rem(20) ;background:white; padding: px2rem(20); box-sizing: border-box;}
.goodsPrice{ font-size: px2rem(20);box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08); }
.spanTag{ font-size: px2rem(25);  }
.goodsTitle{ font-size: px2rem(25);  }

.van-goods-action {
    flex: 1;
    position: fixed;
    right: 0;
    bottom: 0;
     
}
//end
}


</style>