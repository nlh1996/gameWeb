<template>
  <div class="carousel">
    <el-carousel height="700px"
                 indicator-position="none">
      <el-carousel-item v-for="item in images"
                        :key="item">
        <img :src="item.url"
             class="carousel__img">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      images: [
        { url: require("../../static/img/carousel/102022153.jpg") },
        { url: require("../../static/img/carousel/121813175.jpg") },
        { url: require("../../static/img/carousel/163557031.jpg") }
      ]
    }
  },

}
</script>
<style lang="less" scoped>
.carousel__img {
  width: 100%;
  height: 700px;
}
</style>