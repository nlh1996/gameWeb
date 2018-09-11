<template>
  <!-- S 游戏列表模块 -->
  <div class="game">
    <div class="game__header">
      <div class="game__header-title">
        <slot name="title"></slot>
      </div>
      <div class="game__header-action">
        <slot name="action"></slot>
      </div>
    </div>
    <!-- /游戏列表头部模块 -->

    <div class="game__content">
      <slot name="content"></slot>
    </div>
  </div>
  <!-- E 游戏列表模块 -->
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
@import '../assets/styles/theme.less';
.game {
  width: 100%;
  background: blue;
}
.game__header {
  width: 100%;
  border-left: 5px solid @main-col;
  line-height: 20px;
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


