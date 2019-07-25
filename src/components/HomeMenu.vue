<template>
    <div>
      <el-menu :default-active="activeMenu" style="height: 100%" :router="true" @select="selectMenuItem">
        <el-menu-item-group title="Menu">
          <el-menu-item index="package-station" >
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
    </div>
</template>

<script>
export default {
  name: 'HomeMenu',
  computed: {
    activeMenu: function () {
      return this.$store.state.activeMenuItem
    }
  },
  methods: {
    selectMenuItem (index, indexPath) {
      this.$store.commit('changeActiveMenuItem', { activeMenuItem: index })
    }
  }
}
</script>

<style scoped>

</style>
