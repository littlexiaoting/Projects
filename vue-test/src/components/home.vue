<template>
  <div id="home">
    <div class="topbar">
      <img src="./menu.svg" alt="" class="menu">
      <span>今天</span>
      <img src="./notify.svg" alt="" class="notify">
      <img src="./more.svg" alt="" class="more">
    </div>
    <div class="hotStory">
      <div class="box">
        <div class="item" v-for="item in topStory">
          <img :src="item.image" alt="">
          <p>{{item.title}}</p>
        </div>
      </div>
    </div>
    <div class="allStory">
      <ul>
        <li v-for="item in allStory">
          <img :src="item.images[0]" alt="">
          <p>{{item.title}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        topStory:[],
        allStory:[]
      }
    },
    mounted(){
      axios.get('https://news-at.zhihu.com/api/4/news/latest').then((rsp) =>{
        console.log(rsp);
        this.allStory = rsp.data.stories;
        this.topStory = rsp.data.top_stories;
      }).catch((error) => {
        console.log(error);
      })
    }
  }
</script>

<style scoped type="text/less" lang="less">
  @keyframes flyLeft {
    0%, 19%, 100% {
      transform: translate(0, 0);
    }
    20%,39%{
      transform: translate(-20%,0);
    }40%,59%{
      transform: translate(-40%,0);
    }60%,79%{
      transform: translate(-60%,0);
    }80%,99%{
      transform: translate(-80%,0);
    }
  }

  .topbar {
    width: 100%;
    height: 50px;
    background: deepskyblue;
    position: relative;

    span {
      position: absolute;
      font-size: 20px;
      left: 60px;
      top: 11px;
      color: white;
    }
    img {
      position: absolute;
      width: 30px;
      height: 30px;
      top: 0;
      bottom: 0;
      margin: auto 0;
      &.menu {
        left: 10px;
      }
      &.notify {
        right: 70px;
      }
      &.more {
        right: 10px;
      }
    }

  }

  .hotStory {
    width: 100%;
    height: 200px;
    background: #ccc;
    position: relative;
    overflow: hidden;
    .box {
      width: 500%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      animation: flyLeft 20s linear infinite;
      .item {
        width: 20%;
        height: 100%;
        float: left;
        position: relative;
        img{
          width: 100%;
          height: 100%;
        }
        p {
          width: 100%;
          height: 70px;
          background-color:rgba(0,0,0,.3);
          position: absolute;
          bottom: 0;
          padding-left: 10px;
          padding-top: 20px;
          color: #fff;
          font-size: 20px;
        }
      }
    }
  }
  .allStory{
    width: 100%;
    margin-top: 10px;
    ul{
      width: 100%;
      li{
        width: 95%;
        height: 80px;
        border: 1px solid #ccc;
        margin: 10px;
        box-shadow: 0 0 10px 0 #808080;
        img{
          width: 23%;
          height: 70px;
          float: right;
          padding-top: 5px;
        }
        p{
          width: 70%;
          height: 100%;
          float: left;

        }
      }
    }
  }


</style>
