<template>
  <div class="head">
    <el-row>

      <!-- S 头部logo模块 -->
      <el-col span="6">

        <h1 class="logo">
          <img class=“logo__img”
               :src="url">
        </h1>

      </el-col>
      <!-- E 头部logo模块  -->

      <!-- S 头部导航模块 -->
      <el-col span="18">
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
        <!-- /头部导航模块 -->

      </el-col>
      <!-- E 头部导航模块 -->

    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      url: '/static/img/head/logo.png',
      navData: [
        { key: 0, name: '首页', router: 'view', state: true },
        { key: 1, name: '个人中心', router: 'view', state: false },
        { key: 2, name: '论坛', router: 'error', state: false },
        { key: 3, name: '充值', router: 'error', state: false },
      ],
      slideObject: {
        left: '0'
      }
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
    }
  }
}
</script>

<style lang="less" scoped>
/* CSS reset */
.clearfix:after {
  display: block;
  content: '';
  height: 0;
  visibility: hidden;
  clear: both;
}
ul,
h1 {
  padding: 0;
  margin: 0;
}
@bg: #f68121;
/* 主体布局 */
.head {
  max-width: 1200px;
  margin: 0 auto;
}
/* 头部logo导航模块
-------------------------------------------- */
.logo {
  padding-top: 8px;
  width: 124px;
  height: 54px;
}
.logo__img {
  display: block;
}

/* 头部导航模块
-------------------------------------------- */
.nav {
  position: relative;
  list-style: none;
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
      color: @bg;
    }
  }
}
.nav__item-link {
  font-family: 'Microsoft YaHei', sans-serif;
  font-size: 18px;
  text-decoration: none;
  color: #333;
  cursor: pointer;
}
.nav__item_current {
  color: @bg;
}
/* 滑块 */
.slide {
  position: absolute;
  transition: all 0.3s;
  bottom: 0;
  // left: 0;
  height: 2px;
  width: 100px;
  background: @bg;
}
</style>