//论坛主体
<template>
  <div class="bbs">
    <div class="nav"><navigation-bars></navigation-bars></div>
    <div class="clear"></div>
    <div class="login"><login></login></div>
    <cover-layer></cover-layer>
    <div class="clear"></div>
    
  </div>
</template>

<script>
import login from '@/components/Login'
import postsList from '@/components/bbs/PostsList'
import publishPosts from '@/components/bbs/PublishPosts'
import navigationBars from '@/components/bbs/NavigationBars'
import coverLayer from '@/components/CoverLayer'
  export default {
    components: {
      login,
      postsList,
      publishPosts,
      navigationBars,
      coverLayer
    }
  }
</script>

<style scoped>
.bbs{
  
}
.login{
  float: right;
}
.clear{
  clear: both;
}

</style>