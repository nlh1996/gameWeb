<template>
    <div>
        <div class="leftMenu">
            <ul>
            <li>
                <div class="block"><span>选择充值方式</span></div>
            </li>
            <li>
                <div class="block">网上银行</div>
            </li>
            <li>
                <div class="block">支付宝</div>
            </li>
            <li>
                <div class="block">微信支付</div>
            </li>
            <li>
                <div class="block">手机固话充值</div>
            </li>
            <li>
                <div class="block">游戏点卡充值</div>
            </li>
            <li>
                <div class="block">客服电话</div>
            </li>
            <li>
                <div class="block">未成年人监护工程</div>
            </li>
            <li>
                <div class="block">实名制信息补填</div>
            </li>
            </ul>
        </div>


    </div>
</template>

<script>
    import CircleMenu from 'vue-circle-menu'
    export default {
        data() {
            return {
            }
        },
        components: {
            CircleMenu
        }
    }
</script>

<style scoped>
.leftMenu ul,li{
    list-style: none;
    text-align: left;
    display: block;
    width: 250px;
    background: #f8f8f8;
}
.block{
    background: #f8f8f8;
    display: block;
    padding: 30px;
}

</style>