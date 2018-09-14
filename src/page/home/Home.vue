<template>
  <div class="home">
    <div class="banner">
      <div class="banner__inner">
        <carousel></carousel>
      </div>
    </div>
    <div class="main">
      <div class="main__inner">
        <div class="game">
          <div class="game__recommend">
            <game-recomend height="654px"></game-recomend>
          </div>
          <div class="game__hot">
            <game-hot></game-hot>
          </div>
        </div>
        <extend></extend>
      </div>
    </div>
  </div>
</template>

<script>  
import carousel from '@/components/Carousel'
import tips from "@/components/Tips"
import extend from "@/components/Extend"
import gameRecomend from "@/components/Recommend"
import gameHot from "@/components/Hot"
export default {
  name: 'home',
  components: {
    carousel,
    tips,
    extend,
    gameRecomend,
    gameHot
  }
}
</script>
<style lang="less" scoped>
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

.game {
  height: 715px;
  display: flex;
  flex-flow: row nowrap;
  // justify-content: center;
  border: 1px solid #ccd8e4;
  background: #fff;
}
.game__recommend {
  width: 868px;
  // height: 715px;
  padding: 23px 20px;
}
.game__hot {
  width: 331px;
  // height: 715px ;
  padding-top: 23px;
  border-left: 1px solid #ccd8e4;
  background-color: rgb(250, 250, 250);
}
</style>
<style>
.home .el-carousel__arrow {
  top: 25%;
  border-radius: 0;
}
</style>
