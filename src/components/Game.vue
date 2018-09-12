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

/* 头部模块
 ------------------------------------------------------ */
.game__header {
  width: 100%;
  border-left: 5px solid @main-col;
  line-height: 20px;
}
.game__header-title {
  float: left;
  margin-left: 10px;
  font-size: 18px;
}
.game__header-action {
  float: right;
  margin-right: 10px;
}
/* 内容模块
 ------------------------------------------------------ */
.game__content {
}
</style>


