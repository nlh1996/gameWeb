<template>
    <div>
        <div class="zhebi" v-if="$store.state.register.show">         
        </div>
        <div class="register" v-if="$store.state.register.show"> 
            <register></register>
        </div> 
    </div>
</template>

<script>
    import register from '@/components/Register'
    export default {
        components: {
            register
        }
    }
</script>

<style scoped>
.zhebi{
        position: fixed;
        background-color: rgb(116, 115, 115);
        left: 0px;
        top: 0px;  /**如果不设置则按照默认的位置显示*/
        width: 100%; /***100%:标识遮罩层覆盖整个浏览器窗口*/
        height: 100%;
        opacity: 0.6;  /**透明度*/
        z-index: 2;  /**Z轴坐标：值遇到标识越贴近用户*/
}
.register{
    position: fixed;
    left: 30%;
    top: 30px;
    z-index: 3;
    opacity: 1;
}
</style>