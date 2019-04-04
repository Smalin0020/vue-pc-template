<template>
  <div class="page-header">
    <div class="transition-group-style">
      <svg-icon
        class="menu-svg"
        icon-class="menu-fold"
        @click.native="isCollapse"
      />
        <transition-group
          tag="el-breadcrumb"
          separator-class="el-icon-arrow-right"
          name="fade-move"
        >
          <el-breadcrumb-item
            v-for="item in getBreadcrumbItems"
            :key="item.path"
          >
            {{item.name}}
          </el-breadcrumb-item>
        </transition-group>
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
/**
 * vuex
 */
import { createNamespacedHelpers } from 'vuex'
import * as types from '@/store/mutations-types'
const { mapState, mapMutations } = createNamespacedHelpers('global')
export default {
  name: 'Exit',
  data () {
    return {
      username: 'Smalin',
      getBreadcrumbItems: [
        {
          name: '首页',
          path: '/main',
          icon: 'main',
          code: 1001000
        }, {
          name: '首页1-1',
          path: '/main/1-1'
        }]
    }
  },
  computed: {
    ...mapState({
      menuCollapse: types.MENU_COLLAPSE
    })
  },
  methods: {
    ...mapMutations({
      changeMenuCollapse: types.MENU_COLLAPSE
    }),
    userLogout () {
      removeToken()
      this.$router.push('/login')
    },
    goUsernamePage () {
      // this.$router.push('/userInfo')
    },
    isCollapse () {
      this.changeMenuCollapse(!this.menuCollapse)
    }
  }
}
</script>

<style lang="scss" scoped>
  .page-header {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    height: 60px;
  }
  .page-header div {
    line-height: 60px;
  }
  .menu-svg {
    margin-right: 20px;
    font-size: 16px;
    cursor: pointer;
  }
  .transition-group-style {
    display: flex;
    align-items: center;
    width: 200px;
  }
  .logo {
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
  }
  .user-info {
    display: flex;
    width: 200px;
    justify-content: space-between;
    font-size: 14px;
  }
  .username-style {
    cursor: pointer;
  }
  .exit {
    cursor: pointer;
  }
</style>
