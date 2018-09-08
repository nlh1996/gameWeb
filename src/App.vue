<template>
  <div id="app">
    <router-view class="main"></router-view>
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>
<style lang="less">
@import 'assets/styles/index.less';

#app {
  height: 100%;
}
.main {
  background: #f1f4f9;
}
</style>
