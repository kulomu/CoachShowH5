<template>
  <div style="margin-top: 20px;">
<!--     <div>
      <img class="avatar" src="../assets/head.jpg">
      <div class="userName">
        <span>心随</span>
        <span>秀值76</span>
      </div>
    </div> -->

    <div class="showSwiper">
      <swiper v-if="swiperSlides[0]" :options="swiperOption">
        <swiper-slide v-for="slide in swiperSlides" :key="slide.id">
          <router-link :to="{ name: 'Detail', params: slide }"><img :data-src="slide.posterUrl" class="swiper-lazy"></router-link>
        </swiper-slide>
      </swiper>
    </div>

    <div class="addNewGroup">
      <router-link to="/new">
        <mt-button size="large" style="background-color:#0099FF; color:#fff;">制作我的秀卡</mt-button>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CoachShow',

  props: {
    initData: {
      required: true,
      type: Array
    }
  },

  data () {
    return {
      swiperOption: {
        autoplay : 5000,
        autoplayDisableOnInteraction: false,
        loop : true,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        preloadImages: false,
        lazyLoading: true,
        lazyLoadingInPrevNext: true,
        lazyLoadingInPrevNextAmount: 3,
        coverflow: {
            rotate: 0,      // rotate：slide做3d旋转时Y轴的旋转角度。默认50。
            stretch: 150,   // stretch：每个slide之间的拉伸值，越大slide靠得越紧。 默认0。
            depth: 300,     // depth：slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
            modifier: 1,    //slideShadows：开启slide阴影。默认 true。
            slideShadows : true
        }
      },
      swiperSlides: []
    }
  },

  watch: {
    initData(newData) {
      console.log(newData)
      this.swiperSlides.push(...this.initData)
    }
  },

  mounted() {
    this.swiperSlides.push(...this.initData)
    console.log(this.initData)
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.avatar {
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 50px;
}
.userName {
  display: inline-block;
  vertical-align: middle;
  padding-bottom: 25px;
}

.showSwiper {
  width: 100%;
  padding-top: 5px;
  padding-bottom: 30px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #444!important;
  width: 240px;
  height: 360px;
}

.swiper-slide img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  position: absolute;
  left: 50%;
  top: 50%;
}

.addNewGroup {
  width:60%;
  margin: auto;
}
</style>
