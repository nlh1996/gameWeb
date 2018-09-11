<template>
  <div class="header">
    <div class="inner">
      <el-row>
        <el-col :lg="9"
                :md="6"
                :sm="6"
                :xs="6">
          <router-link to="/home"
                       class="logo">
            <img :src="mobileImg"
                 alt="yoozoo"
                 class="logo__img">
          </router-link>
        </el-col>
        <el-col :lg="15"
                :md="18"
                :sm="18"
                :xs="18">
          <el-menu :default-active="activeIndex"
                   class="el-menu-nav"
                   mode="horizontal"
                   @select="handleSelect"
                   text-color="#333"
                   active-text-color="#f68121"
                   router>
            <el-menu-item index="/home">首页</el-menu-item>
            <el-menu-item index="/user">
              个人中心
            </el-menu-item>
            <el-menu-item index="/pay">充值</el-menu-item>
            <el-menu-item index="/bbs">
              论坛
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: '/home',
      pcImg: '/static/img/head/logo.png',
      mobileImg: '/static/img/head/logo_mobile.png'
    };
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style lang="less" scoped>
@import '../assets/styles/theme.less';
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  // height: 61px;
  background-color: @head-bgc;
  // background-image: url('/static/img/head/platform_header_bg.jpg');
  z-index: 999;
}
.inner {
  max-width: 1200px;
  margin: auto;
}
.el-menu-item {
  font-size: 18px;
}
.el-menu--horizontal {
  border: none;
}
.logo {
  display: block;
  // height: 61px;
  line-height: 61px;
}
.logo__img {
  width: 120px;
  height: 39px;
}
@media screen and (max-width: 480px) {
  .logo {
    padding-left: 5px;
    padding-right: 10px;
  }
  .logo__img {
    width: 85px;
    height: 30px;
  }
  .el-menu-item {
    font-size: 14px;
  }
}
</style>
