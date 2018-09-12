<template>
  <div class="home">
    <div class="banner">
      <div class="banner__inner">
        <carousel></carousel>
      </div>
    </div>
    <div class="main">
      <div class="main__inner">
        <game-list></game-list>
        <extend></extend>
      </div>
    </div>
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
  top: 25%;
  border-radius: 0;
}
</style>

<style scoped>
.home {
  padding-top: 60px;
  width: 100%;
}
.banner__inner {
  width: 100%;
  min-width: 1200px;
}
.main__inner {
  position: relative;
  width: 1200px;
  margin: 0 auto;
  margin-top: -300px;
  z-index: 999;
}
</style>