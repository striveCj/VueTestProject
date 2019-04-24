<template>
    <div class="background">
      <div id="my_cart">
        <CartHeaderView></CartHeaderView>
        <CartMainView></CartMainView>
        <NavBottomView :is_cart="is_cart"></NavBottomView>
      </div>
    </div>
</template>

<script>
  import CartHeaderView from './CartHeader.vue';
  import CartMainView from './CartMain.vue';
  import NavBottomView from './NavBottom.vue';
    export default {
        data(){
          return{
            is_cart:true
          }
        },
      mounted(){

      },
      components:{
          CartHeaderView,
        CartMainView,
        NavBottomView
      }
    }
</script>

<style scoped>

</style>
