<template>
  <div>
     <div class="header">
      制作我的秀卡
    </div>
    <div class="tip"> 
        <p>你的申请已提交成功</p>
        <p>工作人员将在24小时内与您联系</p>
    </div>
  </div>
</template>
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
</style>


