<template>
    <div>
      <h1>预约取件</h1>
      <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="运单号">
        <el-input v-model="form.waybillNumber"></el-input>
      </el-form-item>
      <el-form-item label="取件时间">
        <el-date-picker
          v-model="form.bookTime"
          type="datetime"
          placeholder="选择日期时间"
          value-format="yyyy-MM-dd HH:mm:ss">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即预约</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
    </div>
</template>

<script>
export default {
  name: 'Reservation',
  data () {
    return {
      form: {
        waybillNumber: 0,
        bookTime: ''
      }
    }
  },
  methods: {
    onSubmit () {
      this.$store.dispatch('updatePackageTime', { package: this.form })
        .then(() => {
          this.$message({
            message: '预约取件成功',
            type: 'success'
          })
          this.goToPackageStation()
        })
        .catch(error => {
          this.$message.error('营业时间为：9：00-20：00')
        })
    },
    onCancel () {
      this.form.waybillNumber = 0
      this.form.bookTime = ''
      this.goToPackageStation()
    },
    goToPackageStation () {
      this.$store.commit('changeActiveMenuItem', { activeMenuItem: 'package-station' })
      this.$router.push('/package-station')
    }
  }
}
</script>

<style scoped>

</style>
