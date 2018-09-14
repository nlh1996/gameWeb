<template>
    <div class="view">
        <div class="login">
            <login></login>
        </div>
    </div>
</template>

<script>
import login from '@/components/Login'
    export default {
        data() {
            return {
            }
        },
        components: {
            login
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