<template>
<div class="cate">
    <!-- 顶部开始 -->
    <div class="header">
        <van-nav-bar title="分类" left-text="" >
        <template #right>
            <van-icon name="search" size="18" />
        </template>
        </van-nav-bar>
    </div>
    <!-- 顶部结束 -->
    <!-- 侧边开始 -->
    <div class="aside">
        <div class="aside-l">
            <van-sidebar v-model="activeKey">
            <van-sidebar-item title="标签名称" />
            <van-sidebar-item title="标签名称" />
            <van-sidebar-item title="标签名称" />
            <van-sidebar-item title="标签名称" />
            <van-sidebar-item title="标签名称" />
            <van-sidebar-item title="标签名称" />
            <van-sidebar-item title="标签名称" />
            <van-sidebar-item title="标签名称" />
            <van-sidebar-item title="标签名称" />
            </van-sidebar>
        </div>
        <div class="aside-r">
            <p>s233d</p>
        </div>
    </div>
    <!-- 侧边结束 -->
    <!-- 底部开始 -->
    <div class="foot">
        <Footer></Footer>
    </div>
    <!-- 底部结束 -->
</div>
</template>
<script>
import Footer from '@/components/Footer.vue'
export default {
    components:{
        Footer
    },
  data() {
    return {
      activeKey: 0,
    };
  },
};
</script>
<style lang='scss' scoped>
@import '@/assets/css/common.scss';

.cate{
    width:100%; height: 100%;
}

/deep/ .van-nav-bar {
    border-bottom: px2rem(0.5) solid #e8eaed;
}

/deep/ .van-nav-bar__title {
    font-size: px2rem(18);
}
/deep/.van-nav-bar .van-icon {
    color: grey;
}
//  background: #f0f2f5;
/deep/.van-sidebar-item--select {
    color: #fa800a;
    font-weight: 500;
}
/deep/.van-sidebar {
    width: px2rem(100);
    overflow-y: auto;
}
/deep/.van-sidebar-item--select::before {
    height: px2rem(59);
    background:#fa800a;
}
/deep/.van-sidebar-item {
    border-right: px2rem(0.2) solid #e8eaed;
}
.aside{ display: flex; }
.aside-r{flex:1; width: 100%; height: px2rem(60);  border-bottom: px2rem(0.5) solid #e8eaed;
    p{text-align: center; line-height: px2rem(60); }
}
</style>