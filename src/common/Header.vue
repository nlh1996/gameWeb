<template>
  <div class="header">
    <div class="inner">
      <el-row>
        <el-col>
          <el-menu :default-active="activeIndex"
                   class="el-menu-nav"
                   mode="horizontal"
                   @select="handleSelect"
                   text-color="#333"
                   active-text-color="#f68121"
                   router>
            <el-menu-item class="logo"
                          index="/home">
              <img :src="logo"
                   alt="yoozoo"
                   class="logo__img">
            </el-menu-item>
            <el-menu-item index="/home">首页</el-menu-item>
            <el-menu-item index="/user">个人中心</el-menu-item>
            <el-menu-item index="/pay">充值</el-menu-item>
            <el-menu-item index="/bbs">论坛</el-menu-item>
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
      logo: '/static/img/head/logo_mobile.png'
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
  background-color: @head-bgc;
  z-index: 999;
}
.inner {
  width: 1200px;
  margin: 0 auto;
}
.el-menu-item {
  font-size: 18px;
}
.el-menu-nav {
  // border: none;
}
.logo {
  border-bottom: none !important;
}
.logo__img {
  width: 120px;
  height: 39px;
}
</style>
