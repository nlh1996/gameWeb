<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>
<script>
import appHeader from "@/components/Header"
import appFooter from "@/components/Foot"
export default {
  name: 'App',
  components: {
    appHeader,
    appFooter
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 95%;
  margin: 0 auto;
  background-color: #d9e0e7;
}
</style>
