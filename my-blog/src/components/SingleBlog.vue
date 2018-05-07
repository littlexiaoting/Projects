<template>
    <div id="single-blog">
      <h3>{{blog.title}}</h3>
      <p>{{blog.content}}</p>
      <p>作者：{{blog.author}}</p>
      分类：
      <ul>
        <li v-for="item in blog.catagories" :key="item">{{item}}</li>
      </ul>
      <br>
      <button @click="delBlog">删除博客</button>
      <button>      <router-link :to="'/edit/'+id">编辑博客</router-link>
      </button>
    </div>
</template>

<script>
  import axios from 'axios'
  export default {
        name: "single-blog",
      data(){
          return{
            id:this.$route.params.id,
            blog:{}
          }
      },
      created(){
        axios.get("posts/"+this.id+".json")
            .then((data)=> {
              this.blog=data.data;
            })
      },
      methods:{
          delBlog(){
            axios.delete("posts/"+this.id+".json")
              .then(response=>{
                this.$router.push({path: "/"});
              })
          }
      }

    }
</script>

<style scoped type="text/less" lang="less">
  #single-blog {
    max-width: 960px;
    padding: 20px;
    margin: 0 auto;
    background: #eee;
    border: 1px dotted #ccc;
    h3,p{
      margin-bottom: 20px;
    }
    ul{
      li{
        float: left;
        list-style: none;
        margin-right: 20px;
      }
    }
    button{
      margin-top: 20px;
      margin-right: 20px;
      a {
        text-decoration: none;
        color: buttontext;
      }
    }
  }
</style>
