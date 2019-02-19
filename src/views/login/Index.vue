<template>
  <div @click="userLogin">
    登录界面
  </div>
</template>

<script>
import { setToken } from '@/utils/auth'
export default {
  name: 'Index',
  methods: {
    userLogin () {
      setToken('test')
      this.$router.push('/main')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
