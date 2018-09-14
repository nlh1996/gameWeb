<template>
  <div class="block">
 
    <el-carousel height="300px">
      <el-carousel-item v-for="item in images" :key="item.url">
        <h3><img :src="item.url" width=100%></h3>
      </el-carousel-item>
    </el-carousel>
    
  </div>
</template>

<script>
    export default {
        data() {
            return {
                images:[
                    {url: "https://upload.youzu.com/youzu/2018/0822/121741384.png"},
                    {url: "https://upload.youzu.com/youzu/2018/0803/163557031.jpg"},
                    {url: "https://upload.youzu.com/youzu/2018/0808/102022153.jpg"}
                ]
            }
        },
        
    }
</script>

<style scoped>
    .el-carousel__item h3 {
    line-height: 150px;
    margin: 0;
    }


</style>