<template>
  <div class="wrap">
    <mt-header title="我的会员" style="height: 50px;">
      <router-link :to="{name: 'Home', params: {tab:2}}" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <div class="head">
        <div class="avatar"><img :src="avatar"></div>
    </div>

    <div class="info"></div>

    <div class="submit">
        <router-link to="/new">
            <mt-button size="large" style="background-color:#0099FF; color:#fff; width:90%; margin: 0 auto;" >立即开通 >></mt-button>
        </router-link>
    </div>

  </div>
</template>

<script>
export default {
  name: 'RegMember',
  data() {
    let avatar = this.$store.getters.getUserInfo.headimgurl
    return {
        avatar: avatar,
        isMember: false
    }
  }
};
</script>

<style scoped>

.wrap {
    width: 100%;
}

.head {
    width: 100%;
    padding: 20px 0;
}
.head .avatar {
    margin: 0 auto;
    height: 60px;
    width: 60px;
    line-height: 60px;
    border-radius: 60px;
    background-color: #fff;
    overflow: hidden;
}
.head .avatar img {
    height: 100%;
    width: 100%;
}
</style>