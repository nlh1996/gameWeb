<template>
    <div class="home">
        <el-row>
            <div>
                <el-col :span="24">
                    <carousel></carousel>
                </el-col>
            </div>
     
        </el-row>

        <el-row>
            <el-col :span="18">
                <div>
                    <gamelist></gamelist>
                </div>
            </el-col>

            <el-col :span="6">
                <div class="login">
                    <login></login>
                </div>
            </el-col>
         </el-row>

         <el-row>
             <div class="extend">
                 <el-col :span="6"><div class="extend-content">海外平台</div></el-col>  
                 <el-col :span="6"><div class="extend-content">客户服务</div></el-col>
                 <el-col :span="6"><div class="extend-content">游戏美女</div></el-col>
                 <el-col :span="6">
                    <div class="extend-content"><router-link to="/guardian">未成年人监护</router-link></div>
                 </el-col>
             </div>
         </el-row>
         <div v-if="show">
             <register></register>
         </div>
    </div>
</template>

<script>  
    import gamelist from '@/components/home/GameList'
    import register from '@/components/Register'
    import carousel from '@/components/home/Carousel'
    import login from '@/components/Login'
    export default {
        name: 'home',
        data() {
            return {
                show: false
            }
        },
        components:{
            gamelist,
            carousel,
            login,
            register
        }    
    }
</script>

<style scoped>

.extend{
    margin-top: 30px;

}
.extend-content{
    background: #fff;
    padding: 15px 10px;
    margin: 0 20px;
    border-radius: 10px;
    height: 40px;
    text-align: center;
}
.login{
    margin-top: 30px;
    margin-left: 10px;
}



</style>