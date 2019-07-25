<template>
  <el-container class="home">
    <el-container class="home-content">
      <el-aside hide-trigger class="home-sider">
        <el-menu default-active="1" style="height: 100%" :router="true">
          <el-menu-item-group title="Menu">
            <el-menu-item index="cai-niao" >
              <i class="el-icon-menu"></i>
              <span slot="title">菜鸟驿站</span>
            </el-menu-item>
            <el-menu-item index="parcel-storage">
              <i class="el-icon-setting"></i>
              <span slot="title">包裹入库</span>
            </el-menu-item>
            <el-menu-item index="reservation">
              <i class="el-icon-setting"></i>
              <span slot="title">预约取件</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

export default {
  name: 'home',
  components: {

  },
  data: function () {
    return {
      modalValue: false,
      userName: this.$route.params.userName,
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    }
  },
  methods: {

  }
}
</script>
