<template>
  <div class="foot">
    <el-row class="foot-text">
      <el-col span="6">
        <div class="footer-colume"><img :src="url"></div>
      </el-col>

      <el-col span="6">
        <div class="colume-title">在这里找到我们</div>
        <div class="colume-content">一个前端学习的项目，可以在https://github.com/nlh1996/gameWeb找到该项目。</div>
      </el-col>

      <el-col span="6">
        <div class="colume-title">联系我们</div>
        <div class="colume-content">目前有两人参与该项目，QQ群号：806997880</div>
      </el-col>

      <el-col span="6">
        <div class="colume-title">友情链接</div>
        <div class="colume-content">
          <a href="https://github.com/nlh1996/gameWeb">git地址</a>
        </div>
      </el-col>
    </el-row>

    <el-row class="foot-img">
      <ul>
        <li v-for="item in images"
            :key="item"><img :src="item.url"></li>
      </ul>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      url: '/static/img/foot/logo_footer.png',
      images: [
        { url: '/static/img/foot/picp_bg.png' },
        { url: '/static/img/foot/zhengshu_gongshang.png' },
        { url: '/static/img/foot/zhengshu_zhengxin.png' },
        { url: '/static/img/foot/weifaIcon.png' },
        { url: '/static/img/foot/jhgc.png' },
      ]
    }
  },
}
</script>

<style scoped>
.foot-text {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  width: 100%;
  min-height: 166px;
  background: #48525e;
  color: #e6e6e6;
  font-family: microsoft Yahei;
  -webkit-font-smoothing: antialiased;
}
.foot-img ul,
li {
  display: inline;
  list-style: none;
}

.colume-title {
  font-size: 18px;
  color: rgb(53, 176, 180);
  font-weight: bold;
}
.colume-content {
  text-align: left;
  margin-left: 90px;
  font-size: 14px;
  width: 70%;
}
div {
  margin-top: 10px;
}
</style>