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
            </ul>
        </div>


    </div>
</template>

<script>
    import CircleMenu from 'vue-circle-menu'
    export default {
        data() {
            return {
                key: value
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
    background-color:rgb(234, 240, 240);
}
.block{
    background-color:rgb(234, 240, 240);
    display: block;
    padding: 30px;
}

</style>