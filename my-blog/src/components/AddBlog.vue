<template>
  <div id="add-blog">
    <h1>添加博客</h1>
    <form v-if="!finished">
      <label>博客标题</label>
      <input type="text" value="title" v-model="blog.title"/>
      <label>博客内容</label>
      <textarea v-model="blog.content"/>
      <div id="checkboxes">
        <input type="checkbox" v-model="blog.catagories" value="Vue.js"/><label>Vue.js</label>
        <input type="checkbox" v-model="blog.catagories" value="React.js"/><label>React.js</label>
        <input type="checkbox" v-model="blog.catagories" value="Angular"/><label>Angular</label>
        <input type="checkbox" v-model="blog.catagories" value="Node.js"/><label>Node.js</label>
      </div>
      <label>作者</label>
      <select v-model="blog.author">
        <option v-for="author in authors" >{{author}}</option>
      </select>
      <button @click.prevent="post">提交</button>
    </form>
    <h3 v-if="finished">博客添加成功！</h3>
    <div id="preview">
      <h3>博客总览</h3>
      <p>博客标题{{blog.title}}</p>
      <p>博客内容{{blog.content}}</p>
      <p>博客分类</p>
      <ul>
        <li v-for="catagory in blog.catagories">
          {{catagory}}
        </li>
      </ul>
      <p>作者</p>
      <p>{{blog.author}}</p>
    </div>
  </div>

</template>

<script>
  import axios from 'axios'
  export default {
    name: 'add-blog',
    data() {
      return {
        blog: {
          title: "",
          content: "",
          catagories: [],
          author:""
        },
        authors: ["肖婷", "刘成龙"],
        finished:false
      }
    },
    methods:{
      post(){
        axios.post("posts.json",this.blog).then((data)=> {
          this.finished=true;
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped type="text/less" lang="less">
#add-blog {
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;

  h3{
    margin-top: 10px;
  }
  label{
    display: block;
    margin: 20px 0 10px;
  }

  input[type=text],textarea,select{
    display: block;
    width: 100%;
    padding: 8px;
  }

  textarea{
    height: 200px;
    margin-bottom: 20px;
  }

  button {
    display: block;
    margin: 20px 0;
    background: crimson;
    color: #ffffff;
    border:0;
    padding: 14px;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
  }
  #checkboxes{
    label{
      display: inline-block;
      margin-top: 0;
    }
    input{
      display: inline-block;
      margin-right: 10px;
    }
  }
  #preview {
    padding: 10px 20px;
    border: 1px dotted #cccccc;
    margin: 30px 0;
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
  }
}
</style>
