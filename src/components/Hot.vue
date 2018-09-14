<template>
  <div class="hot">
    <title-bar>
      <span slot="left">热门游戏</span>
      <div slot="right">
        <a href="javascript:;"
           class="updata">
          更多>
        </a>
      </div>
    </title-bar>
    <div class="content">
      <ul class="content__list">
        <li class="content__list-item"
            v-for="item in gameData"
            :key="item.key">
          <img class="cli-img"
               :src="item.pic">
          <p class="cli-name">{{ item.name }}</p>
          <p class="cli-type">{{ item.type }}</p>
          <p>
            <a class="cli-site"
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
      gameData: [
        { key: 0, name: '女神联盟2手游', type: '卡牌RPG', site: 'http://ns2.youzu.com/index.html', pic: 'http://upload.youzu.com/youzu/2018/0622/144820270.png' },
        { key: 1, name: '女神联盟2手游', type: '卡牌RPG', site: 'http://ns2.youzu.com/index.html', pic: 'http://upload.youzu.com/youzu/2018/0622/144820270.png' },
        { key: 2, name: '女神联盟2手游', type: '卡牌RPG', site: 'http://ns2.youzu.com/index.html', pic: 'http://upload.youzu.com/youzu/2018/0622/144820270.png' },
        { key: 3, name: '女神联盟2手游', type: '卡牌RPG', site: 'http://ns2.youzu.com/index.html', pic: 'http://upload.youzu.com/youzu/2018/0622/144820270.png' },
        { key: 4, name: '女神联盟2手游', type: '卡牌RPG', site: 'http://ns2.youzu.com/index.html', pic: 'http://upload.youzu.com/youzu/2018/0622/144820270.png' }
      ]
    }
  },
  components: {
    titleBar: titleBar
  }

}
</script>
<style lang="less" scoped>
@import '../assets/styles/theme.less';
.updata {
  display: block;
  margin-right: 5px;
  font-size: 14px;
  color: #333;
}
.content {
  border-top: 1px solid #ccd8e4;
  margin-top: 15px;
}
.content__list {
  display: flex;
  width: 100%;
  height: 639px;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
}
.content__list-item {
  position: relative;
  width: 143px;
  height: 91px;
  padding: 16px 10px 20px 130px;
  border-bottom: 1px solid #ebebeb;
  &:last-child {
    border: none;
  }
}
.cli-img {
  position: absolute;
  top: 16px;
  left: 13px;
  width: 89px;
  height: 96px;
}
.cli-name {
  height: 24px;
  font-size: 16px;
  padding-top: 8px;
  &:hover {
    color: @main-col;
  }
}
.cli-type {
  height: 24px;
  line-height: 24px;
  padding: 3px 0 3px 0;
  font-size: 13px;
  color: #a4b6cd;
}
.cli-site {
  display: block;
  height: 24px;
  line-height: 24px;
  color: @c3;
  &:hover {
    color: @main-col;
  }
}
</style>

