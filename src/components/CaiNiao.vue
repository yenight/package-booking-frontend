<template>
    <div>
      <h1>菜鸟驿站</h1>
      <el-button @click="clickAll">ALL</el-button>
      <el-button @click="clickBooked">已预约</el-button>
      <el-button @click="clickPackaged">已取件</el-button>
      <el-button @click="clickNotBooked">未预约</el-button>
      <el-button @click="addPackage">+添加</el-button>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          label="运单号"
          width="150">
          <template slot-scope="scope">
            <p>{{ scope.row.waybillNumber }}</p>
          </template>
        </el-table-column>
        <el-table-column
          label="收件人"
          width="150">
          <template slot-scope="scope">
            <p>{{ scope.row.customerName }}</p>
          </template>
        </el-table-column>
        <el-table-column
          label="电话"
          width="200">
          <template slot-scope="scope">
            <p>{{ scope.row.phoneNumber }}</p>
          </template>
        </el-table-column>
        <el-table-column
          label="状态"
          width="150">
          <template slot-scope="scope">
            <p>{{ statusList[scope.row.status] }}</p>
          </template>
        </el-table-column>
        <el-table-column
          label="预约时间"
          width="200">
          <template slot-scope="scope">
            <p>{{ scope.row.bookTime }}</p>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="confirmPackage(scope.$index, scope.row)">确认收货</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
export default {
  name: 'CaiNiao',
  data: function () {
    return {
      statusList: [
        '未预约',
        '已预约',
        '已取件',
        '未取件'
      ]
    }
  },
  mounted () {
    this.$store.dispatch('getPackageList')
  },
  computed: {
    tableData: function () {
      return this.$store.state.packageList
    }
  },
  methods: {
    confirmPackage (index, row) {
      this.$store.dispatch('updatePackageByStatusIsTwo', { package: { waybillNumber: row.waybillNumber } })
    },
    clickAll () {
      this.$store.dispatch('getPackageList')
    },
    clickBooked () {
      this.$store.dispatch('getPackageListByStatus', {status: 1})
    },
    clickPackaged () {
      this.$store.dispatch('getPackageListByStatus', {status: 2})
    },
    clickNotBooked () {
      this.$store.dispatch('getPackageListByStatus', {status: 0})
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
