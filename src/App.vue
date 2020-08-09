<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home" active-color="blue">
        <img slot="item-icon" src="./assets/img/tabbar/3.1首页.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/3.1首页-选中.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" active-color="red">
        <img slot="item-icon" src="./assets/img/tabbar/3.1类目.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/电梯类目.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" active-color="green">
        <img slot="item-icon" src="./assets/img/tabbar/3.1购物车.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/3.1购物车-选中.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item  path="/profile">
        <img slot="item-icon" src="./assets/img/tabbar/3.1我的.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/3.1我的-选中.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "./components/tabbar/TabBar";
  import TabBarItem from "./components/tabbar/TabBarItem";

  export default {
    name: 'App',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
  @import "./assets/css/base.css";
</style>