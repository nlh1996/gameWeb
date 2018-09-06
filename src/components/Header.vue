<template>
    <div class="head">
        <el-row>
            <el-col span="6">
                <img :src="url">
            </el-col>

            <el-col span="18">
                <ul class="daohang">
                    <li>首页</li>
                    <li>个人中心</li>
                    <li>论坛</li>
                    <li>充值</li>
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

</style>