<template>
  <div class="gamelist">
    <div class="inner">
      <div class="header clearfix">
        <div class="header__title">
          <span>精品推荐</span>
        </div>
        <div class="header__btn">
          <a class="header__btn-a"
             href="">
            <i class="el-icon-refresh"></i>
            换一换
          </a>
        </div>
      </div>
      <!-- / 标题模块 -->
      <div class="content">
        <ul class="content__list">
          <li v-for="item in gameData"
              :key="item.key"
              class="content__list-item">
            <p>
              <img class="cli-img"
                   :src="item.img">
            </p>
            <p class="cli-title">
              {{ item.name }}
            </p>
            <p class="cli-info">
              {{ item.info }}
            </p>
            <p class="cli-site">
              <a class="cli-site-a"
                 :href="item.site">进入官网</a>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      images: [
        { url: "/static/img/game_img/img1.jpg" },
        { url: "/static/img/game_img/img2.jpg" },
        { url: "/static/img/game_img/img3.jpg" },
        { url: "/static/img/game_img/img4.jpg" },
        { url: "/static/img/game_img/img5.jpg" },
        { url: "/static/img/game_img/img6.jpg" },
      ],
      gameData: [
        { key: 1, name: '三十六计', info: '《三十六计》是由游族网络的战神工作室潜心打造的一款优质三国策略网页游戏...', site: 'http://36.youzu.com/', img: 'http://upload.youzu.com/youzu/2018/0404/174346628.jpg' },
        { key: 2, name: '三十六计', info: '《三十六计》是由游族网络的战神工作室潜心打造的一款优质三国策略网页游戏...', site: 'http://36.youzu.com/', img: 'http://upload.youzu.com/youzu/2018/0404/174346628.jpg' },
        { key: 3, name: '三十六计', info: '《三十六计》是由游族网络的战神工作室潜心打造的一款优质三国策略网页游戏...', site: 'http://36.youzu.com/', img: 'http://upload.youzu.com/youzu/2018/0404/174346628.jpg' },
        { key: 4, name: '三十六计', info: '《三十六计》是由游族网络的战神工作室潜心打造的一款优质三国策略网页游戏...', site: 'http://36.youzu.com/', img: 'http://upload.youzu.com/youzu/2018/0404/174346628.jpg' },
        { key: 5, name: '三十六计', info: '《三十六计》是由游族网络的战神工作室潜心打造的一款优质三国策略网页游戏...', site: 'http://36.youzu.com/', img: 'http://upload.youzu.com/youzu/2018/0404/174346628.jpg' },
        { key: 6, name: '三十六计', info: '《三十六计》是由游族网络的战神工作室潜心打造的一款优质三国策略网页游戏...', site: 'http://36.youzu.com/', img: 'http://upload.youzu.com/youzu/2018/0404/174346628.jpg' }
      ]
    }
  },
}
</script>
<style lang="less" scoped>
@import '../assets/styles/theme.less';
/* .gemeList ul,
li {
  list-style: none;
  width: 30%;
  border: 1px solid #e5e9f2;
  height: auto;
  overflow: hidden;
  background-color: #fff;
  padding: 2px;
  float: left;
  margin: 2px;
  font-size: 16px;
  color: brown;
} */

.gamelist {
  position: relative;
  top: -600px;
  // /* margin-top: -100px; */
  width: 100%;
  z-index: 2;
}
.inner {
  max-width: 820px;
  margin: 0 auto;
  padding: 20px;
  background: #fff;
}
.header {
  // width: 65%;
  border-left: 5px solid @main-col;
  line-height: 20px;
  background: #fff;
}
.header__title {
  float: left;
  margin-left: 10px;
  font-size: 18px;
}
.header__btn {
  float: right;
  margin-right: 10px;
}
.header__btn-a {
  font-size: 14px;
  color: #333;
}

.content {
  // background: #eee;
}
.content__list {
  display: flex;
  height: 600px;
  direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-around;
}
.content__list-item {
  width: 263px;
  // margin-top: 20px;
}
.cli-img {
  width: 100%;
  height: 171px;
}
.cli-title {
  margin: 10px 0;
  font-size: 18px;
  font-weight: bold;
}
.cli-info {
  font-size: 14px;
  color: @c8;
}
.cli-site {
  height: 30px;
  margin-top: 10px;
  border-top: 1px solid @cc;
  line-height: 30px;
  text-align: right;
}
.cli-site-a {
  color: @c3;
}
</style>