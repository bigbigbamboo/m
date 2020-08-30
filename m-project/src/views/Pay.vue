<template>
<div class="pay">
    <div class="header">
        <p class='Ptag1'>&lt;</p>
        <p class='Ptag2'>支付方式</p>
         <p class='Ptag3'>&lt;</p>
    </div>
    <div class="payStyle">
        <p class="wxPay"> <img src="../assets/imgs/wechat.jpg" alt=""></p>
        <p class="zfbPay"> <img src="../assets/imgs/zfb.jpg" alt=""></p>
    </div>
<!-- end -->  
</div>
</template>
<script>
export default {
}
</script>
<style lang='scss' scoped>
@import '@/assets/css/common.scss';

.pay{ width: 100%; height: 100%; display: flex; flex-direction: column; }
.header{ display: flex; justify-content: space-between; padding: 0 px2rem(35); 
         box-sizing: border-box; align-items: center; font-size:px2rem(18);
         width:px2rem(375); height: px2rem(50); 
         box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);}
.Ptag3{ visibility: hidden; }
.payStyle{ display: flex; justify-content: space-around; margin-top: px2rem(20); }
.wxPay,.zfbPay{ width: px2rem(100); height: px2rem(100); 
                img{ width: 100%; height: 100%; }}


</style>