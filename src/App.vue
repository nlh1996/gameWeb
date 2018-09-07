<template>
  <div id="app">
    <router-view></router-view>
    <div class="tips">
      <tips></tips>
    </div>
    
    <hr>
      <div class="foot">
        <foot></foot>
      </div>
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
  background-color:#d9e0e7
}
.foot{
  margin-top: 10px;
}
.tips{
  margin-top: 40px;
  float: none;
}
</style>
