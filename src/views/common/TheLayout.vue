<template>
  <div class="the-layout">
    <!-- 首页 -->
    <el-container>
      <el-header>
        <the-header />
      </el-header>
      <el-container>
        <el-aside>
          <left-bar />
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
      <el-footer>
        <the-footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import TheHeader from '@/components/global/TheHeader'
import LeftBar from '@/components/global/LeftBar'
import TheFooter from '@/components/global/TheFooter'
export default {
  name: 'TheLayout',
  components: {
    TheHeader,
    LeftBar,
    TheFooter
  }
}
</script>

<style lang="scss" scoped>
  $width: 100%;
  $height: 100%;
  .the-layout {
    width: $width;
    height: $height;
  }
  .el-header {
    position: fixed;
    height: 60px;
    width: 100vw;
    box-shadow: 0 0 1px rgba(0,0,0,0.25);
    background-color: rgba(255, 255, 255, 0.8);
  }
  .el-aside {
    position: fixed;
    height: calc(100vh - 90px);
    overflow: hidden;
    float: left;
    margin-top: 61px;
  }
  .el-main {
    width: calc(100% - 300px);
    float: right;
    margin-top: 60px;
    margin-left: 300px;
  }
  .el-footer {
    padding: 0;
  }
</style>
