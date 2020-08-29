<template>
<div class="footer">
  
   
    <div class="bottom">
        <van-tabbar v-model="active" active-color='orange'>
        <van-tabbar-item icon="home-o" @click="change('/',0)">首页</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart-o" @click="change('/cate',1)" >分类</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart-o" @click="change('/cart',2)">购物车</van-tabbar-item>
        <van-tabbar-item icon="manager-o" @click="change('/mine',3)">我的</van-tabbar-item>
        </van-tabbar>
    </div>
   
<!-- // -->    
</div>
</template>
<script>
export default {
  data() {
    return {
      active: '',   //底部标签选中
    };
  },
  
};
</script>
<style lang='scss' scoped>

@import '@/assets/css/common.scss';



 


</style>