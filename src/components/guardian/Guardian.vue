// 监护人组件
<template>
    <diV class="view">
        <div class="headimg">

        </div>
        <div class="aa">
        <div class="left">
            <div class="text">
                <p> 卷首语：“网络游戏未成年人家长监护工程”是一项由游族网络等众多网络游戏企业共同发起并参与实施，
                    由中华人民共和国文化部指导，旨在加强家长对未成年人参与网络游戏的监护，引导未成年人健康、绿
                    色参与网络游戏，和谐家庭关系的社会性公益行动。</p>
                <p>“家长监护工程”是游族在这一公益行动中，针对目前未成年人缺乏自控及自律能力，容易陷入沉迷；
                    少数监护人缺少时间照顾孩子，不能及时监督孩子游戏时间的现状，而推出的一种可由
                    家长实施监控，纠正部分未成年子女沉迷游戏的保护机制。</p>
            </div>
        
            <div class="bg1">

            </div>

            <div class="bg2">

            </div>

        </div>

        <div class="right">
            <div class="right-title"><p>服务方式</p></div>
            <div class="right-content">
                <p>客服邮箱：ts@youzu.com</p>
                <p>专线电话：021-54623159</p>
                <p>客服电话：400 668 9919</p>
                <p>客服传真：021-33676520</p>
            </div>
        </div>

        <div class="vedio">
            <video src="/static/bb.mp4" autoplay width="400px" controls></video>
        </div>
        </div>
        <br class="clear" />
    </div>
</template>

<script>
    import headlist from "@/components/Header"
    export default {
        data() {
            return {
                headimgs: [
                    {url: require("../../assets/parent_img/Tag1.gif")},
                    {url: require("../../assets/parent_img/Tag2.gif")},
                    {url: require("../../assets/parent_img/Tag3.gif")},
                ],
                headline_url: require("../../assets/parent_img/headline.jpg"),
                bg1_url: require("../../assets/parent_img/bg1.jpg"),
                bg2_url: require("../../assets/parent_img/bg2.jpg"),
            }
        },
        components: {
            headlist
        }
    }
</script>

<style scoped>
.view{
    width: 1000px;
    margin: 0 auto;
}


.headimg{
    background-image: url("../../assets/parent_img/headline.jpg");
    background-repeat: round;
    width: 100%;
    height: 350px;
    margin: 0px;
    padding: 0px;
}



.headimg-margin{
    margin-left: 50px;
}

.left{
    float: left;
    margin-block-end: 10%;
}

.text{
    text-align: left;
    text-indent: 2em;
    font-size: 14px;
    padding: 10px;
    margin-top: 10px;
    width: 600px;
    height: 200px;
    background-color: rgb(218, 250, 227);
    border-radius: 25px;
}

.bg1{
    padding: 10px;
    margin-top: 10px;
    background-image: url("../../assets/parent_img/bg1.jpg");
    background-repeat: round;
    width: 600px;
    height: 180px;
    border-radius: 25px;
}

.bg2{
    padding: 10px;
    margin-top: 10px;
    background-image: url("../../assets/parent_img/bg2.jpg");
    background-repeat: round;
    width: 600px;
    height: 150px;
    border-radius: 25px;
}

.right{
    float: right;
    margin-top: 20px;
    margin-right: 10px;
    margin-block-end: 10%;
}

.right-title{

    background-color: rgb(84, 169, 243);
    width: 300px;
    height: 30px;
}
.right-content{
    padding-top: 10px;
    background-color: aliceblue;
    width: 300px;
    height: 400px;
    text-align: left;
    text-indent: 4em;
}
.clear{
    clear: both;
}

.vedio{
    position: fixed;
    right: 0px;
    top: 70px;  /**如果不设置则按照默认的位置显示*/
    z-index: 3;
}


</style>