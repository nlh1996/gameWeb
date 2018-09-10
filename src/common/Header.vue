<template>
  <el-row>
    <el-col :xs="24"
            :sm="24"
            :md="24"
            :lg="24">
      <el-menu :default-active="activeIndex"
               class="el-menu-header"
               mode="horizontal"
               @select="handleSelect"
               text-color="#333"
               active-text-color="#f68121"
               router>
        <el-menu-item class="logo"
                      index="/home">
          <img :src="mobileImg"
               alt="yoozoo"
               class="logo__img">
        </el-menu-item>
        <!-- /头部logo -->

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
.logo {
  border-bottom: none !important;
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
}
</style>
