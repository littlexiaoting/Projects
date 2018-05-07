<template>
  <div id="add" class="container">
    <h1 class="page-header">添加用户</h1>
    <form v-on:submit="addCustomer">
      <div class="well">
        <h4>用户信息</h4>
        <div class="form-group">
          <label>姓名</label>
          <input type="text" placeholder="姓名" class="form-control" v-model="customer.name">
        </div>
        <div class="form-group">
          <label>电话</label>
          <input type="tel" placeholder="电话" class="form-control" v-model="customer.phone">
        </div>
        <div class="form-group">
          <label>邮箱</label>
          <input type="email" placeholder="邮箱" class="form-control" v-model="customer.email">
        </div>
        <div class="form-group">
          <label>学历</label>
          <input type="text" placeholder="学历" class="form-control" v-model="customer.education">
        </div>
        <div class="form-group">
          <label>毕业学校</label>
          <input type="text" placeholder="毕业学校" class="form-control" v-model="customer.graduatedSchool">
        </div>
        <div class="form-group">
          <label>职业</label>
          <input type="text" placeholder="职业" class="form-control" v-model="customer.profession">
        </div>
        <div class="form-group">
          <label>个人简介</label>
          <textarea placeholder="个人简介" class="form-control" v-model="customer.profile"></textarea>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: "Add",
    data() {
      return {
        customer: [{
          name: "",
          email: '',
          phone: '',
          education:'',
          graduatedSchool:'',
          profession:'',
          profile:''
        }]
      }
    },
    methods: {
      addCustomer() {

      }
    }
  }
</script>

<style scoped type="text/less" lang="less">
#add{
  textarea{
    height: 100px;
  }
}
</style>
