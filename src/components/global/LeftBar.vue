<template>
  <div class="left-bar">
    <div class="logo">
      <svg-icon
        v-if="getMenuCollapse"
        class="svg-icon-style"
        icon-class="set"
      />
      <span v-else>
        Vue
      </span>
    </div>
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      background-color="#001529"
      text-color="#fff"
      active-text-color="#116BBE"
      :collapse="getMenuCollapse"
      router>
      <div
        v-for="menu of menus"
        :key="menu.code">
        <el-submenu
          v-if="Array.isArray(menu.children)"
          :index="`${menu.path}`"
        >
          <template slot="title">
            <svg-icon
              class="svg-icon-style"
              :icon-class="menu.icon"
            />
            <span slot="title">{{ menu.name }}</span>
          </template>
          <el-menu-item-group
              v-for="childrenMenu of menu.children"
              :key="childrenMenu.code">
            <el-menu-item
              :index="`${childrenMenu.path}`"
            >
              <svg-icon
                class="svg-icon-style"
                :icon-class="childrenMenu.icon"
              />
              <span slot="title">{{ childrenMenu.name }}</span>
            </el-menu-item>
          </el-menu-item-group>
          </el-submenu>
          <el-menu-item
            v-else
            :index="`${menu.path}`"
          >
            <svg-icon
              class="svg-icon-style"
              :icon-class="menu.icon"
            />
            <span slot="title">{{ menu.name }}</span>
        </el-menu-item>
      </div>
    </el-menu>
</div>
</template>

<script>
import MENU from '@/config/menuConfig'
/**
 * vuex
 */
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('global')
export default {
  name: 'LeftBar',
  data () {
    return {
      menus: [],
      defaultActive: '',
      arr: [],
      isCollapse: true
    }
  },
  created () {
    this.defaultActive = this.$route.path
    this.menus = MENU
    let res = [[1001000, 1001001], [1002000, 1002001], 1003000]
    // 数组扁平化
    this.permissions = [].concat(...res)
    // 根据权限递归调用
    this.inPermissionsGetMenus(this.menus)
  },
  methods: {
    inPermissionsGetMenus (array) {
      array.forEach((value, index) => {
        if (Array.isArray(value.children)) {
          this.inPermissionsGetMenus(value.children)
        }
        if (!this.permissions.includes(value.code)) {
          array.splice(index, 1)
        }
      })
    }
  },
  computed: {
    ...mapGetters(['getMenuCollapse'])
  },
  mounted () {
    console.log(MENU)
  }
}
</script>

<style lang="scss" scoped>
  .left-bar {
    min-height: 100vh;

  background: #001529;
  }
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    background-color: #022445;
    color: white;
  }
  .el-menu {
    border-right: 0;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    text-align: left;
    width: 280px;
    min-height: 400px;
  }
  .el-menu-item.is-active {
    background-color: #116BBE !important;
    color: #fff !important;
  }
  .svg-icon-style {
    margin-right: 0px;
  }
</style>
