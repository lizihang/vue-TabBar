<template>
  <div id="tab-bar">
    <tab-bar-item2 v-for="item in items" :item="item"></tab-bar-item2>
  </div>
</template>

<script>
  import TabBarItem2 from "./TabBarItem2";

  export default {
    name: "TabBar2",
    props: {
      items: {
        type: Array
      }
    },
    components: {
      TabBarItem2
    }
  }
</script>

<style scoped>
  #tab-bar {
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.1);
  }
</style>