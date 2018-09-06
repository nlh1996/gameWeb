<template>
    <div class="head">
        <el-row>
            <el-col span="6">
                <img :src="url">
            </el-col>

            <el-col span="18">
                <ul class="daohang">
                    <li><router-link to="/">首页</router-link></li>
                    <li><router-link to="/error">个人中心</router-link></li>
                    <li><router-link to="/error">论坛</router-link></li>
                    <li><router-link to="/error">充值</router-link></li>
                </ul>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                url: require('../assets/head/logo.png')
            }
        },
    }
</script>

<style scoped>
.daoahng ul,li{
    padding: 10px;
    list-style: none;
    display: inline;
    font-size: 18px;
}
/* 指针移动到链接上 */
a:hover {         
  color: white;  
  height: 30px;  
  background: #f00;
}
/* 被点击 */
a:active{  
    color: #000;  
}
/* 已被访问 */
a:visited {
     color: #a369af;
}

</style>