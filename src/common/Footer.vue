<template>
  <div class="footer">
    <div class="inner">

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

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      url: require('../assets/img/foot/logo_footer.png')
    }
  },
}
</script>

<style scoped>
div {
  margin-top: 10px;
}
.footer {
  width: 100%;
  margin: 0;
  background: #48525e;
}
.inner {
  width: 1200px;
  margin: 0 auto;
  background: #48525e;
}
.foot-text {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  width: 100%;
  min-height: 166px;
  color: #e6e6e6;
  font-family: microsoft Yahei;
  -webkit-font-smoothing: antialiased;
}
.footer-colume {
  text-align: right;
  padding-right: 30px;
}
.foot-img {
  text-align: center;
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
  /* margin-left: 90px; */
  font-size: 14px;
  width: 70%;
}
</style>