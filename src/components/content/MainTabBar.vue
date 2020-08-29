<template>
 <tab-bar class="tab">
    <tab-bar-item path="/home" >
      <img slot="item-ioc" src="~assets/img/tabbar/home.svg">
      <img slot="item-ioc-active"  src="~assets/img/tabbar/home-a.svg"/>
      <div slot='item-text'>首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" >
      <img slot="item-ioc" src="~assets/img/tabbar/favor.svg">
      <img slot="item-ioc-active"  src="~assets/img/tabbar/favor-b.svg"/>
      <div slot='item-text'>分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" >
      <img slot="item-ioc" src="~assets/img/tabbar/cart.svg">
      <img slot="item-ioc-active"  src="~assets/img/tabbar/cart-c.svg"/>
      <div slot='item-text'>购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-ioc" src="~assets/img/tabbar/emoji.svg">
      <img slot="item-ioc-active"  src="~assets/img/tabbar/emoji-d.svg"/>
      <div slot='item-text'>我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from '../common/tabbar/TabBar.vue'
  import TabBarItem from '../common/tabbar/TabBarItem.vue'
    export default{
        name:'MainTabBar',
        components: {
          TabBar,
          TabBarItem
        }
   }
</script>

<style scoped>
.tab{
  z-index: 9;
}
</style>
