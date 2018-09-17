<template>
  <div>
    <el-form ref="form" :model="form" label-width="120px" label-position="left">
      <el-form-item label="充值到：">
        <el-col :span="10">
          <el-radio-group>
          <el-radio-button label="U币"></el-radio-button>
          <el-radio-button label="游戏"></el-radio-button>
          <el-radio-button label="游米"></el-radio-button>
          </el-radio-group>
        </el-col>
      </el-form-item>

      <el-form-item label="充入账号：">
        <el-col :span="8">
          <el-input v-model="form.zhanghao" placeholder="账号"></el-input>
        </el-col>
      </el-form-item>

      <el-form-item label="选择游戏：">
        <el-col :span="10">
        <el-select v-model="form.region" placeholder="选择充值游戏">
          <el-option label="游戏一" value=""></el-option>
          <el-option label="游戏二" value=""></el-option>
        </el-select>
        <el-select v-model="form.region" placeholder="选择充值服务器">
          <el-option label="区一" value=""></el-option>
          <el-option label="区二" value=""></el-option>
        </el-select>
        </el-col>
      </el-form-item>

      <el-form-item label="角色名：">
        <el-col :span="8">
          <el-input v-model="form.name"></el-input>确认您要充值的角色是否正确
        </el-col>
      </el-form-item>

      <el-form-item label="手机号码：">
        <el-col :span="8">
          <el-input placeholder="输入手机号"></el-input>若遇到充值异常，方便客服第一时间与您取得联系
        </el-col>
      </el-form-item>

      <el-form-item label="选择充值金额：">
        <el-row>
        <el-col :span="20">
          <el-radio-group>
          <el-radio-button label="10元"></el-radio-button>
          <el-radio-button label="50元"></el-radio-button>
          <el-radio-button label="100元"></el-radio-button>
          <el-radio-button label="500元"></el-radio-button>
          <el-radio-button label="1000元"></el-radio-button>
          </el-radio-group>
        </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <el-input placeholder="其他金额"></el-input>单笔充值最少10元
          </el-col>
        </el-row>
        
      </el-form-item>

      <el-form-item label="将获得: "></el-form-item>

      <el-form-item label="选择银行卡：">

      </el-form-item>
      <hr>
      <el-button style="width:255px;height:50px" class="button">
        <strong style="color:white;font-size:16px">立即支付</strong>
      </el-button>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '你的名字',
          zhanghao: '',
        }
      }
    },
    mounted() {
      
    },
  }
</script>

<style scoped>
.button{
  background: #ff7800;
}

</style>