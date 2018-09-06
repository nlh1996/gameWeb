<template>
    <div class="foot">
        <el-row>
            <el-col span="6">
                <img :src="url">
            </el-col>

            <el-col span="18">
                <ul class="tips">
                    <li>关于游族</li>|
                    <li>游族无线</li>|
                    <li>联系我们</li>|
                    <li>客服中心</li>|
                    <li>商务合作</li>|
                    <li>用户许可证</li>
                </ul>

            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                url: require('../assets/foot/logo_footer.png')
            }
        },
    }
</script>

<style scoped>
.tips ul,li{
    padding: 10px;
    list-style: none;
    display: inline;
    font-size: 14px;
}

</style>