<template>
    <div>
        <el-form v-if="$store.state.login.show">
            <div class="form">
            <p><strong>登录游族通行证</strong></p>
            <el-form-item>
                <el-row>
                    <el-col :span="16">
                        <el-input placeholder="账号" v-model="username"></el-input>
                        <el-input placeholder="密码" v-model="password"></el-input>
                    </el-col>
                    <el-col :span="8">
                        <el-button class="button" style="height:80px" @click="login">
                            <span style="color:white;font-size:18px"><strong>登录</strong></span>
                        </el-button>
                    </el-col>
                </el-row>
            </el-form-item>

            <el-form-item>
                <el-col :span="12">
                    <el-radio></el-radio>记住用户名
                </el-col>
                <el-col :span="12">
                    <el-button type="text">忘记密码？</el-button>
                </el-col>
            </el-form-item>

            <el-form-item>
                <el-button type="success" @click="$store.commit('SWITCH_REGISTER')">免费注册</el-button>
            </el-form-item>

            <el-form-item>
                <span>其他方式登录</span>
            </el-form-item>

            </div>
        </el-form>

        <el-form :model="form" v-else>
            <div class="form">
                <p><strong>欢迎回来</strong></p>
                <el-form-item>
                    <el-col :span="12"><img :src="form.headImg" style="width:80px"></el-col>
                    <el-col :span="12"><h3>{{form.userName}}</h3></el-col>
                </el-form-item>
                <el-form-item label="贴子数：">{{form.postsNum}}</el-form-item>
                <el-form-item label="我的回复：">{{form.myReply}}</el-form-item>
                <el-form-item label="收到回复：">{{form.receivedReply}}</el-form-item>
                <el-form-item label="我的收藏">{{form.myCollect}}</el-form-item>
            </div>
        </el-form>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                username: '',
                password: '',
            }
        },
        //因为组件渲染快于axios请求所以用计算属性保存数据，当axios请求到数据后计算属性会驱动组件重新渲染组件
        computed: {
            form: function() {
                return this.$store.state.login.userdata || ''
            }
        },


        //路由切换导致组件销毁重新挂载
        //beforeMount: function(){

            // if(window.localStorage.username)
            // {
            //     this.form.userName = window.localStorage.username            
            // }            
        //},

        // //渲染之前获取localStorage中保存的用户名（用户名为后端发送的数据）
        // beforeUpdate: function() {
        //     if(window.localStorage.username)
        //     {
        //         this.form.userName = window.localStorage.username             
        //     }
        // },

        methods: {
            login(){
                //分发用户登录的事件给vuex
                this.$store.dispatch('login',this.username,this.password)
            },

        },

  }
    
</script>

<style scoped>
.form{
    padding: 20px;
    margin: 10px;
    width: 230px;
    background-color: white;
}
.button{
    background-color: rgb(245, 101, 35);
}
</style>