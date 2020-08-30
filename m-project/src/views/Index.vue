<template>
<div class="index">
    <!-- 顶部开始 -->
    <div class="header">
        <div class="topBorder">
            <span class="iconfont icon-fangdajing"></span> 
            <input placeholder="你想买些什么" type="text" name="" id="">  
        </div>
        <span class="iconfont icon-xiaoxi"></span>
    </div>
    <!-- 顶部开始 -->
    <!-- 导航开始 -->
    <div class="nav">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
        </van-swipe>
    </div>
    <!-- 导航结束 -->
    <!-- 分类开始 -->
    <div class="cate">
        <van-grid>
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        </van-grid>
    </div>
    <!-- 分类结束 -->
    <!-- 下拉菜单商品开始 -->
    <div class="goods">
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
        >
            <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
            <div class="column">
                    <div class="titleTag">
                        <p></p>
                        <h2>新品上架</h2>
                        <p>  ＞</p>
                    </div>
                    
                    <div class="goodItem columnNew">
                        <div class="goodsCate">
                            <img src="../assets/imgs/1.jpg" alt="">
                            <div class="wordDiv">
                                <p class="word">
                                    <span class='sp1'>KD876</span>
                                    <span class='sp2'>￥1388.00</span>
                                </p>
                                <p class="spacePtag"></p>
                                <p class='pTag'><i class='iTag1'>0</i><i class='iTag2'>人已购买</i></p>
                            </div>
                        </div>
                        <div class="goodsCate">
                            <img src="../assets/imgs/1.jpg" alt="">
                            <div class="wordDiv">
                                <p class="word">
                                    <span class='sp1'>KD876</span>
                                    <span class='sp2'>￥1388.00</span>
                                </p>
                                <p class="spacePtag"></p>
                                <p class='pTag'><i class='iTag1'>0</i><i class='iTag2'>人已购买</i></p>
                            </div>
                        </div>
                        <div class="goodsCate">
                            <img src="../assets/imgs/1.jpg" alt="">
                            <div class="wordDiv">
                                <p class="word">
                                    <span class='sp1'>KD876</span>
                                    <span class='sp2'>￥1388.00</span>
                                </p>
                                <p class="spacePtag"></p>
                                <p class='pTag'><i class='iTag1'>0</i><i class='iTag2'>人已购买</i></p>
                            </div>
                        </div>
                        <div class="goodsCate">
                            <img src="../assets/imgs/1.jpg" alt="">
                            <div class="wordDiv">
                                <p class="word">
                                    <span class='sp1'>KD876</span>
                                    <span class='sp2'>￥1388.00</span>
                                </p>
                                <p class="spacePtag"></p>
                                <p class='pTag'><i class='iTag1'>0</i><i class='iTag2'>人已购买</i></p>
                            </div>
                        </div>
                    </div>
            </div>
            <div class="spaceDivTag"></div>

            
            <div class="column">
                    <div class="titleTag">
                        <p></p>
                        <h2>热卖商品</h2>
                        <p>  ＞</p>
                    </div>
                    
                    <div class="goodItem columnHot">
                        <div class="goodsCate">
                            <img src="../assets/imgs/1.jpg" alt="">
                            <div class="wordDiv">
                                <p class="word">
                                    <span class='sp1'>KD876</span>
                                    <span class='sp2'>￥1388.00</span>
                                </p>
                                <p class="spacePtag"></p>
                                <p class='pTag'><i class='iTag1'>0</i><i class='iTag2'>人已购买</i></p>
                            </div>
                        </div>
                        <div class="goodsCate">
                            <img src="../assets/imgs/1.jpg" alt="">
                            <div class="wordDiv">
                                <p class="word">
                                    <span class='sp1'>KD876</span>
                                    <span class='sp2'>￥1388.00</span>
                                </p>
                                <p class="spacePtag"></p>
                                <p class='pTag'><i class='iTag1'>0</i><i class='iTag2'>人已购买</i></p>
                            </div>
                        </div>
                        <div class="goodsCate">
                            <img src="../assets/imgs/1.jpg" alt="">
                            <div class="wordDiv">
                                <p class="word">
                                    <span class='sp1'>KD876</span>
                                    <span class='sp2'>￥1388.00</span>
                                </p>
                                <p class="spacePtag"></p>
                                <p class='pTag'><i class='iTag1'>0</i><i class='iTag2'>人已购买</i></p>
                            </div>
                        </div>
                        <div class="goodsCate">
                            <img src="../assets/imgs/1.jpg" alt="">
                            <div class="wordDiv">
                                <p class="word">
                                    <span class='sp1'>KD876</span>
                                    <span class='sp2'>￥1388.00</span>
                                </p>
                                <p class="spacePtag"></p>
                                <p class='pTag'><i class='iTag1'>0</i><i class='iTag2'>人已购买</i></p>
                            </div>
                        </div>
                    </div>
            </div>
            <div class="spaceDivTag"></div>


            <div class="column">
                    <div class="titleTag">
                        <p></p>
                        <h2>好物推荐</h2>
                        <p>  ＞</p>
                    </div>
                    
                    <div class="goodItem  columnBest">
                        <div class="goodsCate">
                            <img src="../assets/imgs/1.jpg" alt="">
                            <div class="wordDiv">
                                <p class="word">
                                    <span class='sp1'>KD876</span>
                                    <span class='sp2'>￥1388.00</span>
                                </p>
                                <p class="spacePtag"></p>
                                <p class='pTag'><i class='iTag1'>0</i><i class='iTag2'>人已购买</i></p>
                            </div>
                        </div>
                        <div class="goodsCate">
                            <img src="../assets/imgs/1.jpg" alt="">
                            <div class="wordDiv">
                                <p class="word">
                                    <span class='sp1'>KD876</span>
                                    <span class='sp2'>￥1388.00</span>
                                </p>
                                <p class="spacePtag"></p>
                                <p class='pTag'><i class='iTag1'>0</i><i class='iTag2'>人已购买</i></p>
                            </div>
                        </div>
                        <div class="goodsCate">
                            <img src="../assets/imgs/1.jpg" alt="">
                            <div class="wordDiv">
                                <p class="word">
                                    <span class='sp1'>KD876</span>
                                    <span class='sp2'>￥1388.00</span>
                                </p>
                                <p class="spacePtag"></p>
                                <p class='pTag'><i class='iTag1'>0</i><i class='iTag2'>人已购买</i></p>
                            </div>
                        </div>
                        <div class="goodsCate">
                            <img src="../assets/imgs/1.jpg" alt="">
                            <div class="wordDiv">
                                <p class="word">
                                    <span class='sp1'>KD876</span>
                                    <span class='sp2'>￥1388.00</span>
                                </p>
                                <p class="spacePtag"></p>
                                <p class='pTag'><i class='iTag1'>0</i><i class='iTag2'>人已购买</i></p>
                            </div>
                        </div>
                    </div>
            </div>
            <div class="spaceDivTag"></div>


        </van-list>
        </van-pull-refresh>
    </div>
    <!-- 下拉菜单结束 -->
    <div class="bottom">
         <Footer></Footer>
    </div>
   
