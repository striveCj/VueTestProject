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
        <div class="cart_del" @click="find_item_id(item)" class="cart_del clearfix" style="display: inline-block;position: absolute;top:10px;right: 10px;">
          <div class="del_top"></div>
          <div class="del_bottom"></div>
        </div>
        <div class="cart_item">
          <div class="cart_item_box">
            <div class="check_box"></div>
          </div>
          <div class="cart_detial_box clearfix">
            <a href="" class="cart_product_link">
              <img :src="item.image" alt="">
            </a>
            <div class="item_names">
              <a href="">
                <span></span>
              </a>
            </div>
            <div class="cart_weight">
              <span class="my_color" style="color:#979292;"></span>
            </div>
            <div class="cart_product_sell">
              <span class="product_money">￥<strong class="real_money"></strong></span>
            </div>
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
