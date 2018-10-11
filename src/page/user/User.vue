<template>
  <div class="user">
    <div class="user__inner">

      <!-- S 登陆框模块 -->
      <div class="login">
        <div class="login__title">
          <p>登陆游族通行证</p>
        </div>
        <!-- /登陆框题 -->

        <div class="login__main">
          <p>
            <input class="login__account"
                   type="text"
                   placeholder="账号">
          </p>
          <p>
            <input class="login__pwd"
                   type="text"
                   placeholder="密码">
          </p>
          <p>
            <label for="">
              <input type="checkbox"
                     name="remember">
              记住用户名
            </label>
          </p>
          <p>
            <button class="login__register">免费注册</button>
            <button class="login__go">登陆</button>
          </p>
        </div>
        <!-- 登陆框主体 -->

      </div>
      <!-- E 登陆框模块 -->

    </div>
  </div>
</template>

<script>  
export default {
  name: 'bbs'
}
</script>

<style lang="less" scoped>
.user {
  padding-top: 60px;
  width: 100%;
  height: 600px;
  background-image: url('/static/img/banner.jpg');
  background-repeat: no-repeat;
  background-origin: content-box;
}
.user__inner {
  width: 1200px;
  margin: 0 auto;
  min-width: 1200px;
}
/* 登陆框模块
 ---------------------------------------------------------------*/
.login {
  float: right;
  width: 308px;
  height: 300px;
  margin-top: 83px;
  padding: 0 33px;
  border: 1px solid #cdd6e4;
  border-top: 2px solid #f58120;
  background-color: #fff;
  box-sizing: border-box;
}
.login__title {
  height: 77px;
  line-height: 77px;
  font-size: 18px;
}

/* 登陆框主体
 ---------------------------------------------------------------*/
.login__main {
  position: relative;
}
.login__account {
  width: 150px;
  height: 40px;
  border: 1px solid;
  border-color: #cfcfcf #ececec #ececec #cfcfcf;
  border-radius: 2px;
  margin-bottom: 5px;
  padding-left: 35px;
  background-color: #f5f5f5;
  box-sizing: border-box;
}
.login__pwd {
  width: 150px;
  height: 40px;
  border: 1px solid;
  border-color: #cfcfcf #ececec #ececec #cfcfcf;
  border-radius: 2px;
  margin-bottom: 18px;
  padding-left: 35px;
  background-color: #f5f5f5;
  box-sizing: border-box;
}
.login__register {
  width: 244px;
  height: 48px;
  margin-top: 20px;
  font: bold 18px/48px 'Microsoft Yahei';
  text-align: center;
  color: #fff;
  background: #9dd428;
  border-radius: 2px;
  cursor: pointer;
  &&:hover {
    background: #b4f32c;
  }
}
.login__go {
  position: absolute;
  top: 0;
  right: 0;
  width: 84px;
  height: 86px;
  border: 1px solid #e5710f;
  font: bold 18px/86px 'Microsoft Yahei';
  color: #fff;
  text-align: center;
  background: #f58120;
  cursor: pointer;
  &&:hover {
    background: #e27821;
  }
}
</style>
