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
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
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
      console.log(this.form.bookTime)
    },
    onCancel () {
      this.form.waybillNumber = 0
      this.form.bookTime = ''
    }
  }
}
</script>

<style scoped>

</style>
