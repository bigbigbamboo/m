<template>
<div class="mine">
   <!-- 顶部开始 -->
    <div class="header">
       
            <div class="top-up">
                <div class="top-l"><van-icon name="setting-o" /></div>
                <div class="top-center">
                    <img src="../assets/imgs/index.png" alt="">
                    <p>
                        <a @click="change('/login')">登录</a>
                        /
                        <a @click="change('/sign')" >注册</a>
                    </p>
                </div>
                <div class="top-l"><van-icon name="chat-o" /></div>
            </div>
        
            <div class="top-dowm">
                <p></p>
                <p></p>
            </div>

    </div>
    <div class="divTag">
        <p>0积分</p>
        <p>积分记录</p>
    </div>
<!-- 顶部结束 -->
    <!-- 我的订单开始 -->
    <div class="main">
    <div class="order">
         <div class="order_l">
             <!-- <span style="margin-top:px2rem(10)"><van-icon name="balance-list-o" /></span> -->
             <span>我的订单</span>
         </div>
         <div class="order_r">
             <span>查看全部订单</span>
             <!-- <span><van-icon name="arrow" /></span> -->
         </div>
    </div>
    <!-- 我的订单结束 -->
    <!-- 容格开始 -->
    <div class="grid">
        <van-grid>
        <van-grid-item icon="todo-list-o" text="待付款" />
        <van-grid-item icon="send-gift-o" text="待发货" />
        <van-grid-item icon="coupon-o" text="待收货" />
        <van-grid-item icon="comment-o" text="待评价" />
        </van-grid>
    </div>
    <!-- 容格结束 -->
    <!-- 收藏 地址 红包开始 -->
    <div class="setion">
        <div class="main_s">
            <div class="shou"> 
                <span><van-icon name="like-o" size="18" /></span>
                <span>我的收藏</span>
                <span style="color:white">收藏</span>
                <span style="color:white">我的收藏</span>
                <span style="color:white">我的收藏</span>
                <span> &gt; </span>
            </div>
            <div class="shou"> 
                <span><van-icon name="like-o" size="18" /></span>
                <span>管理收货地址</span>
                <span style="color:white">藏</span>
                <span style="color:white">我的收藏</span>
                <span style="color:white">我的收藏</span>
                <span> &gt; </span>
            </div>
            <div class="shou"> 
                <span><van-icon name="like-o" size="18" /></span>
                <span>我的红包</span>
                <span style="color:white">收藏</span>
                <span style="color:white">我的收藏</span>
                <span style="color:white">我的收藏</span>
                <span> &gt; </span>
            </div>
            <div class="shou"> 
                <span><van-icon name="like-o" size="18" /></span>
                <span>添加红包</span>
                <span style="color:white">收藏</span>
                <span style="color:white">我的收藏</span>
                <span style="color:white">我的收藏</span>
                <span> &gt; </span>
            </div>
        </div>
        <!-- 收藏 地址 红包结束 -->
        <!-- 收藏 地址 红包开始 -->
        <div class="main_s">
            <div class="shou"> 
                <span><van-icon name="like-o" size="18" /></span>
                <span>我的推荐</span>
                <span style="color:white">藏</span>
                <span style="color:white">我的收藏</span>
                <span style="color:white">我的收藏</span>
                <span> &gt; </span>
            </div>
            <div class="shou"> 
                <span><van-icon name="like-o" size="18" /></span>
                <span>我的资金</span>
                <span style="color:white">收藏</span>
                <span style="color:white">我的收藏</span>
                <span style="color:white">我的收藏</span>
                <span> &gt; </span>
            </div>
            <div class="shou"> 
                <span><van-icon name="like-o" size="18" /></span>
                <span>使用帮助</span>
                <span style="color:white">收藏</span>
                <span style="color:white">我的收藏</span>
                <span style="color:white">我的收藏</span>
                <span> &gt; </span>
            </div>
        </div>
    </div>
    <!-- 收藏 地址 红包结束 -->
    </div>
    <!-- 底部开始 -->
    <div>
        <Footer></Footer>
    </div>
    <!-- 底部结束 -->

<!-- /// -->
</div>
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
    components:{Footer}
}
</script>

<style lang='scss'  scoped>
@import '@/assets/css/common.scss';
.mine{ width:100%; height:100%; background: #e9ecf0; display: flex; flex-direction: column;}
.header
{ 
    background: #fa800a; width:100%; height: px2rem(225); 
    display: flex; flex-direction: column; justify-content: space-between;
}
.top-up{ display: flex; justify-content: space-between; padding: px2rem(20) px2rem(10);}
.van-icon {font-size: px2rem(22); color: white; font-weight: 500; }
.top-center img{ width: px2rem(72); height: px2rem(72); }
.top-center { margin-top:px2rem(20) }
.top-center p{ color: white; margin-top:px2rem(15); font-size:px2rem(16)}
.top-center p a{ color: white; }
.top-dowm{ display: flex; justify-content: space-around; }
.top-dowm p{ width:50%; height: px2rem(40); text-align: center; line-height: px2rem(40); color: white; background: black; filter: opacity(10%); }
.divTag { position: absolute;text-align: center; color: white; width: 100%;top:px2rem(180); display: flex;}
.divTag p{ width: 50%; height: px2rem(40); text-align: center; line-height: px2rem(50); font-size:px2rem(16)}
.order{ display: flex; justify-content: space-between; height: px2rem(44); color:grey; padding: 0 px2rem(20); font-size: px2rem(14); border-bottom: px2rem(0.5) solid #e9ecf0;background: white;}
.order_l,.order_r{ line-height: px2rem(44);height: px2rem(44); }
.order_l,.order_r span{ font-size: px2rem(14) ; }
.shou{ width: px2rem(375); height: px2rem(44);border-bottom: px2rem(0.5) solid #e9ecf0;background: white; 
       display: flex;  align-items: center;  justify-content: space-around; color: grey;
}
/deep/.van-icon-like-o::before {
    content: '\F079';
    color: grey;
}
.main{ flex: 1; overflow-y: scroll; }
.main_s{ margin-top: px2rem(10); }



</style>