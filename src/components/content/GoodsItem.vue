<template>
  <div class="item">
    <img :src=goodsitem.show.img alt="" @load="imageload" />
    <div class="info">
      <p>{{goodsitem.title}}</p>
      <span class="price">{{goodsitem.price}}</span>
      <img class="before" src="~assets/img/home/collect.svg"></img>
      <span class="cfav">{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GoodsItem',
    props: {
      goodsitem: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    methods:{
      imageload(){
        this.$bus.$emit('imageload')
      }
    }
  }
</script>

<style scoped>
.item>img {
    width: 100%;
    height: 230.4px;
    border-radius: 5px;
  }

  .item {
    width: 48%;
  }

  .info {
    height: 40px;
    font-size: 12px;
    text-align: center;
  }

  .info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .price {
    color: var(--color-high-text);
  }

  .before {
    display: inline-block;
    width: 14px;
    height: 14px;
    padding-top: 2px;
  }
</style>
