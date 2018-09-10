<template>
  <el-row>
    <el-col :xs="24"
            :sm="24"
            :md="24"
            :lg="24">
      <el-menu :default-active="$route.path"
               class="el-menu-header"
               mode="horizontal"
               @select="handleSelect"
               text-color="#333"
               active-text-color="#f68121"
               router>
        <el-menu-item class="logo">
          <img :src="mobileImg"
               alt="logo"
               class="logo__img">
        </el-menu-item>
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
      navList: [
        { key: 0, name: '首页', path: 'home' },
        { key: 1, name: '个人中心', path: 'user' },
        { key: 2, name: '论坛', path: 'bbs' },
        { key: 3, name: '充值', path: 'pay' },
      ],
      pcImg: '/static/img/head/logo.png',
      mobileImg: '/static/img/head/logo_mobile.png'
    };
  },
  mounted () {
    console.log($route.keyPath);
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style lang="less" scoped>
.logo__img {
  width: 120px;
  height: 39px;
  // width: 40%;
  // height: 40%;
}
@media screen and (max-width: 480px) {
  .logo {
    padding-left: 5px;
    padding-right: 10px;
  }
  .logo__img {
    width: 85px;
    height: 30px;
    // width: 25%;
  }
}
</style>
