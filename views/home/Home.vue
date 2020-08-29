<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabclick="tabclick" ref='tabcontrol1' v-show="istabfixed"></tab-control>
    <scroll class="content" ref='scroll' :probe-type="3" @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadmore">
      <home-swiper :banners="banners" @swiperimageload='swiperimageload'></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control  :titles="['流行','新款','精选']" @tabclick="tabclick" ref='tabcontrol2'></tab-control>
      <goods :goods="goods[currenttype].list"></goods>
    </scroll>
    <back-top @click.native='backclick' v-show="isshowBackTop"></back-top>
  </div>
</template>

<script>
  import HomeSwiper from './HomeSwiper.vue'
  import RecommendView from './RecommendView.vue'
  import FeatureView from './FeatureView.vue'

  import {debounce} from 'common/utils.js'
  import NavBar from 'components/common/navbar/NavBar.vue'
  import scroll from 'components/common/scroll/scroll.vue'
  import TabControl from 'components/content/TabControl.vue'
  import goods from 'components/content/goods.vue'
  import BackTop from 'components/content/BackTop.vue'


  import {
    gethome,
    gethomegoods
  } from 'network/home.js'



  export default {
    name: 'Home',
    components: {
      HomeSwiper,
      RecommendView,
      FeatureView,
      NavBar,
      TabControl,
      goods,
      scroll,
      BackTop
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': { page: 0, list: [] },
          'new': { page: 0, list: []},
          'sell':{ page: 0, list: []}
        },
        currenttype:'pop',
        isshowBackTop:false,
        taboffsettop:0,
        istabfixed:false,
        savey:0

      }
    },
    created() {
      //请求多个数据
      this.gethome()
      this.gethomegoods('pop')
      this.gethomegoods('new')
      this.gethomegoods('sell')

    },
    mounted(){
      const refresh=debounce(this.$refs.scroll.refresh,50)
      this.$bus.$on('imageload',()=>{
        refresh()
      })
    },
    methods: {
      gethome() {
        gethome().then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      gethomegoods(type) {
        const page = this.goods[type].page + 1
        gethomegoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
          this.$refs.scroll.scroll.finishPullUp()
        })
      },
      tabclick(index){
        switch(index){
          case 0:
            this.currenttype='pop';
            break
          case 1:
            this.currenttype='new'
            break
          case 2:
            this.currenttype='sell'
            break
        }
      },
      backclick(){
        this.$refs.scroll.scrollTo(0,0)
      },
      contentScroll(position){
        this.isshowBackTop=(-position.y)>1000
        this.istabfixed=(-position.y)>this.taboffsettop
      },
      loadmore(){
        this.gethomegoods(this.currenttype)

      },
      swiperimageload(){
        this.taboffsettop=this.$refs.tabcontrol2.$el.offsetTop
      }
    },
    computed:{
      activated(){
        
        this.$refs.scroll.scrollTo(0,this.savey,0)
        this.$refs.scroll.refresh()
      },
      deactivated(){
        this.savey=this.$refs.scroll.scroll.Y
      }
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #FFFFFF;
  }
  .wrapper{
    height: 100vh;
    position: relative;
  }
  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
  .tab-control{
   position: relative;
    z-index: 9;
    background-color: #FFFFFF;
  }
</style>
