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
          v-if="menu.children.length > 0"
          :index="`${menu.path}`"
        >
          <template slot="title">
            <svg-icon
              class="svg-icon-style"
              :icon-class="menu.icon"
            />
            <span slot="title">{{ menu.name }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              v-for="childrenMenu of menu.children"
              :key="childrenMenu.code"
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
      isCollapse: true
    }
  },
  created () {
    this.defaultActive = this.$route.path
    setTimeout(() => {
      this.menus = MENU
      let Menu = []
      const permissions = [[1001000, 1001002], [1002000, 1002001]]
      this.menus.forEach((value, index) => {
        if (permissions.length - 1 < index) {
          return
        }
        if (permissions[index][0] === value.code) {
          Menu.push({
            name: value.name,
            path: value.path,
            children: []
          })
          value.children.forEach((value1, index1) => {
            if (value1.code === permissions[index][index1]) {
              Menu[index].children.push({
                name: value1.name,
                path: value1.path
              })
            }
          })
        }
      })
      this.menus = Menu
    }, 500)
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
