<template>
<div class="cate">
    <!-- 顶部开始 -->
    <div class="header">
        <van-nav-bar title="商品分类" left-text="" >
        <template #right>
            <van-icon name="search" size="18" />
        </template>
        </van-nav-bar>
    </div>
    <!-- 顶部结束 -->
    <!-- 侧边开始 -->
    <div class="aside">
        <div class="aside-l">
            <van-sidebar v-model="activeKey"  @change="onChange">
                <van-sidebar-item v-for="item in asideArr" :key="item.cat_id" :title="item.cat_name" />
            </van-sidebar>
        </div>
        <div class="aside-r">
            <div>
                <div>
                    <p class="content">哈哈哈</p>{{activeKey}}
                </div>
            </div>
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
import { goodsApi } from '@/api'
export default {
    created(){
        this.initData()
        this.showData()
    },
    components:{
        Footer
    },
    methods:{
        onChange(){
            this.initData()
        },
        initData(){
            goodsApi.cateList()
            .then(res=>{
                console.log(res)
                this.asideArr = res.data
                let htmlData=''
                res.data[this.activeKey].children.forEach(function(item){
                    htmlData += `
                    <div>
                        <div>
                            <p class="content">${item.cat_name}</p>
                        </div>
                    </div>
                    `
                })
                document.querySelector('.aside-r').innerHTML = htmlData
            })
        }
    },
  data() {
    return {
        // items,
      activeId: 1,
      activeIndex: 0,
      asideArr:[],
      activeKey: 0,
    };
  },
};
</script>
<style lang='scss'>
@import '@/assets/css/common.scss';

.cate{
    width:100%; height: 100%; display: flex; flex-direction: column;
}

.van-nav-bar {
    border-bottom: px2rem(0.5) solid #e8eaed;
}

.van-nav-bar__title {
    font-size: px2rem(18);
}
.van-nav-bar .van-icon {
    color: grey;
}
//  background: #f0f2f5;
.van-sidebar-item--select {
    color: #fa800a;
    font-weight: 500;
}
.van-sidebar {
    width: px2rem(100);
    overflow-y: auto;
}
.van-sidebar-item--select::before {
    height: px2rem(59);
    background:#fa800a;
}
/deep/.van-sidebar-item {
    border-right: px2rem(0.2) solid #e8eaed;
}
.aside{ display: flex; overflow-y: scroll; }
 
.aside-l{ overflow-y: scroll; }
.aside-r{ flex: 1; overflow-y: scroll; }
.content{ width: 100%; height: px2rem(50); line-height: px2rem(50);
          margin-bottom: px2rem(5); text-align: center; box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);}
 

 
</style>

