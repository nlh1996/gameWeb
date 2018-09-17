<template>
    <div class="view">
        <div class="login">
            <login></login>
        </div>
            <cover-layer></cover-layer>
        <div>

        </div>
    </div>
</template>

<script>
import login from '@/components/Login'
import coverLayer from '@/components/CoverLayer'
    export default {
        data() {
            return {
            }
        },
        components: {
            login,
            coverLayer
        }
    }
</script>

<style scoped>
.view{
    width: 100%;
    height: 800px;
    background-image: url("../../assets/personal_img/bg.jpg");
    background-repeat: round;
}
.login{
    margin: 20px;
    float: right;
}
</style>