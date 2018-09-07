<template>
    <div class="view">
        <el-row class="header">         
            <headlist></headlist>
        </el-row>

        <el-row>
            <div>
                <el-col span="24">
                    <carousel></carousel>
                </el-col>
            </div>
     
        </el-row>

        <el-row>
            <el-col span="18">
                <div>
                    <gamelist></gamelist>
                </div>
            </el-col>

            <el-col span="6">
                <div class="login">
                    
                </div>
            </el-col>
         </el-row>
    </div>
</template>

<script>  
    import gamelist from '@/components/GameList'
    import headlist from '@/components/Header'
    import carousel from '@/components/Carousel'

    export default {
        name: 'main',
        components:{
            gamelist,
            headlist,
            carousel
        }    
    }
</script>

<style scoped>
.header {
  border-top: 1px solid #d2d5da;
  background: #fff url('../assets/head/platform_header_bg.jpg') repeat-x;
}

</style>