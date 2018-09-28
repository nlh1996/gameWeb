<template>
    <div class="register">
        <div class="header">
            <div class="btn_back">
                <el-button type="text" :circle="true" @click="$store.commit('switch_register')"></el-button>
            </div>
        </div>

        <div class="tabs">
            <el-tabs>
              <el-tab-pane label="通行证注册">
                <div class="table">
                    <el-form :rules="rules" :model="msg" ref="msg" class="demo-ruleForm">
                    <el-form-item label="" prop="zhanghao">
                      <el-tooltip class="item" effect="light" content="5-20位字母和数字，必须字母开头" placement="right">
                        <el-input v-model="msg.zhanghao" placeholder="账号" maxlength="20" autofocus="true"></el-input>
                      </el-tooltip>  
                    </el-form-item>
                    <el-form-item label="" prop="password">
                      <el-tooltip class="item" effect="light" content="6-20个字符，不含空格键" placement="right">
                        <el-input v-model="msg.password" placeholder="密码" type="password" maxlength="20"></el-input>
                      </el-tooltip>
                    </el-form-item>
                    <el-form-item label="" prop="re_password">
                        <el-input v-model="msg.re_password" placeholder="确认密码" type="password" maxlength="20"></el-input>
                    </el-form-item>
                    <el-form-item label="" prop="realname">
                      <el-tooltip class="item" effect="light" content="请输入您的姓名，2至4个汉字，例如：张三" placement="right">
                        <el-input v-model="msg.realname" placeholder="真实姓名"></el-input>
                      </el-tooltip>
                    </el-form-item>
                    <el-form-item label="" prop="identity_card">
                      <el-tooltip class="item" effect="light" content="请准确填写身份证号码" placement="right">
                        <el-input v-model="msg.identity_card" placeholder="身份证号码"></el-input>
                      </el-tooltip>
                    </el-form-item>
                    <el-form-item label="" prop="">
                        <el-input v-model="msg.verification" placeholder="验证码"></el-input>
                    </el-form-item>
                    <el-form-item label="">
                        <el-radio label=""></el-radio><a href="http://www.baidu.com" target="_blank">阅读并同意游族通行证注册协议</a>
                    </el-form-item>
                    <el-form-item label="">
                        <el-button type="warning" @click="axiosRegister('msg')" >快速注册</el-button>
                    </el-form-item>              
                    <el-form-item label="">
                        已注册，请<el-button type="text" @click="$store.commit('switch_register')">登录</el-button>
                    </el-form-item>
                    </el-form>
                </div>
              </el-tab-pane>

              <el-tab-pane label="手机号码注册" >
                <div class="table">
                    <el-form :rules="rules">
                    <el-form-item label="" prop="phone">
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
                        <el-button type="warning" @click="axiosRegister" :loading="openLoading">快速注册</el-button>
                    </el-form-item>              
                    <el-form-item label="">
                        已注册，请<el-button type="text" @click="$store.commit('switch_register')">登录</el-button>
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
import store from '../store/index.js'
    export default {
        data() {
            // 此处自定义校验手机号码js逻辑
            var validatePhone = (rule, value, callback) => {
                let reg = /^[1][3,4,5,7,8][0-9]{9}$/
                value = this.msg.phone_number.replace(/\s+/g,'')
                if (!value) {
                    return callback(new Error('手机号码不能为空!!'))
                }
                setTimeout(() => {
                    if (!reg.test(value)) {
                        callback(new Error('格式有误'))
                    } else {
                        callback()
                    }
                }, 1000)
            }

            // 此处自定义校验账号js逻辑
            var validateZhanghao = (rule,value,callback) => {
                let reg = /^[a-zA-Z][0-9a-zA-Z]{4,19}$/
                value = this.msg.zhanghao.replace(/\s+/g,'')
                if(!value) {
                    return callback(new Error('账号不能为空!!'))
                }
                setTimeout(() => {
                    if(!reg.test(value)){
                        callback(new Error("请输入正确格式账号"))
                    }else{
                        callback()
                    }
                },1000)

            }


            // 此处自定义校验密码js逻辑
            var validatePassWord = (rule,value,callback) => {
                let reg1 = /\s/
                let reg2 = /^(?:\d+|[a-zA-Z]+|[!@#$%^&*]+){6,20}$/
                value = this.msg.password.replace(/\s+/g,'')
                if(!value) {
                    return callback(new Error('密码不能为空!!'))
                }
                setTimeout(() => {
                    if(reg1.test(value)){
                        callback(new Error("请不要输入空格"))
                    }
                    if(!reg2.test(value)){
                        callback(new Error("请输入正确格式密码"))
                    }else{
                        callback()
                    }
                },1000)
            }

            // 此处自定义校验重复密码js逻辑
            var validateRePassWord = (rule,value,callback) => {
                value = this.msg.re_password
                if(!value) {
                    return callback(new Error('确认密码不能为空!!'))
                }
                setTimeout(() => {
                    if(value != this.msg.password){
                        callback(new Error("两次输入密码不一致"))
                    }else{
                        callback()
                    }
                },1000)
            }
            

             // 此处自定义校验真实姓名js逻辑
            var validateRealname = (rule,value,callback) => {
                let reg = /^[\u4e00-\u9fa5]{2,4}$/
                value = this.msg.realname.replace(/\s+/g,'')
                if(!value) {
                    return callback(new Error('姓名不能为空!!'))
                }
                setTimeout(() => {
                    if(!value===this.msg.password) {
                        callback(new Error("姓名格式错误"))
                    }else{
                        callback()
                    }
                },1000)
            }

             // 此处自定义校验身份证js逻辑
            var validateIdentityCard = (rule,value,callback) => {
                let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
                value = this.msg.identity_card.replace(/\s+/g,'')
                if(!value) {
                    return callback(new Error('身份证号不能为空!!'))
                }
                setTimeout(() => {
                    if(!reg.test(value)){
                        callback(new Error("身份证格式错误"))
                    }else{
                        callback()
                    }
                },1000)
            }

            return {
                msg: {
                    zhanghao: '',
                    password: '',
                    re_password: '',
                    realname: '',
                    identity_card: '',
                    verification: '',
                    phone_verification: '',
                    phone_number:'',
                },
                openLoading: false,
                rules: {
                    zhanghao: [
                        { validator: validateZhanghao, trigger: 'blur'}
                    ],
                    password: [
                        { validator: validatePassWord, trigger: 'blur'}
                    ],
                    re_password: [
                        { required: true, message: '两次输入密码不一致', trigger: 'change' },
                        { validator: validateRePassWord, trigger: 'blur'}
                    ],
                    realname: [
                        { validator: validateRealname, trigger: 'blur'}
                    ],
                    identity_card:[
                        { validator: validateIdentityCard, trigger: 'blur'}
                    ],
                    phone: [{ required: true, validator: validatePhone, trigger: 'blur' }],    
                }
                
            }
        },
        methods: {
            axiosRegister(formName){
                this.$refs[formName].validate(valid => {
                    if (valid) {
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
                            //如果返回code为200，代表注册成功
                            if(response.status == 200){
                                console.log(response.data)
                                store.state.register.show = false
                            }else{
                                console.log(response.status)
                                this.openLoading=false
                            }
                        })
                        .catch((error) => {
                            console.log(error)
                            this.openLoading=false
                        })
                    } else {
                        console.log('error submit!!')
                        return false
                    }
                })
                
            }
        }
        
    }
</script>

<style scoped>
.register{
    width: 405px;
    margin: 150px auto;
}
.header{
    height: 50px;
    background-image: url('../assets/register_img/register_head.png');
}
.btn_back{
    float: right;
    margin-right: 16px;
    margin-top: 12px;
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