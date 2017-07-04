<template>
  <div class="rankingList">
    <div class="newActivity">
      <swiper :options="swiperOption">
        <swiper-slide><img src="https://unsplash.it/400/200/?random"></swiper-slide>
        <swiper-slide><img src="https://unsplash.it/400/200/?random"></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

    <div class="rankBoard">
      <mt-navbar v-model="selected" class="boardTab">
        <mt-tab-item id="1">
          <span class="tabText">本月新人榜</span>
        </mt-tab-item>
        <mt-tab-item id="2">
          <span class="tabText">同城总榜</span>
        </mt-tab-item>
      </mt-navbar>

      <!-- tab-container -->
      <mt-tab-container v-model="selected">

        <!-- 新人排行榜 -->
        <mt-tab-container-item id="1">
          <div class="page-loadmore-wrapper" ref="newCoachWrapper" style="overflow: scroll;" :style="{ height: newCoachWrapperHeight + 'px' }">
            <mt-loadmore :bottom-method="newCoachLoadBottom" :autoFill="false" :bottom-all-loaded="newCoachAllLoaded" ref="newCoachLoadmore" @bottom-status-change="handleBottomChange">
              <ul class="coachWrap">
                <li v-for="(item, index) in newCoachList" class="coachItem" :class="{'secondCol': (index+1)%2 === 0}">
                    <div class="coachImg"><img :src="item.imgUrl"></div>
                    <div class="coachName">{{ item.name }} 教练</div>
                    <div class="coachYear">{{ item.year }}年教龄</div>
                    <div class="coachTags" v-for="tag in item.tags" >{{tag}}</div>
                </li>
              </ul>
              <div slot="bottom" class="mint-loadmore-bottom">
                <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑ 上拉加载更多 ↑</span>
                <span v-show="bottomStatus === 'loading'"> <mt-spinner type="snake" style="display:inline-block; margin: auto;"></mt-spinner>正在加载更多数据.....</span>
              </div>
            </mt-loadmore>
          </div>
        </mt-tab-container-item>

        <!-- 同城排行榜 -->
        <mt-tab-container-item id="2">
          同城总榜
        </mt-tab-container-item>

      </mt-tab-container>
    </div>
  </div>
</template>

<script>
export default {

  name: 'RankingList',

  props: ['initData'],

  data () {
    return {
      mockData: [
        {id: 123, name: '梦龙', year: 3, imgUrl: 'https://unsplash.it/240/240/?random', posterUrl: 'https://unsplash.it/240/360/?random', tags: ['教学细心'], location: '2'},
        {id: 124, name: '梦龙', year: 4, imgUrl: 'https://unsplash.it/240/240/?random', posterUrl: 'https://unsplash.it/240/360/?random', tags: ['教学细心'], location: '2'},
        {id: 125, name: '梦龙', year: 2, imgUrl: 'https://unsplash.it/240/240/?random', posterUrl: 'https://unsplash.it/240/360/?random', tags: ['教学细心'], location: '2'},
        {id: 126, name: '梦龙', year: 5, imgUrl: 'https://unsplash.it/240/240/?random', posterUrl: 'https://unsplash.it/240/360/?random', tags: ['教学细心'], location: '2'},
        {id: 127, name: '梦龙', year: 5, imgUrl: 'https://unsplash.it/240/240/?random', posterUrl: 'https://unsplash.it/240/360/?random', tags: ['教学细心'], location: '2'},
        {id: 128, name: '梦龙', year: 6, imgUrl: 'https://unsplash.it/240/240/?random', posterUrl: 'https://unsplash.it/240/360/?random', tags: ['教学细心'], location: '2'},
        {id: 129, name: '梦龙', year: 4, imgUrl: 'https://unsplash.it/240/240/?random', posterUrl: 'https://unsplash.it/240/360/?random', tags: ['教学细心'], location: '2'},
        {id: 130, name: '梦龙', year: 3, imgUrl: 'https://unsplash.it/240/240/?random', posterUrl: 'https://unsplash.it/240/360/?random', tags: ['教学细心'], location: '2'},
        {id: 131, name: '梦龙', year: 2, imgUrl: 'https://unsplash.it/240/240/?random', posterUrl: 'https://unsplash.it/240/360/?random', tags: ['教学细心'], location: '2'},
        {id: 132, name: '梦龙', year: 1, imgUrl: 'https://unsplash.it/240/240/?random', posterUrl: 'https://unsplash.it/240/360/?random', tags: ['教学细心'], location: '2'}
      ],
      newCoachList: [],
      newCoachAllLoaded: false,
      newCoachWrapperHeight:0,
      bottomStatus: '',
      selected: '1',
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay : 5000,
        autoplayDisableOnInteraction: false,
        loop : true,
        grabCursor: true
      },
      msg: 'Welcome to Your Vue.js App'
    }
  },

  methods: {
    newCoachLoadBottom() {
      console.log("加载更多数据")
      // 加载更多数据
      setTimeout(() => {
          if (this.newCoachList.length < 60) {
            this.newCoachList.push(...this.mockData);
          } else {
            this.newCoachAllLoaded = true;
          }
          this.$refs.newCoachLoadmore.onBottomLoaded();
        }, 1500);
    },

    handleBottomChange(status) {
      console.log(status)
      this.bottomStatus = status
    }
  },

  created() {
    this.newCoachList.push(...this.initData);
  },

  mounted() {
    this.newCoachWrapperHeight = document.documentElement.clientHeight - this.$refs.newCoachWrapper.getBoundingClientRect().top;
  }
}
</script>

<style scoped>
.rankingList {
  overflow: hidden;
  height: 100%;
}
.swiper-slide {
  background-position: center;
  background-size: cover;
  background-color: #eee;
  width: 100%;
  height: 200px;
}
.boardTab {
  width: 50%;
}
.boardTab .tabText{
  font-size:15px;
}
.coachWrap {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  width: 100%;
}
.coachItem {
  list-style-type: none;
  display:-webkit-box;
  -webkit-box-orient: vertical;
  font-size: 12px;
  width: 48%;
  padding-right: 2%;
  padding-bottom: 10px;
}
.secondCol {
  padding-left: 1%;
  padding-right: 0;
}
.coachItem .coachImg {
  width: 100%;
  height: 180px;
  overflow: hidden;
}
.coachItem .coachName {
  
}
.coachItem .coachYear {
  display: inline-block;
  line-height: 16px;
  height: 16px;
}
.coachItem .coachTags {
  display: inline-block;
  font-size: 12px;
  display: inline-block;
  line-height: 16px;
  height: 16px;
  color: #7FCAFD;
  vertical-align: top;
  margin: px 5px 0 0;
  border-radius: 2px;
}
</style>
