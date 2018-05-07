<template>
  <div id="app">
    <blog-header></blog-header>
    <router-view></router-view>
  </div>
</template>

<script>
import BlogHeader from './components/navBar'
import AddBlog from './components/AddBlog'
import ShowBlog from './components/ShowBlogs'
import SingleBlog from './components/SingleBlog'
import EditBlog from './components/EditBlog'

export default {
  name: 'App',
  components: {
    BlogHeader,AddBlog,ShowBlog,SingleBlog,EditBlog
  }
}
</script>

<style type="text/less" lang="less">
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
#app {

}
</style>
