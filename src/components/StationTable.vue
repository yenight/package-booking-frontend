<template>
    <div>
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
              v-if="scope.row.status !== 2"
              @click="confirmPackage(scope.$index, scope.row)">确认收货</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
export default {
  name: 'StationTable',
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
  computed: {
    tableData: function () {
      return this.$store.state.packageList
    }
  },
  methods: {
    confirmPackage (index, row) {
      this.$store.dispatch('updatePackageByStatusIsTwo', { package: { waybillNumber: row.waybillNumber } })
    }
  }
}
</script>

<style scoped>

</style>
