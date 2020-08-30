<template>
<div class="had">
    <div class="head">
            <p> <van-icon name="arrow-left" /> </p>
            <p>收货地址</p>
            <p> <van-icon name="coupon-o" /> </p>
    </div>
    <div class="main">
        <div class="one">
            <div class="name">
                <div>
                    <span class="spName">张三</span>
                    <span class="spMobile">130000000</span>
                </div>
                <div class="addre">江苏省按时大V省省省胜多负少大V深V的</div>
            </div>
            
            <div class="switch">
                <p class="sw2">删除</p>
                <p class="sw1"></p>
            </div>
        </div>
    </div>
    <div class="foot">
        <Footer></Footer>
    </div>
</div>
</template>
<script>
import Footer from '@/components/Footer';
import {adressApi} from '@/api'
import { Toast } from 'vant';
// adressList
export default {
    mounted(){
        this.initData()
        this.del()
        this.default()
    },
    components:{
        Footer
    },
    methods:{
        default(){
            let _this = this
            document.querySelector('.main').addEventListener('click',function(e){
                 e = e || window.event 
                var target = e.target || e.srcElement
                console.log(target)
                let token = localStorage.getItem('token')
                let address_id = target.getAttribute('address_id')
                if(target.innerText === '设置默认'){
                    adressApi.mrAddress({token,address_id})
                    .then(res=>{
                        if(res.meta.state == 200){
                                Toast.success(res.meta.msg)
                                _this.initData()
                        }else{
                            Toast.fail(res.meta.msg)
                        }
                    })
                }
                
            })
        },
        del(){
            let _this = this
            document.querySelector('.main').addEventListener('click',function(e){
                 e = e || window.event 
                var target = e.target || e.srcElement
                console.log(target)
                let token = localStorage.getItem('token')
                let address_id = target.getAttribute('address_id')
                if(target.innerText === '删除'){
                    adressApi.delAddress({token,address_id})
                    .then(res=>{
                        console.log(res)
                        if(res.meta.state == 200){
                                Toast.success(res.meta.msg)
                                _this.initData()
                        }else{
                            Toast.fail(res.meta.msg)
                        }
                        
                    })
                }
                
            })
        },
        initData(){
            let token = localStorage.getItem('token')
            adressApi.adressList({token})
            .then(res=>{
                // console.log(res)
                let html=''
                res.data.forEach(function(item){
                    html += `
                    <div class="one">
                        <div class="name">
                            <div>
                                <span class="spName">${item.consignee}</span>
                                <span class="spMobile">${item.mobile}</span>
                            </div>
                            <div class="addre">${item.provinceName}${item.cityName}${item.districtName}${item.address}</div>
                        </div>
                        
                        <div class="switch">
                            <p address_id=${item.address_id}>删除</p>
                            <p class="sw1" address_id=${item.address_id}>设置默认</p>
                        </div>
                    </div>

                    `
                })
                document.querySelector('.main').innerHTML = html
            })
        }
    },
    data() {
    return {
      checked: true,
    };
  },
}
</script>
<style lang='scss'>
@import '@/assets/css/common.scss';

.had{ width:100%; height: 100%; display: flex; flex-direction: column; background: #F5F6F9;}
.head{ height: px2rem(60); display: flex; justify-content:space-around; font-size: px2rem(18); margin-bottom: px2rem(10);
       box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);align-items: center;background: white;  }
.main{ flex: 1; overflow-y: scroll; } 
.one { width: px2rem(350); height: px2rem(100); background: white; border-radius: px2rem(10); 
       margin: 0 auto; overflow: hidden; display: flex; margin-top: px2rem(5);}
.name { font-size: px2rem(16); margin-left: px2rem(15); margin-top: px2rem(10);display: flex; flex-direction: column;}
.spMobile,.spName{ font-size: px2rem(18); }
.addre{ width: px2rem(230);font-size: px2rem(14); margin-top: px2rem(10); }
.switch{ width: px2rem(80); margin-left: px2rem(10); margin-top: px2rem(15); text-align: center;}
.sw1{ margin-top: px2rem(20); background: orange; color: white; border-radius: px2rem(10);}
/deep/.van-icon {
    position: relative;
    display: inline-block;
    font: normal normal normal 14px/1 vant-icon;
    font-size: px2rem(20);
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
}
</style>