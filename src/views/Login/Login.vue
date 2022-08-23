<template>
  <div class="login-box">
    <h1>后台管理系统</h1>
    <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    status-icon
    :rules="rules"
    label-width="70px"
    class="demo-ruleForm"
  >
    <el-form-item label="账号" prop="username">
      <el-input v-model="ruleForm.username" autocomplete="off" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="ruleForm.password" type="password" autocomplete="off"/>
    </el-form-item>
    <el-form-item>
      <el-button class="loginBtn" type="primary" @click="submitForm(ruleFormRef)">提交</el-button>
      <el-button class="loginBtn" @click="resetForm(ruleFormRef)">重置</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>

<script lang="ts">
import { loginData, LoginForm } from '../../type/login'
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'Login',
  setup () {  
    // 因为这个 rules 是不变的，所以把它单独提出去
    const rules = {
        username: [
          { required: true, message: '请输入您的密码', trigger: 'blur' },
          { min: 3, max: 10, message: '账号的长度在 3-10 之间', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入您的密码', trigger: 'blur' },
          { min: 3, max: 10, message: '密码的长度在 3-10 之间', trigger: 'blur' },
        ]
      }
    const data = reactive(new loginData())

    return {
      ...toRefs(data),
      rules
    }
  }
})
</script>

<style scoped lang="less">
  .login-box {
    height: 100%;
    width: 100%;
    background-image: url('../../assets/images/FDMjBueXIA8eWdh.jpg');
    background-repeat: no-repeat;
    .demo-ruleForm {
      margin: 200px auto;
      width: 500px;
      padding: 30px;
      border-radius: 20px;
      background-color: #fff;
      opacity: 0.9;
    }
    .loginBtn {
      margin-right: 70px;
      margin-left: 70px;
    }
  }
  h1 {
    text-align: center;
  }
</style>