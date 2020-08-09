<template>
  <div class="tab-bar-item" @click="itemClick">
    <!--<img v-if="isActive" :src="getImgUrl(item.itemIconActive)" alt="">-->
    <!--<img v-else :src="getImgUrl(item.itemIcon)" alt="">-->
    <img v-if="isActive" :src="getItemIconActive" alt="">
    <img v-else :src="getItemIcon" alt="">
    <div :style="activeStye">{{item.itemText}}</div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem2",
    props: {
      item: Object
    },
    computed: {
      isActive() {
        return this.$route.path.includes(this.item.path)
        // return this.$route.path.indexOf(this.path) != -1
      },
      trueActiveColor() {
        return this.item.activeColor !== undefined ? this.item.activeColor : 'red'
      },
      activeStye() {
        return this.isActive ? {color: this.trueActiveColor} : {}
      },
      getItemIconActive() {
        // return require(this.item.itemIconActive)
        return require('@/assets/img/tabbar/' + this.item.itemIconActive)
      },
      getItemIcon() {
        return require('@/assets/img/tabbar/' + this.item.itemIcon)
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.item.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 12px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }
</style>