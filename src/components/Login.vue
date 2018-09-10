<template>
    <div>
        <el-form>
            <div class="form">
            <p><strong>登录游族通行证</strong></p>
            <el-form-item>
                <el-row>
                    <el-col span="16">
                        <el-input placeholder="账号"></el-input>
                        <el-input placeholder="密码"></el-input>
                    </el-col>
                    <el-col span="8">
                        <el-button class="button" style="height:80px">
                            <span style="color:white;font-size:18px"><strong>登录</strong></span>
                        </el-button>
                    </el-col>
                </el-row>
            </el-form-item>

            <el-form-item>
                <el-col span="12">
                    <el-radio></el-radio>记住用户名
                </el-col>
                <el-col span="12">
                    <el-button type="text">忘记密码？</el-button>
                </el-col>
            </el-form-item>

            <el-form-item>
                <el-button type="success">免费注册</el-button>
            </el-form-item>

            <el-form-item>
                <span>其他方式登录</span>
            </el-form-item>

            </div>
        </el-form>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.form{
    padding: 20px;
    width: 300px;
    background-color: white;
}
.button{
    background-color: rgb(245, 101, 35);
}
</style>