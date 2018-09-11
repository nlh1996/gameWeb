<template>
  <div class="extend">
    <div class="inner">
      <el-row>
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
      </el-row>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.inner {
  max-width: 1200px;
  margin: 0 auto;
}
.extend {
  margin: 30px 0;
}
.extend-content {
  background: #fff;
  padding: 15px 10px;
  margin: 0 20px;
  border-radius: 10px;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
</style>

