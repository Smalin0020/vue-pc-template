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
      router
      @select="handleSelect">
      <div
        v-for="menu of menus"
        :key="menu.code">
        <el-submenu
          v-if="menu.children"
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
      menus: MENU,
      defaultActive: '',
      isCollapse: true
    }
  },
  created () {
    this.defaultActive = this.$route.path
  },
  computed: {
    ...mapGetters(['getMenuCollapse'])
  },
  methods: {
    handleSelect (key, keyPath) {
      for (let i = 0; i < this.menus.length; i++) {
        if (this.menus[i].id === key) {
          this.$router.push(this.menus[i].path)
        }
      }
    }
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
