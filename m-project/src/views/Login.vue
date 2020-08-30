<template>
<div class="login">

    <!-- 顶部开始 -->
    <div class="header">
        <van-nav-bar
            title="登录"
            left-text=""
            right-text="快速注册"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
            />
    </div>
    <!-- 顶部结束 -->
    <!-- 表单开始 -->
    <div class="form">
        <van-form @submit="onSubmitLogin">
            <van-field
                v-model="apiParams.uname"
                name="用户名"
                label="用户名"
                placeholder="请输入用户名"
                :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
                v-model="apiParams.pwd"
                type="password"
                name="密码"
                label="密码"
                placeholder="请输入密码"
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
                <van-button round block type="info" native-type="submit">
                开始登录
                </van-button>
            </div>
            </van-form>
    </div>
    <!-- 表单结束结束 -->
    <div class="forgetPwd">
        忘记密码？
    </div>
</div>
</template>
<script>
import { Toast } from 'vant';
import {userApi} from '@/api'
// postLogin
export default {
    data() {
    return {
      apiParams:{
          uname: '',
          pwd: '',
          captcha:''
      },
    };
  },
    methods: {
        onSubmitLogin(){
            userApi.postLogin(this.apiParams)
            .then(res=>{
                console.log(res)
                    if(res.meta.state == 200){
                        this.$store.dispatch('users/setUserinfo',{
                                    token: res.data.token,
                                    uname: res.data.uname,
                                    roleName:res.data.roleName,
                                })
                               Toast.success(res.meta.msg);
                        this.$router.push({path:"/"})
                    }else{
                        Toast.fail(res.meta.msg);
                    }
            })
        },
        // 表单
        onSubmit(values) {
        console.log('submit', values);
        },
        //更改验证码
        changeCode(){
			document.querySelector('.imgTag').setAttribute('src','http://kg.zhaodashen.cn/v1/public/captcha.jsp?t=`(new Date).getTime()`')
        },
        //顶部
        onClickLeft() {
        Toast('返回');
        },
        onClickRight() {
            this.$router.push({path:'/sign'})
        Toast('按钮');
        },
    },
};
</script>
<style lang='scss'  scoped>

@import '@/assets/css/common.scss';

.login{width:100%; height:100%; background: #e9ecf0;}

.form{ margin-top: px2rem(10); }
.van-button--info {
    color: #fff;
    background-color: #fa800a;
    border: 1px solid #fa800a;
}
.van-button--round {
    border-radius: 10px;
}

/deep/ .van-nav-bar__text {
    color: grey; font-size: px2rem(16);
}

/deep/ .van-nav-bar .van-icon {
    color: grey;
}
/deep/.van-nav-bar__title {
    font-size: px2rem(18);
}
.forgetPwd{
    color: #fa800a; float:right; margin-right: px2rem(20);
}
.imgTag{ margin-left: px2rem(70); width:px2rem(200); height: px2rem(40);}
</style>