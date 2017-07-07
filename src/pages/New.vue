<template>
  <!--<div class="page-field">
    <div class="header">
      制作我的秀卡
    </div>
    <div class="banner">
      <img src="../assets/400x240.png">
    </div>
    <div class="form-wrap">
      <div>
          <label for="name">姓名</label>
          <input type="text" name="name" v-model="name">
      </div>
      <div class="phone">
          <label for="phone">电话</label>
          <input type="text" name="phone" v-model="phone">
          <span  v-show='!sendFlag'  class="msg-btn" @click="sendMsg">获取验证码</span>
          <span v-show='sendFlag' class="msg-btn-grey">剩余{{timeCount}}s</span>
      </div>
      <div>
          <label for="msgCode">验证码</label>
          <input type="text" name="msgCode" v-model="msgCode">
      </div>
      <div>
          <label for="school">驾校</label>
          <input type="text" name="school" v-model="school">
      </div>
      <div>
          <label for="court">训练场</label> 
          <input type="text" name="court" v-model="court">
      </div>
      <div class="submit" @click="submit">提交</div>
    </div>
  </div>-->
  <div>
    <New v-if='isNew' v-on:submited='submited'></New>
    <Done v-if='isDone' :hasSubmited = 'hasSubmited' ></Done>
  </div>
</template>

<script>
import New from '@/components/new'
import Done from '@/components/done'
import common from '../utils/common.js'
import $http from '../utils/api.js'

export default {
  name: 'page-field',
  data(){
    return {
      isNew:false,
      isDone:false,
      hasSubmited:false,
    };
  },
  components: {
   New,
   Done
  },
  mounted(){
    let res =  this.post('apply/goApply',{})
    if(res.result==true){
      switch(res.data){
         case 1:
         ;
         case 2:
         this.isDone = true;
         case 3:
         this.isNew = true;
         break;
      };
    }else{
      this.isNew=true;
    }
  },
  methods:{
    async post(url,params){
      let res = await $http.post(url,params);
      return res;
    },
    submited(){
      this.isNew=false;
      this.isDone=true;
      this.hasSubmited = true;
    }
  }
};
</script>

<style scoped>

.page-field{
  position: absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background:#f7f8fd;
}
.banner {
  width: 100%;
  max-height: 200px;
  overflow: hidden;
}
.banner img{
  width: 100%
}
.header{
  line-height: 40px;
  background: #799ff8;
  font-size: 16px;
  color:#fff;
  text-align: center;
  position:relative;
}
.header::before{
   content:'';
   display: inline-block;
   width: 10px;
   height: 10px;
   border:1px solid #fff;
   transform: rotate(-45deg);
   border-right:none;
   border-bottom:none;
   position:absolute;
   left:10px;
   top:50%;
   margin-top: -5px;
}
.form-wrap{
  padding:10px 20px;
}
.form-wrap div{
  line-height: 40px;
  font-size: 14px;
  color:#333;
  background:#fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px #eee;
  margin-top: 10px;
  padding:0 20px;
}
.form-wrap .submit{
  text-align: center;
  background:linear-gradient(#70c4f9,#5692fd);
  color:#fff;
  margin-top:20px;
}
.form-wrap div input{
  border:none;
  outline: none;
  display: inline-block;
  width:78%;
  height:20px;
}
.form-wrap div label{
  width:20%;
  display: inline-block;
}
.form-wrap div.phone{
  position: relative;
}
.form-wrap div.phone input{
  width: 55%;
}
.form-wrap div.phone .msg-btn{
  position:absolute;
  right:5px;
  top:50%;
  margin-top: -15px;
  background:linear-gradient(#70c4f9,#5692fd);
  line-height: 30px;
  color: #fff;
  border-radius:2px;
  width:24%;
  text-align: center;
  font-size:12px;
}
.form-wrap div.phone .msg-btn-grey{
  background:linear-gradient(#eee,#ddd);
  position:absolute;
  right:5px;
  top:50%;
  margin-top: -15px;
  line-height: 30px;
  color: #fff;
  border-radius:2px;
  width:24%;
  text-align: center;
  font-size:12px;
}
</style>
