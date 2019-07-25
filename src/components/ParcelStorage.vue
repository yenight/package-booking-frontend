<template>
    <div>
      <h1>包裹入库</h1>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="运单号">
          <el-input v-model="form.waybillNumber"></el-input>
        </el-form-item>
        <el-form-item label="收件人">
          <el-input v-model="form.customerName"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="form.phoneNumber"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button @click="onCancel">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
export default {
  name: 'ParcelStorage',
  data () {
    return {
      form: {
        waybillNumber: 0,
        customerName: '',
        phoneNumber: ''
      }
    }
  },
  methods: {
    onSubmit () {
      this.$store.dispatch('createPackage', { package: this.form })
        .then(() => {
          this.$message({
            message: '添加数据成功',
            type: 'success'
          })
        })
        .catch(error => console.log(error))
    },
    onCancel () {
      this.form.waybillNumber = 0
      this.form.customerName = ''
      this.form.phoneNumber = ''
    }
  }
}
</script>

<style scoped>

</style>
