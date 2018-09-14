<template>
  <div class="bar"
       :style="{'height':height}">
    <div class="bar__left">
      <slot name="left"></slot>
    </div>
    <div class="bar__right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  props: ['height']
}
</script>
<style lang="less" scoped>
@import '../assets/styles/theme.less';
.bar {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding: 0 0 13px 18px;
  height: 20px;
  line-height: 20px;
  font-size: 18px;
}
.bar:before {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  content: '';
  width: 5px;
  height: 20px;
  background: @main-col;
}
.bar__left {
  float: left;
}
.bar__right {
  float: right;
}
</style>

