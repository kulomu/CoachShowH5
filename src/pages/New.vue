<template>
  <div class="page-field">

    <mt-header title="制作我的秀卡" style="height: 50px;">
      <router-link :to="{name: 'Home', params: {tab:0}}" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <div class="banner"><img src="../assets/400x240.png"></div>

    <div class="page-part">
      <mt-field label="用户名" placeholder="请输入用户名" :attr="{ maxlength: 10 }"></mt-field>
      <mt-field label="电话" placeholder="请输入手机号" type="tel"></mt-field>
      <mt-field label="驾校" placeholder="请输入驾校" ></mt-field>
      <mt-field label="训练场" placeholder="请输入训练场" ></mt-field>
    </div>

    <div style="font-size:12px; color:#aaa; margin: 10px auto; text-align: center;">提交后，工作人员将在24小时内与您联系</div>
    <div class="submit">
      <mt-button size="large" style="background-color:#0099FF; color:#fff; width:60%; margin: 0 auto;" >制作我的秀卡</mt-button>
    </div>
    <div class="actRule">活动规则</div>

  </div>
</template>

<script>
export default {
  name: 'page-field'
};
</script>

<style scoped>
.banner {
  width: 100%;
  max-height: 200px;
  overflow: hidden;
}
.banner img{
  width: 100%
}
.page-part {
  margin-top: 20px;
}
.actRule {
  font-size: 14px;
  margin:20px auto 0;
  text-align: center;
  color: #0099FF;
  text-decoration: underline;
}
</style>
