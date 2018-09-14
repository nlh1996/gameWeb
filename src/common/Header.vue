<template>
  <div class="head">
    <div class="inner">
      <!-- S 头部logo模块 -->
      <h1 class="logo">
        <router-link class="logo__link"
                     to="/home">
          <img class=“logo__img”
               :src="url">
        </router-link>
      </h1>
      <!-- E 头部logo模块  -->

      <!-- S 头部导航模块 -->
      <ul class="nav clearfix"
          @mouseout="setMouseOut">
        <li class="nav__item"
            v-for="item in navData"
            :key="item.key"
            @mouseover="setMouseOver(item)"
            @click="setClick(item)">
          <router-link class="nav__item-link"
                       :class="{'nav__item_current':item.state}"
                       :to="{name:item.router}">{{ item.name }}</router-link>
        </li>
        <li class="slide"
            :style="slideObject"></li>
        <!-- /滑动条 -->
      </ul>
      <!-- E 头部导航模块 -->

      <div class="game">
        <a class="game__link"
           href="javascript:;"
           @click="setLink">
          <i class="game__link-icon"
             :class="{'game__link_on':onLink,'game__link_off':offLink}"></i>
        </a>
        <div class="game__list"
             v-show="offLink">
          <slot name="game"></slot>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      url: '/static/img/head/logo.png',
      navData: [
        { key: 0, name: '首页', router: 'home', state: true },
        { key: 1, name: '充值', router: 'pay', state: false },
        { key: 2, name: '论坛', router: 'bbs', state: false },
        { key: 3, name: '个人中心', router: 'user', state: false },
        { key: 4, name: '资讯', router: 'bbs', state: false },
      ],
      slideObject: {
        left: '0'
      },
      onLink: true,
      offLink: false
    }
  },
  methods: {
    /**
     * @param item    object[必选]  当前按钮的对象数据
     */
    setMouseOver (item) {
      this.slideObject['left'] = item.key * 100 + 'px'
    },
    setMouseOut () {
      //使用filter筛选出当前处于活动状态的按钮，获得该对象
      const current = this.navData.filter(o => o.state === true)
      this.slideObject['left'] = current[0].key * 100 + 'px'
    },
    setClick (item) {
      this.navData.forEach(o => { o.state = false })
      const current = this.navData.filter(o => o.key === item.key)
      current[0].state = true
    },
    setLink () {
      console.log(this.onLink, this.offLink)
      if (this.onLink) {
        this.onLink = false
        this.offLink = true
      } else {
        this.onLink = true
        this.offLink = false
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/styles/theme.less';
/* 主体布局 */
.head {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-image: url('/static/img/head/platform_header_bg.jpg');
  z-index: 999;
}
.inner {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 1200px;
  margin: 0 auto;
}
/* 头部logo导航模块
---------------------------------------------------------- */
.logo {
  width: 124px;
  height: 62px;
  line-height: 62px;
}
.logo__link {
  display: block;
  width: 124px;
}
.logo__img {
  display: block;
}
/* 头部导航模块
---------------------------------------------------------- */
.nav {
  list-style: none;
  position: relative;
}
.nav__item {
  float: left;
  width: 100px;
  height: 58px;
  padding-top: 4px;
  line-height: 58px;
  text-align: center;
  &:hover {
    .nav__item-link {
      color: @main-col;
    }
  }
}
.nav__item-link {
  display: block;
  width: 100%;
  height: 100%;
  font-family: 'Microsoft YaHei', sans-serif;
  font-size: 18px;
  text-decoration: none;
  color: #333;
  cursor: pointer;
}
.nav__item_current {
  color: @main-col;
}
/* 滑块 */
.slide {
  position: absolute;
  transition: all 0.3s;
  bottom: 0;
  // left: 0;
  height: 2px;
  width: 100px;
  background: @main-col;
}

.game {
  position: relative;
  width: 72px;
}
.game__link {
  position: absolute;
  top: 0;
  right: 0;
  display: block;
  width: 72px;
  height: 72px;
  line-height: 85px;
  text-align: center;
  background: @game-col;
}
.game__link-icon {
  display: inline-block;
  width: 24px;
  height: 24px;
  background-image: url('/static/img/sprite.png');
}
.game__link_on {
  background-position: 0px -453px;
  width: 24px;
}
.game__link_off {
  width: 24px;
  background-position: -41px -453px;
}
.game__list {
  position: absolute;
  top: 62px;
  right: 0;
  width: 1200px;
  height: 486px;
  background: #fff;
  z-index: 999;
}
</style>