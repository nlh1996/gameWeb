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
                        <el-button class="button" style="height:80px" @click="axiosLogin">
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
                <el-button type="success" @click="$store.commit('switch_register')">免费注册</el-button>
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
                form: {
                    headImg: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2564997198,4187947589&fm=58',
                    userName: '',
                    postsNum: '',
                    myReply: '',
                    receivedReply: '',
                    myCollect: ''
                } 
            }
        },
        methods: {
            axiosLogin(){
                this.$http.post(
                    '/v1/login',    
                    {
                        username: this.username,
                        password: this.password
                    }
                )
                .then(response => {
                    this.form.userName = this.username
                    this.$store.state.login.show = false

                })
            },
        }
    }
</script>

<style scoped>
.form{
    padding: 20px;
    margin: 20px;
    width: 260px;
    background-color: white;
}
.button{
    background-color: rgb(245, 101, 35);
}
</style>