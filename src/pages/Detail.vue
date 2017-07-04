<template>
  <div class="wrap">
    <mt-header title="教练主页" style="height: 50px;">
      <router-link :to="{name: 'Home', params: {tab:0}}" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <div class="loading" v-if="loading" style="margin: auto; width:50%; text-align:center;">
      <mt-spinner type="snake" style="display:inline-block;"></mt-spinner> 加载中.....
    </div>

    <!-- 基本信息 -->
    <div class="coachBaseInfo" v-if="!loading">
      <div class="coachPoster"><img :src="coachData.posterUrl"></div>
      <div class="coachInfo">
        <div class="coachName">{{coachData.name}} <span class="coachIsMember">认证会员</span></div>
        <div class="coachYear">{{coachData.year}}年教龄</div>
        <div class="coachDriverSchool"><icon class="icon" slot="icon" name="shop" scale="20"></icon>{{coachData.driverSchool}}</div>
        <div class="coachAddress"><icon class="icon" slot="icon" name="map" scale="20"></icon>{{coachData.address}}</div>
      </div>
    </div>
    <!-- 学员印象 -->
    <div class="coachTags" v-if="!loading">
      <div class="coachTagTitle">学员印象</div>
      <div class="coachTagList"><span v-for="(tag, index) in coachData.tags" class="coachTag"> {{tag}}</span></div>
    </div>
    <!-- 教练简介 -->
    <div class="coachDescription" v-if="!loading">
      <div class="coachDesTitle">教练简介</div>
      <div class="coachDesContent">{{coachData.description}}</div>
    </div>

    <div class="hotActivity"></div>

    <div class="addNewGroup" v-if="!loading" style="background: #fff;">
      <router-link to="/new">
        <mt-button size="large" style="background-color:#fff; color:#0099FF; width:80%; margin: 0 auto;">我是教练, 我也要申请个人主页</mt-button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail',

  data () {
    return {
      loading: true,
      coachData: {},
      mockData: {
        id : 232,
        name: '王梦龙',
        imgUrl:"https://unsplash.it/240/240/?random",
        posterUrl:"https://unsplash.it/240/360/?random",
        year: 13,
        score: 3.6,
        isMember: false,
        driverSchool: '龙泉驾校',
        location: 2,
        address: '锦隆训练基地（xx区 xx路xx号，地铁1号线 富锦路站下车即到）',
        tags: ['脾气好', '责任心强', '通过率高', '教学细心', '教学细心','教学细心','教学细心','教学细心','脾气好'],
        description: '学员认认真真学车,就是对我们最好的回报,热线15000203668, 本驾校有一流的教学设备, 专业的教学教练, 具有学车快,拿证快等有点, 让您快乐学车, 轻松学车, 快速办银都驾校.'
      }
    }
  },

  created() {
    this.fetchData()
  },

  methods: {
    fetchData() {
         // this.axios.get("http://localhost/code/coach.json").then((response) => {
        //   // console.log(response.data)
        //   this.coachDataList.push(...response.data)
        //   console.log(this.coachDataList)
        // })
      setTimeout(() => {
        console.log(this.$route.params)
        this.coachData = this.mockData;
        this.loading = false;
      }, 1500);
    }
  }


};
</script>

<style scoped>
.wrap {
  background-color: #F5F5F5;
}
.coachBaseInfo {
  width: 100%;
  background-color: #fff;
  padding: 5px;
  border-bottom: 2px solid #F2F2F2;
}
.coachBaseInfo:after {
  clear:both;
  content:'.';
  display:block;
  width: 0;
  height: 0;
  visibility:hidden;
}
.coachBaseInfo .coachPoster {
  float: left;
  width: 40%;
  max-height: 200px;
  overflow: hidden;
}
.coachBaseInfo .coachInfo {
  width: 60%;
  float: right;
}
.coachBaseInfo .coachInfo div {
  padding-left: 20px;
  font-size: 14px;
  line-height: 20px;
}
.coachBaseInfo .coachInfo .icon {
  height: 20px;
  width: 20px;
  vertical-align: sub;
  padding-right: 5px;
}
.coachBaseInfo .coachInfo .coachName {
  margin: 10px auto 10px;
  font-size: 18px;
  font-weight: 700;
}
.coachBaseInfo .coachInfo .coachName .coachIsMember{
  margin: 10px auto 10px;
  padding-left: 10px;
  font-size: 14px;
  font-weight: 600;
  color: #0099FF;
}
.coachBaseInfo .coachInfo .coachYear{

}
.coachBaseInfo .coachInfo .coachDriverSchool {
  margin-top: 18px;
}
.coachBaseInfo .coachInfo .coachAddress {
  margin-top: 5px;
}
.coachTags {
  background-color: #fff;
  padding: 5px;
}
.coachTags:after {
  clear:both;
  content:'.';
  display:block;
  width: 0;
  height: 0;
  visibility:hidden;
}
.coachTags .coachTagTitle{
  width: 50px;
  height: 50px;
  float: left;
  font-size: 20px;
  padding: 10px;
  line-height: 30px;
  margin: 10px;
  border-right: 2px solid #797979;
}
.coachTags .coachTagList {
  padding-top: 20px;
  height: 55px;
  overflow: hidden;
}
.coachTags .coachTagList .coachTag {
  display: inline-block;
  line-height: 20px;
  border: 1px solid #eaeaea;
  background: #fff;
  border-radius: 15px;
  padding: 0 5px;
  margin: 3px 5px;
}

.coachDescription {
  background-color: #fff;
  margin-top: 8px;
}
.coachDescription .coachDesTitle {
  border-bottom: 2px solid #F2F2F2;
  font-size: 18px;
  height: 25px;
  line-height: 25px;
  padding: 5px 10px;
}
.coachDescription .coachDesContent {
  padding: 10px;
  font-size: 12px;
  line-height: 20px;
  color: #666;
}
</style>
