<template>
  <div class="page-header">
    <div class="logo" @click="clickHome">
      Smalin
    </div>
    <div class="user-info">
      <div>
        您好 <span class="username-style" @click="goUsernamePage">{{ username }}</span>
      </div>
      <div class="exit" @click="userLogout">
        退出
      </div>
    </div>
  </div>
</template>

<script>
import { removeToken } from '@/utils/auth'
export default {
  name: 'Exit',
  data () {
    return {
      username: 'Smalin'
    }
  },
  methods: {
    clickHome () {
      this.$router.push('/main')
    },
    userLogout () {
      removeToken()
      this.$router.push('/login')
    },
    goUsernamePage () {
      this.$router.push('/userInfo')
    }
  }
}
</script>

<style lang="scss" scoped>
  .page-header {
    display: flex;
    justify-content: space-between;
    height: 60px;
  }
  .page-header div {
    line-height: 60px;
  }
  .logo {
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
  }
  .user-info {
    display: flex;
    width: 200px;
    justify-content: space-around;
    font-size: 14px;
  }
  .username-style {
    cursor: pointer;
  }
  .exit {
    cursor: pointer;
  }
</style>
