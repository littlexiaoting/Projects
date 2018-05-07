<template>
  <!--传参改变背景色-->
  <!--<div v-theme:theme="'wide'" id="show-blog">-->
  <div v-theme="'wide'" id="show-blog">
    <span>由于使用google数据库，仅在使<br>用VPN情况下才能正常显示数据</span>
    <h1>博客总览</h1>
    <input type="text" placeholder="搜索" v-model="search">
    <div v-for="blog in filteredBlogs" class="single-blog" v-bind:key="blog.title">
      <router-link :to="'/blog/'+blog.id"><h3 v-color>{{blog.title }}</h3></router-link>
      <article>{{blog.content}}</article>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "show-blog",
    data() {
      return {
        blogs: [],
        search: "",
      }
    },
    created() {
      axios.get("posts.json")
        .then((data) => {
          let blog = data.data;
          let blogsArray = [];
          for (let key in blog) {
            blog[key].id = key;
            blogsArray.push(blog[key]);
          }
          this.blogs = blogsArray;
        })
    },
    computed: {
      filteredBlogs() {
        return this.blogs.filter((blog) => {
          return blog.title.match(this.search);
        })
      }
    }
    // filters: {
    //   upper(value) {
    //     return value.toUpperCase();
    //   }
    // },
    // updated() {
    //     console.log(this.blogs);
    //     console.log(this.search);
    // }

  }
</script>

<style scoped type="text/less" lang="less">
  #show-blog {
    max-width: 800px;
    margin: 0 auto;
    span{
      position: fixed;
      top: 20px;
      left: 10px;
      color: #ccc;
    }
    input {
      padding: 8px;
      width: 100%;
      margin-top: 20px;
    }
    .single-blog {
      padding: 20px;
      margin: 20px 0;
      background: #eee;
      border: 1px dotted #ccc;
      h3 {
        margin-bottom: 20px;
      }
      a {
        text-decoration: none;
      }
    }
  }
</style>
