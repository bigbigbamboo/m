<template>
<div class="login">
    <div class="header">
        <van-nav-bar
            title="注册"
            left-text=""
            left-arrow
             @click-left="onClickLeft"
            />
    </div>
    <!-- 顶部开始 -->
    <div class="tab">
      <van-tabs v-model="active">
        <van-tab title="用户名">
            <div class="userName">
                <van-form @submit="onSubmitName">
                <van-field
                    v-model="apiParams.uname"
                    name="用户名"
                    label="用户名"
                    placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]"
                />
                <van-field
                    v-model="apiParams.pwd"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
                />
                <van-field
                    v-model="apiParams.captcha"
                    type="code"
                    name="验证码"
                    label="验证码"
                    placeholder="验证码"
                    :rules="[{ required: true, message: '请填写验证码' }]"
                />
                <div style="margin: 16px;">
                    <img class="imgTag" @click="changeCode" src="http://kg.zhaodashen.cn/v1/public/captcha.jsp" alt="" />
                    <!-- <div class="getCode">
                        获取验证码
                    </div> -->
                    <van-button round block type="info" native-type="submitUser">
                       用户名注册
                    </van-button>
                </div>
                </van-form>
            </div>
        </van-tab>
        <van-tab title="手机注册">
            <div class="message">
                <van-form @submit="onSubmitMoblie">
                <van-field
                    v-model="apiParams.mobile"
                    name="手机号"
                    label="手机号"
                    placeholder="手机号"
                    :rules="[{ required: true, message: '请填写手机号' }]"
                />
                <van-field
                    v-model="apiParams.pwd"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
                />
                <van-field
                    v-model="apiParams.code"
                    type="code"
                    name="验证码"
                    label="验证码"
                    placeholder="验证码"
                    :rules="[{ required: true, message: '请填写验证码' }]"
                />
                <div style="margin: 16px;">
                    <div class="getCode" @click="getCode">
                        获取验证码
                    </div>
                    <van-button round block type="info" native-type="submitMobile">
                      手机注册
                    </van-button>
                </div>
                </van-form>
            </div>
        </van-tab>
        </van-tabs>
    </div>
     
</div>
</template>
<script>
import { Toast } from 'vant';
import {userApi} from '@/api'

export default {
    data() {
    return {
     active: 2,
     apiParams:{
         uname: '',
         pwd:'',
         captcha:'',
         mobile: '',
         code:'',
     },
    };
  },
    methods: {
        onClickLeft() {
        Toast('返回');
            this.$router.push({path:'/'})
        },
        // 验证码获取
        getCode(){
            userApi.postMessage(this.apiParams)
            .then(res=>{
                console.log(res)
            })
        },
        //手机注册提交
        onSubmitMoblie(){
            userApi.postMobileSign(this.apiParams)
            .then(res=>{
                console.log(res)
                if(res.meta.state == 201){
                    Toast.success('操作成功');
                    this.$router.push({path:"/login"})
                }else{
                    this.$message.error(res.meta.msg)
                }
            })
        },
        //用户名注册提交
        onSubmitName(){
            userApi.postUnameSign(this.apiParams)
            .then(res=>{
                console.log(res)
                if(res.meta.state == 201){
                    Toast.success(res.meta.msg);
                    this.$router.push({path:"/login"})
                }else{
                    this.$message.error(res.meta.msg)
                }
            })
        },
        //更改验证码
        changeCode(){
			document.querySelector('.imgTag').setAttribute('src','http://kg.zhaodashen.cn/v1/public/captcha.jsp?t=`(new Date).getTime()`')
        },
        onSubmit(values) {
        console.log('submit', values);
        },
    },
};
</script>
<style lang='scss'  scoped>

@import '@/assets/css/common.scss';

.login{width:100%; height:100%; background: #e9ecf0; display: flex; flex-direction: column; overflow: hidden;}
.userName{ margin-top:px2rem(10) }
.message{ margin-top:px2rem(10) }
.getCode{ width: px2rem(200); height: px2rem(40); line-height: px2rem(40); background: #1989fa; 
          text-align: center; margin: px2rem(10) auto;  color:white; border-radius: px2rem(20); }
.imgTag{ margin-left: px2rem(70); width:px2rem(200); height: px2rem(40);}
</style>