<template>
  <div id="app">
    <router-view></router-view>
    <!--<tab-bar>
      <tab-bar-item path="/home" active-color="blue">
        <img slot="item-icon" src="./assets/img/tabbar/shouye.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/shouyexuanzhong.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" active-color="red">
        <img slot="item-icon" src="./assets/img/tabbar/leimu.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/电梯类目.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" active-color="green">
        <img slot="item-icon" src="./assets/img/tabbar/gouwuche.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/gouwuchexuanzhong.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="./assets/img/tabbar/wode.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/wodexuanzhong.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>-->
    <tab-bar2 :items="items"></tab-bar2>
    <hello-world></hello-world>
    <h2>counter = {{$store.state.counter}}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">addStu</button>
    <h2>getters:{{$store.getters.powerCounter}}</h2>
    <h2>students:{{$store.getters.getStudents(20)}}</h2>
    <h2>----------响应式----------</h2>
    <h2>info:{{$store.state.info}}</h2>
    <button @click="changeInfo">修改信息</button>
    <button @click="updateInfo">更新信息异步</button>
    <h2>----------modules----------</h2>
    <h2>{{$store.state.moduleA.name}}</h2>
    <button @click="updateName">更新名字</button>
  </div>
</template>

<script>
  import TabBar from "./components/tabbar/TabBar";
  import TabBarItem from "./components/tabbar/TabBarItem";
  import TabBar2 from "./components/tabbar/TabBar2";
  import HelloWorld from "./views/HelloWorld";
  import * as types from "./store/mutations-types";
  import axios from 'axios'

  export default {
    name: 'App',
    data() {
      return {
        items: [
          {
            itemIcon: 'shouye.svg',
            itemIconActive: 'shouyexuanzhong.svg',
            itemText: '首页',
            path: '/home',
            activeColor: "blue"
          },
          {
            itemIcon: 'leimu.svg',
            itemIconActive: 'leimuxuanzhong.svg',
            itemText: '分类',
            path: '/category',
            activeColor: "red"
          },
          {
            itemIcon: 'gouwuche.svg',
            itemIconActive: 'gouwuchexuanzhong.svg',
            itemText: '购物车',
            path: '/cart',
            activeColor: "green"
          },
          {
            itemIcon: 'wode.svg',
            itemIconActive: 'wodexuanzhong.svg',
            itemText: '我的',
            path: '/profile'
          }
        ]
      }
    },
    components: {
      TabBar,
      TabBarItem,
      TabBar2,
      HelloWorld
    },
    methods: {
      add() {
        this.$store.commit(types.INCREMENT)
      },
      sub() {
        this.$store.commit(types.DECREMENT)
      },
      addCount(counte) {
        this.$store.commit(types.INCREMENTCOUNT, counte)
      },
      addStudent() {
        const stu = {id: 104, name: 'eee', age: 88}
        this.$store.commit(types.SAVESTUDENT, stu)
      },
      changeInfo() {
        this.$store.commit(types.CHANGEINFO)
      },
      updateInfo() {
        this.$store.dispatch('updateInfo').then(res => {
          console.log(res);
        })
      },
      updateName() {
        this.$store.commit(types.UPDATENAME)
      }
    }
  }

  axios({
    url: 'http://123.207.32.32:8000/home/multidata'
  }).then(res => {
    console.log(res);
  })
</script>

<style>
  @import "./assets/css/base.css";
</style>