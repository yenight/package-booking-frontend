<template>
    <div>
      <el-button @click="clickAll">ALL</el-button>
      <el-button @click="clickBooked">已预约</el-button>
      <el-button @click="clickPackaged">已取件</el-button>
      <el-button @click="clickNotBooked">未预约</el-button>
      <el-button @click="addPackage">+添加</el-button>
    </div>
</template>

<script>
export default {
  name: 'StationButtonGroup',
  methods: {
    clickAll () {
      this.$store.dispatch('getPackageList')
    },
    clickBooked () {
      this.$store.dispatch('getPackageListByStatus', { status: 1 })
    },
    clickPackaged () {
      this.$store.dispatch('getPackageListByStatus', { status: 2 })
    },
    clickNotBooked () {
      this.$store.dispatch('getPackageListByStatus', { status: 0 })
    },
    addPackage () {
      this.$store.commit('changeActiveMenuItem', { activeMenuItem: 'parcel-storage' })
      this.$router.push('/parcel-storage')
    }
  }
}
</script>

<style scoped>

</style>
