<template>
  <div class="carousel">
    <el-row>
      <el-col :span="24">
        <el-carousel indicator-position="none"
                     height="967px">
          <el-carousel-item v-for="item in images"
                            :key="item">
            <h3><img :src="item.url"
                   width=100%></h3>
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      images: [
        { url: "/static/img/carousel/102022153.jpg" },
        { url: "/static/img/carousel/121813175.jpg" },
        { url: "/static/img/carousel/163557031.jpg" }
      ]
    }
  },

}
</script>
<style lang="less" scoped>
.el-carousel__item h3 {
  line-height: 150px;
  margin: 0;
}
</style>