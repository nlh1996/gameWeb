<template>
  <div id="app">
    <router-view></router-view>
    <hr>
    <foot></foot>
  </div>
</template>

<script>

import foot from "@/components/Foot"
export default {
  name: 'App',
  components:{
    foot,
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
}
</style>
