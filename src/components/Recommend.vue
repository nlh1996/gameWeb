<template>
  <div class="recommend">
    <title-bar>
      <span slot="left">精品推荐</span>
      <div slot="right">
        <a href="javascript:;"
           class="updata">
          <i class="el-icon-refresh"></i>
          换一换
        </a>
      </div>
    </title-bar>

    <div class="content">
      <ul class="content__list"
          :style="{'height':height}">
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
</template>
<script>
import titleBar from '@/common/Bar'
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
        { key: 2, name: '射雕英雄传', info: '新《射雕英雄传》是由游族网络大侠工作室倾力打造的一款正版情义武侠ARP...', site: 'http://36.youzu.com/', img: 'http://upload.youzu.com/youzu/2018/0821/172007661.jpg' },
        { key: 3, name: '大皇帝', info: '为策略游戏用户量身定制的SLG，别具一格的游戏特色：水墨画风复古战场，...', site: 'http://36.youzu.com/', img: 'http://upload.youzu.com/youzu/2018/0411/134842161.jpg' },
        { key: 4, name: '女神联盟2', info: '全3D人物建模栩栩如生，唯美场景、宏大剧情引人入胜，经典回合制独创新意...', site: 'http://36.youzu.com/', img: 'http://upload.youzu.com/youzu/2018/0411/134747665.jpg' },
        { key: 5, name: '盗墓笔记', info: '《游族网络《盗墓笔记》是由南派三叔正版授权、国民影帝黄渤倾情代言的一款A...', site: 'http://36.youzu.com/', img: 'http://upload.youzu.com/youzu/2018/0404/142557342.jpg' },
        { key: 6, name: '刀剑乱舞-ONLINE', info: '由DMM Games制作、Nitroplus主世界观和角色、游族网络在...', site: 'http://36.youzu.com/', img: 'http://upload.youzu.com/youzu/2018/0404/144814666.jpg' }
      ]
    }
  },
  props: ['height'],
  components: {
    titleBar: titleBar
  }
}
</script>
<style lang="less" scoped>
@import '../assets/styles/theme.less';
.updata {
  font-size: 14px;
  color: #333;
  &:hover {
    color: @main-col;
  }
}

.content {
  // background: #eee;
}
.content__list {
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-around;
}
.content__list-item {
  width: 263px;
}
.cli-img {
  width: 100%;
  height: 171px;
}
.cli-title {
  margin: 10px 0;
  font-size: 18px;
  font-weight: bold;
  &:hover {
    color: @main-col;
  }
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
  &:hover {
    color: @main-col;
  }
}
</style>
