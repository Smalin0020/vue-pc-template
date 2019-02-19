<template>
  <div class="left-bar">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @select="handleSelect">
      <el-menu-item
        :index="menu.id"
        v-for="menu of menus"
        :key="menu.id">
        <span slot="title">{{ menu.name }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'LeftBar',
  data () {
    return {
      menus: [
        {
          name: 'Home',
          id: '1',
          path: '/main'
        }, {
          name: 'About',
          id: '2',
          path: '/about'
        }
      ]
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      for (let i = 0; i < this.menus.length; i++) {
        if (this.menus[i].id === key) {
          this.$router.push(this.menus[i].path)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .left-bar {
    height: 100%;
    .el-menu {
      height: 100%;
    }
  }
</style>
