<template>
  <div id="main">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>
<script>
import AppHeader from "@/common/Header"
import AppFooter from "@/common/Footer"
export default {
  name: 'Index',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>
<style lang="less" scoped>
</style>
