<template>
  <div id="app">
    <router-view></router-view>
    <tips></tips>
    <hr>
    <foot></foot>
  </div>
</template>

<script>
import tips from "@/components/Tips"
import foot from "@/components/Foot"
export default {
  name: 'App',
  components:{
    foot,
    tips
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