<!-- // -->    
</div>
</template>
<script>

import Footer from '@/components/Footer.vue'
import {listApi} from '@/api'
// getListinfo

export default {
    mounted(){
        this.$nextTick(() => {
            this.initData('hot','.columnHot')
            this.initData('best','.columnBest')
            this.initData('new','.columnNew')
        })
        //商品进入详情页开始
        // document.querySelector('.goodsCate').onclick = function(){

        // }
        //商品进入详情页结束
    },
    components:{
        Footer
    },
  data() {
    return {
      active: 1,   //底部标签选中
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
    };
  },
//   <router-link to='/'>电影</router-link>
  methods: {
      //接口请求数据开始
      initData(type,className){
            listApi.getListinfo({type})
            .then(res=>{
                // console.log(res)
                let htmlData=''
                res.data.list.forEach(function(item){
                    htmlData +=`
                    <div class="goodsCate" goods_id='${item.goods_id}'>
                            <div><a href="/goods/${item.goods_id}"><img src="http://tmp00001.zhaodashen.cn/${item.goods_img}" alt=""></a></div>
                            <div class="wordDiv">
                                <p class="word">
                                    <span class='sp1'>${item.goods_name}</span>
                                    <span class='sp2'>￥1388.00</span>
                                </p>
                                <p class="spacePtag"></p>
                                <p class='pTag'><i class='iTag1'>0</i><i class='iTag2'>人已购买</i></p>
                            </div>
                        </div>
                `
                })
                document.querySelector(className).innerHTML = htmlData
            })
      },
      //接口请求数据结束
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
  },
};
</script>
<style lang='scss'>

@import '@/assets/css/common.scss';


.index{
    width: 100%; height: 100%; background: #e9ecf0; 
    .header{  display: flex; width: 100%; height: px2rem(50);  background: white;
              align-items: center; padding: px2rem(20);box-sizing: border-box; 
        .topBorder{ 
            display: flex; border-radius: px2rem(30); flex: 1; align-items: center; padding: 0 px2rem(10);
             width: 290px; height: px2rem(32);background: #e9ecf0; box-sizing: border-box;
            input{ width: px2rem(290); height: px2rem(32); border: none; background: none; padding: px2rem(10);}
            .iconfont{font-size: px2rem(16)!important;}  margin-right: px2rem(10);
        }
        .iconfont{font-size: px2rem(20)!important; font-weight: 300!important;}
    }
    .nav{ width: 100%; height: px2rem(187);}
    //轮播图开始
     .my-swipe .van-swipe-item 
     {
        color: #fff;
        font-size: 20px;
        line-height: 187px;
        text-align: center;
        background-color: #39a9ed;
     }
    //轮播图结束
    //分类开始
    .cate
    { 
        width: 100%; height: px2rem(96); background: cadetblue;
    }
    //分类结束

    //goods开始
        .column{
            .titleTag{ display: flex; justify-content: space-around; align-items: center; padding: 0 px2rem(15);}
             width: 100%; min-height: px2rem(100); background: white;  margin-bottom: px2rem(15);
            h2{ text-align: center; margin: px2rem(10) auto px2rem(10); font-size: px2rem(16);}
        }
        // .goodItem:nth-child(even){ border-right: none; }
        .goodItem
            {
                display: flex; flex-wrap: wrap; width: 100%; 
                .goodsCate
                {
                    width: 50%; width: px2rem(186); height: px2rem(255); 
                    border-top:1px solid  #e9ecf0; border-right:1px solid  #e9ecf0;
                    align-content: space-between; display: flex; flex-direction: column;
                    justify-content: center; align-items: center;
                    img{ width:146px; height: 146px; }
                    .wordDiv{ display: flex; margin-top: px2rem(35); justify-content: space-around;
                    .spacePtag{ flex: 1; width: px2rem(40);}
                     .word
                     { 
                         display: flex; flex-direction: column; 
                         .sp1{ font-size: px2rem(14); }
                         .sp2{ font-size: px2rem(12); }
                     }
                     .pTag{ align-items:flex-end; margin-top: px2rem(15); }
                     .iTag1,.iTag2{ font-size: px2rem(12); }
                     
                   }
                }
            }
        .spaceDivTag{ width: 100%; height: px2rem(15); background: #e9ecf0; }
    
    //goods结束
a{ color: #111; }
//end
}


</style>