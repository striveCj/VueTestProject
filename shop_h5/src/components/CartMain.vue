<template>
    <main class="cart_box">
      <p v-show="!products.length"><i>请选择商品加入到购物车</i></p>
      <div class="cart_content clearfix" v-for="item in products" style="position: relative">
        <div class="cart_shop clearfix">
          <div class="cart_check_box">
            <div class="check_box"></div>
          </div>
          <div class="shop_info clearfix">
            <span class="shop_name" style="font-size: 14px">丝路乐购新疆商城</span>
          </div>
        </div>
      </div>
    </main>
</template>

<script>
    export default {
        name: "CartMain.vue"
    }
</script>

<style scoped>

</style>
