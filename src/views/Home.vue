<template>
  <el-container class="home">
    <el-container class="home-content">
      <el-aside hide-trigger class="home-sider">
        <HomeMenu></HomeMenu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import HomeMenu from '../components/HomeMenu'
export default {
  name: 'home',
  components: {
    HomeMenu
  },
  data: function () {
    return {
    }
  },
  methods: {
  }
}
</script>
