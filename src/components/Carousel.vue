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
        { url: 'http://upload.youzu.com/youzu/2018/0917/190135966.jpg' },
        { url: 'http://upload.youzu.com/youzu/2018/1008/161421812.jpg' },
        { url: 'http://upload.youzu.com/youzu/2018/1009/151031443.jpg' },
        { url: 'http://upload.youzu.com/youzu/2018/0929/140327634.jpg' }
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