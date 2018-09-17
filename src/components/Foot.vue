<template>
    <div class="foot">
        <el-row class="foot-text">
            <el-col :span="6">
                <div class="footer-colume"><img :src="url"></div>
            </el-col>

            <el-col :span="6">
                <div class="colume-title">在这里找到我们</div>
                <div class="colume-content">一个前端学习的项目，可以在https://github.com/nlh1996/gameWeb找到该项目。</div>
            </el-col>

            <el-col :span="6">
                <div class="colume-title">联系我们</div>
                <div class="colume-content">目前有两人参与该项目，QQ群号：806997880</div>
            </el-col>

            <el-col :span="6">
                <div class="colume-title">友情链接</div>
                <div class="colume-content"><a href="https://github.com/nlh1996/gameWeb" target="_blank">git地址</a></div>
            </el-col>
        </el-row>

        <el-row class="foot-img">
            <el-col>
                <a target="_blank" rel="nofollow" href="http://www.zx110.org/picp/?sn=310104100043687">备案号：310104100043687</a>
                <a target="_blank" rel="nofollow" href="http://www.zx110.org/picp/?sn=310104100043687">备案号：310104100043687</a>
                <a rel="nofollow" href="http://www.miibeian.gov.cn/" target="_blank">沪ICP备09058784号</a>
                <a href="//pic.youzu.com/youzu/images/layout/net.jpg" target="_blank">沪网文[2015]0819-219</a>
                <a href="http://pic.youzu.com/youzu/images/layout/publish.jpg" rel="nofollow" target="_blank">新出网证(沪)字33号</a>
                <p class="ft_copyright">xx有限公司 ©版权所有</p>
            </el-col>
            <el-col>
                <ul>
                    <li v-for="item in images" :key="item.url"><router-link to="/guardian"><img :src="item.url"></router-link></li>
                </ul>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                url: require('../assets/foot/logo_footer.png'),
                images:[
                    {url: require('../assets/foot/picp_bg.png')},
                    {url: require('../assets/foot/zhengshu_gongshang.png')},
                    {url: require('../assets/foot/zhengshu_zhengxin.png')},
                    {url: require('../assets/foot/weifaIcon.png')},
                    {url: require('../assets/foot/jhgc.png')},
                ]
            }
        },
    }
</script>

<style scoped>
.foot{
    margin-block-end: 80px;
}
.foot-text{
    
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    width: 100%;
    min-height: 166px;
    background: #48525e;
    color: #e6e6e6;
    font-family: microsoft Yahei;
    -webkit-font-smoothing: antialiased;
}
.foot-img ul,li{
    display: inline;
    list-style: none;
}

.colume-title{
    font-size: 18px;
    color: rgb(53, 176, 180);
    font-weight: bold;
}
.colume-content{
    text-align: left;
    font-size: 14px;
    margin: 10px auto;
    width: 50%;
    line-height: 25px;
}
div{
    margin-top: 10px;
}

</style>