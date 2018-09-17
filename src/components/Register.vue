<template>
    <div class="register">
        <div class="header">
        </div>

        <div class="tabs">
            <el-tabs>
              <el-tab-pane label="通行证注册">
                <div class="table">
                    <el-form>
                    <el-form-item label="">
                        <el-input v-model="msg.zhanghao" placeholder="账号"></el-input>
                    </el-form-item>
                    <el-form-item label="">
                        <el-input v-model="msg.password" placeholder="密码"></el-input>
                    </el-form-item>
                    <el-form-item label="">
                        <el-input v-model="msg.re_password" placeholder="确认密码"></el-input>
                    </el-form-item>
                    <el-form-item label="">
                        <el-input v-model="msg.realname" placeholder="真实姓名"></el-input>
                    </el-form-item>
                    <el-form-item label="">
                        <el-input v-model="msg.identity_card" placeholder="身份证号码"></el-input>
                    </el-form-item>
                    <el-form-item label="">
                        <el-input v-model="msg.verification" placeholder="验证码"></el-input>
                    </el-form-item>
                    <el-form-item label="">
                        <el-radio label=""></el-radio><a href="http://www.baidu.com" target="_blank">阅读并同意游族通行证注册协议</a>
                    </el-form-item>
                    <el-form-item label="">
                        <el-button type="warning" @click="axiosRegister">快速注册</el-button>
                    </el-form-item>              <el-form-item label="">
                        已注册，请<el-button type="text">登录</el-button></el-button>
                    </el-form-item>
                    </el-form>
                </div>
              </el-tab-pane>
              <el-tab-pane label="手机号码注册">
                <div class="table">
                    <el-form>
                    <el-form-item label="">
                        <el-input v-model="msg.phone_number" placeholder="手机号码"></el-input>
                    </el-form-item>
                    <el-form-item label="">
                        <el-input v-model="msg.verification" placeholder="验证码"></el-input>
                    </el-form-item>
                    <el-form-item label="">
                        <el-input v-model="msg.phone_verification" placeholder="手机验证码"></el-input>
                    </el-form-item>
                    <el-form-item label="">
                        <el-input v-model="msg.password" placeholder="密码"></el-input>
                    </el-form-item>
                    <el-form-item label="">
                        <el-input v-model="msg.re_password" placeholder="确认密码"></el-input>
                    </el-form-item>
                    <el-form-item label="">
                        <el-input v-model="msg.realname" placeholder="真实姓名"></el-input>
                    </el-form-item>
                    <el-form-item label="">
                        <el-input v-model="msg.identity_card" placeholder="身份证号码"></el-input>
                    </el-form-item>
                    <el-form-item label="">
                        <el-radio label=""></el-radio><a href="http://www.baidu.com" target="_blank">阅读并同意游族通行证注册协议</a>
                    </el-form-item>
                    <el-form-item label="">
                        <el-button type="warning" @click="axiosRegister">快速注册</el-button>
                    </el-form-item>              <el-form-item label="">
                        已注册，请<el-button type="text">登录</el-button>
                    </el-form-item>
                    </el-form>
                </div>                  
              </el-tab-pane>
            </el-tabs>  
        </div>

        <div class="clear">

        </div>


    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                msg: [
                    {zhanghao: ''},
                    {password: ''},
                    {re_password: ''},
                    {realname: ''},
                    {identity_card: ''},
                    {verification: ''},
                    {phone_verification: ''},
                    {phone_number:''}
                ]
                
            }
        },
        methods: {
            axiosRegister(){
                axios({
                    url: 'api/v1/register',
                    method: 'post',
                    params:{
                        zhanghao: this.msg.zhanghao,
                        password: this.msg.password,
                        realname: this.msg.realname,
                        identity_card: this.msg.identity_card,
                        phone_number: this.msg.phone_number
                    }
                })
                .then(response => {
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error)
                })
            }
        }
        
    }
</script>

<style scoped>
.register{
    width: 405px;
    margin: 200px auto;
}
.header{
    height: 50px;
    background-image: url('../assets/register_img/register_head.png');
}
.tabs{
    background: #f0f0f0;

}
.table{
    margin: 0 auto;
    width: 300px;

}
.clear{
    clear: both;

}

</style>