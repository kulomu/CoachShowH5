<template>
  <div class="page-tabbar">

    <div class="page-wrap">
      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="0">
          <CoachShow class="coachShow" :initData="coachDataList"></CoachShow>
        </mt-tab-container-item>

        <!--    <mt-tab-container-item id="1">
                  <RankingList :initData="coachDataList"></RankingList>
                </mt-tab-container-item>
         -->
        <mt-tab-container-item id="2">
          <Profile></Profile>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <div style="background: #f7f8fd;height:0.56rem;width:100%;padding:0.6rem  0.6rem 0.44rem 0.6rem;">
      <span style="font-size:0.56rem; margin-left:0.8rem;color:#7ac97">大叔</span>
      <span style="font-size:0.56rem; margin-left:0.8rem;color:#7ac97">大叔</span>
    </div>
    <div style="width=100%;background: #f7f8fd;height:100">

    </div>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="0">
        <icon slot="icon" name="ViewGallery" scale="20"></icon>
        {{tabs[0]}}
      </mt-tab-item>
      <!--  <mt-tab-item id="1">
              <img slot="icon" src="../assets/100x100.png">{{tabs[1]}}
            </mt-tab-item> -->
      <mt-tab-item id="2">
        <icon slot="icon" name="account" scale="20"></icon>
        {{tabs[2]}}
      </mt-tab-item>
    </mt-tabbar>

  </div>
</template>

<script>
import CoachShow from '@/components/CoachShow'
import RankingList from '@/components/RankingList'
import Profile from '@/components/Profile'

