<template>
  <div>
    <p>我是首页</p>
    <p>下方是 vuex </p>
    <p>{{ count }}</p>
    <el-button @click="addNumber">+</el-button>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import * as types from '@/store/mutations-types'
const { mapState, mapMutations } = createNamespacedHelpers('user')
export default {
  name: 'Home',
  computed: {
    ...mapState([
      'count'
    ])
  },
  methods: {
    ...mapMutations({
      add: types.TEST
    }),
    addNumber () {
      this.add()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
