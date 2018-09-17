<template>
  <div class="pay">
    <p>{{ date | formatDate }}</p>
  </div>
</template>

<script>  
export default {
  name: 'bbs',
  data () {
    return {
      date: new Date(),
      timer: null
    }
  },
  filters: {
    formatDate (value) {
      function padDate (num) {
        return num < 10 ? '0' + num : num
      }
      var date = new Date(value)
      var year = date.getFullYear()
      var mon = padDate(date.getMonth() + 1)
      var day = padDate(date.getDate())
      var h = padDate(date.getHours())
      var m = padDate(date.getMinutes())
      var s = padDate(date.getSeconds())
      return year + '年' + mon + '月' + day + '日' + h + ':' + m + ':' + s
    }
  },
  methods: {
    padDate (value) {
      return value < 10 ? '0' + value : value
    },
    showme () {
      console.log('showme')
    }
  },
  created () { },
  mounted () {
    var _this = this
    this.timer = setInterval(() => {
      _this.date = new Date()
    }, 1000)
  }
}
</script>
<style lang="less" scoped>
.pay {
  padding-top: 60px;
}
p {
  height: 600px;
  line-height: 600px;
  text-align: center;
  color: skyblue;
  font-size: 80px;
}
</style>