<template>
    <div class="nav">
        <nav>
            <ul class="nav-list">
                <li class="nav-item" v-for="(category, index) in categories" :key="index">
                    <router-link :to="category.router">
                        <div>{{ category.title }}</div>
                    </router-link>
                </li>
            </ul>
        </nav>
        <button id="create-topic" class="btn btn-default" data-ember-action="1000"><i class="fa fa-plus"></i>新主题</button>
        <button class="to-top-btn" title="回到顶部" @click="goTop">
            
        </button>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                categories: [
                    { router: '/bbs/new', title: '最新' },
                    { router: '/bbs/hot', title: '热门' },
                    { router: '/bbs/myposts', title: '我的贴子' },
                ],
            }
        },
        methods: {
            goTop () {
                document.documentElement.scrollTop = 0
            },
        }
    }
</script>

<style scoped>
.nav{
  width: 100%;
  height: 48px;
}
.nav-list{

}
.nav-list{

}
</style>