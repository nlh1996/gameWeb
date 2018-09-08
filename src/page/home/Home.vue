<template>
  <div class="home">

    <el-row>
      <el-col span="24">
        <carousel></carousel>
      </el-col>
      <!-- /轮播图 -->
    </el-row>

    <el-row>

      <el-col span="18">
        <gamelist></gamelist>
      </el-col>
      <!-- /游戏列表 -->

      <el-col span="6">
        <div class="login">
        </div>
      </el-col>
      <!-- /登陆 -->

    </el-row>

    <el-row>
      <div class="extend">
        <el-col span="6">
          <div class="extend-content">海外平台</div>
        </el-col>
        <el-col span="6">
          <div class="extend-content">客户服务</div>
        </el-col>
        <el-col span="6">
          <div class="extend-content">游戏美女</div>
        </el-col>
        <el-col span="6">
          <div class="extend-content">
            <router-link to="/guardian">未成年人监护</router-link>
          </div>
        </el-col>
      </div>
    </el-row>

    <el-row>
      <el-col span="24">
        <tips></tips>
      </el-col>
      <!-- /tips -->
    </el-row>

  </div>
</template>

<script>  
import gamelist from '@/components/GameList'
import carousel from '@/components/Carousel'
import tips from "@/components/Tips"
export default {
  name: 'home',
  components: {
    gamelist,
    carousel,
    tips
  }
}
</script>

<style scoped>
.header {
  border-top: 1px solid #d2d5da;
  /* background: #fff url('../../assets/head/platform_header_bg.jpg') repeat-x; */
}
.extend {
  margin-top: 30px;
}
.extend-content {
  background: #fff;
  padding: 15px 10px;
  margin: 0 20px;
  border-radius: 10px;
  height: 40px;
  text-align: center;
}
</style>