export default {
  name: 'Home',

  data () {
    return {
      Authorization:"",
      selected: '0',
      tabs: ['教练秀场', '排行榜', '我的'],      // 排行榜不启用
      coachDataList: [],
      mockData: [
        {
          "id": 232,
          "name": "王梦龙",
          "imgUrl": "https://unsplash.it/240/240/?random",
          "posterUrl": "https://unsplash.it/240/360/?random",
          "year": 13,
          "score": 3.6,
          "isMember": false,
          "driverSchool": "龙泉驾校",
          "location": 2,
          "address": "锦隆训练基地（xx区 xx路xx号，地铁1号线 富锦路站下车即到）",
          "tags": ["脾气好", "责任心强", "通过率高", "教学细心", "教学细心", "教学细心", "教学细心", "教学细心", "脾气好"],
          "description": "学员认认真真学车,就是对我们最好的回报,热线15000203668, 本驾校有一流的教学设备, 专业的教学教练, 具有学车快,拿证快等有点, 让您快乐学车, 轻松学车, 快速办银都驾校."
        }, {
          "id": 232,
          "name": "王梦龙",
          "imgUrl": "https://unsplash.it/240/240/?random",
          "posterUrl": "https://unsplash.it/240/360/?random",
          "year": 13,
          "score": 3.6,
          "isMember": false,
          "driverSchool": "龙泉驾校",
          "location": 2,
          "address": "锦隆训练基地（xx区 xx路xx号，地铁1号线 富锦路站下车即到）",
          "tags": ["脾气好", "责任心强", "通过率高", "教学细心", "教学细心", "教学细心", "教学细心", "教学细心", "脾气好"],
          "description": "学员认认真真学车,就是对我们最好的回报,热线15000203668, 本驾校有一流的教学设备, 专业的教学教练, 具有学车快,拿证快等有点, 让您快乐学车, 轻松学车, 快速办银都驾校."
        }, {
          "id": 232,
          "name": "王梦龙",
          "imgUrl": "https://unsplash.it/240/240/?random",
          "posterUrl": "https://unsplash.it/240/360/?random",
          "year": 13,
          "score": 3.6,
          "isMember": false,
          "driverSchool": "龙泉驾校",
          "location": 2,
          "address": "锦隆训练基地（xx区 xx路xx号，地铁1号线 富锦路站下车即到）",
          "tags": ["脾气好", "责任心强", "通过率高", "教学细心", "教学细心", "教学细心", "教学细心", "教学细心", "脾气好"],
          "description": "学员认认真真学车,就是对我们最好的回报,热线15000203668, 本驾校有一流的教学设备, 专业的教学教练, 具有学车快,拿证快等有点, 让您快乐学车, 轻松学车, 快速办银都驾校."
        }, {
          "id": 232,
          "name": "王梦龙",
          "imgUrl": "https://unsplash.it/240/240/?random",
          "posterUrl": "https://unsplash.it/240/360/?random",
          "year": 13,
          "score": 3.6,
          "isMember": false,
          "driverSchool": "龙泉驾校",
          "location": 2,
          "address": "锦隆训练基地（xx区 xx路xx号，地铁1号线 富锦路站下车即到）",
          "tags": ["脾气好", "责任心强", "通过率高", "教学细心", "教学细心", "教学细心", "教学细心", "教学细心", "脾气好"],
          "description": "学员认认真真学车,就是对我们最好的回报,热线15000203668, 本驾校有一流的教学设备, 专业的教学教练, 具有学车快,拿证快等有点, 让您快乐学车, 轻松学车, 快速办银都驾校."
        }, {
          "id": 232,
          "name": "王梦龙",
          "imgUrl": "https://unsplash.it/240/240/?random",
          "posterUrl": "https://unsplash.it/240/360/?random",
          "year": 13,
          "score": 3.6,
          "isMember": false,
          "driverSchool": "龙泉驾校",
          "location": 2,
          "address": "锦隆训练基地（xx区 xx路xx号，地铁1号线 富锦路站下车即到）",
          "tags": ["脾气好", "责任心强", "通过率高", "教学细心", "教学细心", "教学细心", "教学细心", "教学细心", "脾气好"],
          "description": "学员认认真真学车,就是对我们最好的回报,热线15000203668, 本驾校有一流的教学设备, 专业的教学教练, 具有学车快,拿证快等有点, 让您快乐学车, 轻松学车, 快速办银都驾校."
        },{
          "id": 232,
          "name": "王梦龙",
          "imgUrl": "https://unsplash.it/240/240/?random",
          "posterUrl": "https://unsplash.it/240/360/?random",
          "year": 13,
          "score": 3.6,
          "isMember": false,
          "driverSchool": "龙泉驾校",
          "location": 2,
          "address": "锦隆训练基地（xx区 xx路xx号，地铁1号线 富锦路站下车即到）",
          "tags": ["脾气好", "责任心强", "通过率高", "教学细心", "教学细心", "教学细心", "教学细心", "教学细心", "脾气好"],
          "description": "学员认认真真学车,就是对我们最好的回报,热线15000203668, 本驾校有一流的教学设备, 专业的教学教练, 具有学车快,拿证快等有点, 让您快乐学车, 轻松学车, 快速办银都驾校."
        }, {
          "id": 232,
          "name": "王梦龙",
          "imgUrl": "https://unsplash.it/240/240/?random",
          "posterUrl": "https://unsplash.it/240/360/?random",
          "year": 13,
          "score": 3.6,
          "isMember": false,
          "driverSchool": "龙泉驾校",
          "location": 2,
          "address": "锦隆训练基地（xx区 xx路xx号，地铁1号线 富锦路站下车即到）",
          "tags": ["脾气好", "责任心强", "通过率高", "教学细心", "教学细心", "教学细心", "教学细心", "教学细心", "脾气好"],
          "description": "学员认认真真学车,就是对我们最好的回报,热线15000203668, 本驾校有一流的教学设备, 专业的教学教练, 具有学车快,拿证快等有点, 让您快乐学车, 轻松学车, 快速办银都驾校."
        }
      ]
    }
  },

  components: {
    CoachShow,
    RankingList,
    Profile
  },

  mounted() {
    this.getData();
    this.getBanner();
    this.getTag();
    this.getCoach();
    this.$nextTick(() => {
      if(this.$route.params.tab) {
        this.selected = this.$route.params.tab + ''
      }
    });

  },

  methods: {
    getData() {
      //http://localhost:3000/api/coachList
      // this.axios.get("http://localhost/code/coach.json").then((response) => {
      //   // console.log(response.data)
      //   this.coachDataList.push(...response.data)
      //   console.log(this.coachDataList)
      // })
      this.coachDataList.push(...this.mockData)
    },
    getBanner() {
      this.axios.post("userInfo/coachShow",{pageIndex:1,pageSize:10})
      .then((response)=>{
        console.log(response);
      })
    },
    getTag() {
      this.axios.post("userInfo/tagList",{})
      .then((response)=>{
        console.log(response);
      })
    },
     getCoach() {
      this.axios.post("userInfo/coachWithTag",{pageIndex:1,pageSize:10})
      .then((response)=>{
        console.log(response);
      })
    }
  }

}

</script>

<style scoped>
.page-tabbar {
  overflow: hidden;
  height:100%;
}

.page-wrap {
  height:500px;
  overflow: auto;
  height: 100%;
}

</style>
