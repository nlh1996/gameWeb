<template>
    <div>
        {{msg}}
        <router-link to="/">返回首页</router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: '404-error!!!'
            }
        },
    }
</script>

<style scoped>

</style>