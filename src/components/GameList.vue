<template>
    <div>
        <el-tab-pane label="精品推荐">
            <ul class='gameList'>
                <li v-for="item in images" :key="item">
                    <span class="gameImg"><img :src="item.url" width=100%></span>
                    <span class="gemeName">三十六计</span>
                </li>
             </ul>
        </el-tab-pane>
        <el-tab-pane label="敬请期待">
            <span>404-error!!!</span>
        </el-tab-pane>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                images:[
                    {url: require("../assets/gameimg/img1.jpg")},
                    {url: require("../assets/gameimg/img2.jpg")},
                    {url: require("../assets/gameimg/img3.jpg")},
                    {url: require("../assets/gameimg/img4.jpg")},
                    {url: require("../assets/gameimg/img5.jpg")},
                    {url: require("../assets/gameimg/img6.jpg")},
                ]
            }
        },
    }
</script>

<style scoped>
    .gemeList li{
       list-style: none;
       width:30%;
       border:1px solid #E5E9F2;
       height: auto;
       overflow: hidden;
       background-color:#fff;
       padding: 2px;
       float:left;
       margin: 2px;
   }
   .gameList li span{
        display: block;
   }
   .gameImg{
       width: 30%;
   }
   .gameName{
       font-size: 16px;
       padding-left: 10px;
       color:brown;
   }


</style>