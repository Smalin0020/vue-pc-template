<template>
  <div class="cc-login">
    <div class="cc-login-wrapper">
      <div class="cc-login-form" @keyup.enter="doLogin">
        <el-card shadow="never"
          title="欢迎登录"
        >
          <div slot="header" class="clearfix">
            <span>欢迎登录</span>
          </div>
          <el-form ref="form" :model="form" :rules="rules">
            <el-form-item prop="name">
              <el-input v-model="form.name" placeholder="请输入用户名">
                <svg-icon style="padding-left: 5px;" slot="prefix" icon-class="user"></svg-icon>
                <!-- <i slot="prefix" class="el-input__icon el-icon-date"></i> -->
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model="form.password" type="password" placeholder="请输入密码">
                <svg-icon style="padding-left: 5px;" slot="prefix" icon-class="lock"></svg-icon>
                <!-- <i slot="prefix" class="el-input__icon el-icon-date"></i> -->
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" style="width: 100%" size="small" @click="doLogin">登录</el-button>
            </el-form-item>
            <p style="font-size: 12px;text-align: center;color: #999;">输入任意用户名密码登录</p>
          </el-form>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import { setToken } from '@/utils/auth'
export default {
  name: 'cc-login',

  data () {
    return {
      form: {
        name: '',
        password: ''
      },
      rules: {
        name: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    doLogin () {
      this.$refs.form.validate(async validate => {
        if (validate) {
          this.$message.success('登录成功')
          setToken('test')
          this.$router.push('/')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.cc-login {
  &-wrapper {
    height: 100vh;
    // background: url('../../assets/images/login-bg.jpg') no-repeat center center;
    background-size: cover;
  }
  &-form {
    width: 330px;
    position: absolute;
    right: 250px;
    top: 50%;
    transform: translateY(-60%);
  }
}
</style>
