// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from "axios"
import VueRouter from "vue-router"
import App from './App'
import Routes from "./routes"

axios.defaults.baseURL='https://myblog-5e807.firebaseio.com/'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes,
  mode:"history"
})


// 自定义指令
Vue.directive('color', {
  bind(el, binding, vnode) {
    el.style.color = "#" + Math.random().toString(16).slice(2, 8);
  }
})
Vue.directive('theme', {
  bind(el, binding, vnode) {
    // if (binding.value == "wide") {
    //   el.style.maxWidth = "1200px";
    // }
    // 传参改变背景色
    // if(binding.arg=="column"){
    //   el.style.background="#667766";
    // }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
  router
})
