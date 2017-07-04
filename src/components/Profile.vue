<template>
    <div id="views">
      <div class="wrap">

        <!--用户信息-->
        <header class="hd">
          <div class="avaterbox">
              <div class="r">
                <img :src="userInfo.headimgurl" alt="" class="avater">
              </div>
          </div>
          <div class="namecard">
            <h2 class="tt">{{userInfo.nickname}}</h2>
            <!-- <span class="regist">注册</span><span class="login">登录</span> -->
          </div>
          <div class="editInfo">
            <router-link to="/editUser"><span>编辑</span></router-link>
          </div>
        </header>

        <!--用户信息-->
        <ul class="modlist hasarrow">
          <router-link to="/regMember"><li><icon class="icon" name="trust" scale="20"></icon>我的会员</li></router-link>
          <router-link to=""><li><icon class="icon" name="survey" scale="20"></icon>我的秀卡</li></router-link>
        </ul>

        <!-- 招生信息 -->
        <!--  <ul class="modlist hasarrow">
          <router-link to=""><li><icon class="icon" name="form" scale="20"></icon>我的班型</li></router-link>
          <router-link to=""><li><icon class="icon" name="pic" scale="20"></icon>我的相册</li></router-link>
        </ul> -->

        <!--辅助信息-->
        <ul class="modlist hasarrow">
          <router-link to=""><li><icon class="icon" name="help" scale="20"></icon>关于我们</li></router-link>
          <router-link to=""><li><icon class="icon" name="help" scale="20"></icon>意见反馈</li></router-link>
        </ul>

        <!--退出按钮-->
        <!-- <input type="button" id="M_logout" class="logout" value="退出登录"> -->
      </div>
    </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      userInfo: {}
    }
  },

  mounted() {
    this.userInfo = this.$store.getters.getUserInfo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap {
  color: #424242;
}

.hd {
  box-sizing: border-box;
  padding: 10px 15px;
  background-color: #0099FF
}

.avaterbox {
  display: table-cell;
  padding: 0 15px
}

.avaterbox .r {
  margin: 2px auto 0 auto;
  background-color: #0099FF;
  -webkit-border-radius: 50px;
  border-radius: 50px;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  overflow: hidden;
  width: 73px;
  height: 73px;
}

.avaterbox .avater {
  width: 100%;
  height: 100%
}

.namecard {
  display: table-cell;
  vertical-align: middle
}

.namecard .tt {
  font-size: 18px;
  color: #fff;
}

.namecard .regist {font-size: 14px; color: #fff; margin-bottom: 15px; margin-right: 15px; }
.namecard .login {font-size: 14px; color: #fff; margin-bottom: 15px }

.editInfo {
  display: table-cell;
  vertical-align: middle;
  padding-top: 20px;
}

.editInfo span {
  color: #fff;
  padding-left: 30px;
}

.modlist {
  margin-bottom: 20px;
  border-top: 1px solid #d1d1d1;
  border-bottom: 1px solid #d1d1d1;
  background-color: #fff
}

.modlist li {
  margin-left: 14px;
  line-height: 1.5;
  padding: 12px 12px 12px 0;
  border-bottom: 1px solid #e5e5e5;
}

.modlist li .icon {
  height: 20px;
  width: 20px;
  vertical-align: sub;
  padding-right: 5px;
}


.modlist a:last-child li{
  border: none
}

.modlist li .info {
  float: right;
  margin-right: 7%;
  color: #999
}

.hasarrow li {
  background: url(http://s8.mogucdn.com/pic/140730/176rwo_ieygimrsmy4tezbvmiytambqgqyde_16x29.png) no-repeat 95% center;
  background-size: 8px
}

.modlist .operate {
  border-top: 1px solid #e5e5e5!important;
  background: 0 0;
  margin: -1px 0 0 0;
  background-color: #fff;
  padding: 0
}

.modlist .operate .ic {
  position: relative;
  float: left;
  display: block;
  width: 25%;
  text-align: center;
  color: #727272;
  font-size: 12px;
  padding: 9px 0 7px 0
}

.modlist .operate .icon {
  font-size: 16px;
  height: 20px
}

.modlist .operate .caution {
  position: absolute;
  right: 6px;
  top: 4px;
  max-width: 24px;
  color: #fff;
  background-color: #f5342f;
  -webkit-border-radius: 14px;
  border-radius: 14px;
  line-height: 1;
  padding: 3px 5px 2px 5px;
  text-overflow: ellipsis;
  overflow: hidden
}

.logout {
  display: block;
  width: 90.6%;
  height: 40px;
  line-height: 40px;
  margin: 0 auto 20px auto;
  color: #fff;
  background-color: #0099FF;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  border: none;
  font-size: 14px;
  outline: 0;
  -webkit-appearance: button;
  *overflow: visible
}

</style>
