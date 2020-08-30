<template>
<div class="cars">
    <!-- 顶部开始 -->
    <div class="head">
            <p> <van-icon name="arrow-left" /> </p>
            <p>设置收货地址</p>
            <p> <van-icon name="coupon-o" /> </p>
    </div>
   <div class="main">
            <div class="addressData">
				<!-- <h4>新增/修改收货地址</h4> -->
				<form action="" name="address_form">
						<ul>
							<li>
								<label for=""><span>*</span>收 货 人：</label>
								<input type="text" name="username" class="txt" v-model='formData.username' />
							</li>
							<li>
								<label for=""><span>*</span>所在地区：</label>
								<select name="province" class="province" v-model='formData.province' @change="initCity">
									<option value="">请选择</option>
									<option value="">北京</option>
								</select>

								<select name="city" class="city" v-model='formData.city' @change="initDistrict">
									<option value="">请选择</option>
									<option value="">朝阳区</option>
								</select>

								<select name="district" class="district" v-model='formData.district'>
									<option value="">请选择</option>
									<option value="">西二旗</option>
								</select>
							</li>
							<li>
								<label for=""><span>*</span>详细地址：</label>
								<input type="text" name="address" class="txt address" v-model='formData.address' />
							</li>
							<li>
								<label for=""><span>*</span>手机号码：</label>
								<input type="text" name="mobile" class="txt" v-model='formData.mobile' />
							</li>
							<li>
								<label for="">&nbsp;</label>
								<input type="checkbox" name="is_default" value="1" class="check" />设为默认地址
							</li>
							<li>
								<label for="">&nbsp;</label>
								<input type="button" class="addBtn" name="" value="保存" @click="saveAddress" />
							</li>
						</ul>
					</form>
			</div>	
            <!-- 设置收货地址结束 -->
            <!-- 收货地址开始 -->
            
            <!-- 收货地址结束 -->
   </div>
    <div class="Footer">
        <Footer></Footer>
    </div>

<!-- end -->
</div>
</template>

// <script>
// import areaList from "../assets/js/area.js";
import { Toast } from 'vant';
import Footer from '@/components/Footer';
import { adressApi } from '@/api'
export default {
     
   mounted(){
       this.initData()
   },
   components:{
       Footer
   },
   methods:{
       saveAddress(){
           this.formData.token = localStorage.getItem('token')
           adressApi.creatAddress(this.formData)
           .then(res=>{
               console.log(res)
               if(res.meta.state == 201){
                   Toast.success(res.meta.msg)
                   this.$router.push({path:'/had'})
               }else{
                   Toast.fail(res.meta.msg)
               }
           })
       },
       initData(){  //省
           adressApi.adressData({type:'省',pid:1})
           .then(res=>{
               //省开始
               let html = '<option value="">请选择</option>'
               console.log(res)
               res.data.forEach(function(item){
                   html+=`<option value="${item.region_id}">${item.region_name}</option>`
               })
               document.querySelector('.province').innerHTML = html  
           })   
       },
       initCity(){//市
            let pid = document.querySelector('.province').value
                adressApi.adressData({type:'市',pid})
                .then(res=>{
                    //市开始
                    let html = '<option value="">请选择</option>'
                    console.log(res)
                    res.data.forEach(function(item){
                        html+=`<option value="${item.region_id}">${item.region_name}</option>`
                    })
                    document.querySelector('.city').innerHTML = html 
                })    
       },
       initDistrict(){
            let pid = document.querySelector('.city').value
                adressApi.adressData({type:'区/县',pid})
                .then(res=>{
                    //市开始
                    let html = '<option value="">请选择</option>'
                    console.log(res)
                    res.data.forEach(function(item){
                        html+=`<option value="${item.region_id}">${item.region_name}</option>`
                    })
                    document.querySelector('.district').innerHTML = html 
                })    
       },
   //method end
   },
   data(){
       return{
           formData:{
               token:'',
               username:'',
               province:'',
               city:'',
               district:'',
               address:'',
               mobile:'',
           }
       }
   }
};
</script>
<style lang='scss' >
@import '@/assets/css/common.scss';

.cars{ width:100%; height: 100%; display: flex; flex-direction: column; background: #e9ecf0;}
.head{ height: px2rem(60); display: flex; justify-content:space-around; font-size: px2rem(18); margin-bottom: px2rem(10);
       box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);align-items: center;background: white;  }
.main{ flex: 1; overflow-y: scroll; } 
.addressData{ width:100%; min-height: px2rem(300); background: white; border-radius: px2rem(30); 
              box-sizing: border-box; padding: px2rem(15);  input{ border: none; }
            h4{ margin: px2rem(10); } form{ margin: px2rem(10); } li{  margin: px2rem(10) 0; }
            ul li{ border-bottom: 1px solid #e9ecf0; padding-bottom: px2rem(30);padding-top: px2rem(15); } box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
            }
.addBtn{ width: 100%; height: px2rem(40); background: #ee0a24;  border-radius: px2rem(30);
         color: white;border: none; }
select{ width: px2rem(70); height: px2rem(30); margin-left: px2rem(3);border:none; background: none;}
 
 //end   
 
</style>