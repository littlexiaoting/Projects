<template>
    <div id="customers" class="container">
      <h1 class="page-header">用户管理系统</h1>
      <table class="table table-striped">
        <thead>
        <tr>
          <th>姓名</th>
          <th>电话</th>
          <th>邮箱</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="user in customers">
          <td>{{user.name}}</td>
          <td>{{user.phone}}</td>
          <td>{{user.email}}</td>
          <td><button class="btn"></button></td>
        </tr></tbody>
      </table>
    </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "customers",
      data(){
          return{
            customers:[]
          }
      },
      created(){
        axios.get('/users').then((data)=>{
          this.customers=data.data;
        })
      }
    }
</script>

<style scoped>

</style>
