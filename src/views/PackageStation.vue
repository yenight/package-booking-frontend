<template>
    <div>
      <h1>菜鸟驿站</h1>
      <StationButtonGroup></StationButtonGroup>
      <StationTable></StationTable>
    </div>
</template>

<script>
import StationButtonGroup from '../components/StationButtonGroup'
import StationTable from '../components/StationTable'
export default {
  name: 'PackageStation',
  components: { StationTable, StationButtonGroup },
  data: function () {
    return {
    }
  },
  mounted () {
    this.$store.dispatch('getPackageList')
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
