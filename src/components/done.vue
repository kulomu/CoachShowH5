<template>
  <div>
    <div class="header" v-if='hasSubmited'>
      制作我的秀卡
    </div>
    <div class="header" v-else>
      使用
    </div>

    <div class="tip" v-if='hasSubmited'> 
        <p>你的申请已提交成功</p>
        <p>工作人员将在24小时内与您联系</p>
        <div class='btn'>查看更多特权</div>
    </div>
    <div class="tip" v-else>
        <p>您的招生海报已制作完成！</p>
        <div class='btn'>查看我的秀卡</div>
    </div>
  </div>
</template>
<script>
export default {
  props:['hasSubmited']
}
</script>

<style>
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
.tip p {
  text-align: center;
  margin-top: 20px;
}
.btn{
    width: 80%;
    height:45px;
    line-height: 45px;
    font-size: .7rem;
    text-align: center;
    background:linear-gradient(#70c4f9,#5692fd);
    color:#fff;
    margin:0 auto;
    margin-top:20px;
    border-radius: 4px;
}
</style>


