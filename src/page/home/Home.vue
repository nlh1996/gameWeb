<template>
  <div class="home">
    <carousel></carousel>
    <game-list></game-list>
    <extend></extend>
    <!-- <el-row>
      <el-col span="24">
        <tips></tips>
      </el-col>

    </el-row> -->

  </div>
</template>

<script>  
import gameList from '@/components/GameList'
import carousel from '@/components/Carousel'
import tips from "@/components/Tips"
import extend from "@/components/Extend"
export default {
  name: 'home',
  components: {
    gameList,
    carousel,
    tips,
    extend
  }
}
</script>
<style>
.home .el-carousel__arrow {
  width: 44px;
  height: 60px;
  top: 25%;
  border-radius: 0;
}
.home .el-carousel__arrow--left {
  left: 0;
}
.home .el-carousel__arrow--right {
  right: 0;
}
.home .el-carousel__indicators {
  top: 40%;
}
</style>
<style scoped>
.home {
  padding-top: 60px;
}
</style>