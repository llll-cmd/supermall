<template>
<div class="tab-bar-item"  @click="itemclick">
  <div v-if="!isActive"><slot name="item-ioc"></slot></div>
  <div v-else><slot name='item-ioc-active'></slot></div>
  <div :class="{active:isActive}"><slot name="item-text"></slot></div>

</div>
</template>

<script>
    export default{
        name:'TabBarItem',
        props:{
          path:String,
        },
        data(){
          return {
          }
        },
        computed:{
          isActive(){
          return this.$route.path.indexOf(this.path)!== -1
          }
        },
        methods:{
          itemclick(){
            this.$router.push(this.path)
          }
        }
   }
</script>

<style scoped>
 .tab-bar-item{
   flex: 1;
   text-align: center;
   height: 49px;
   font-size: 14px;

 }
 .tab-bar-item img{
   width: 24px;
   height: 24px;
   display: block;
   vertical-align: middle;
   margin-left: 28px;
   margin-top:3px;
   margin-bottom: 2px;

 }
 .active{
   color: red;
 }
</style>
