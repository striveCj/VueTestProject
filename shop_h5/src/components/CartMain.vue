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
              <div class="cart_add clearfix"><span @click="minus(item.id)" class="my_item">-</span>
                <input type="tel" :value="item.quantity" class="my_count">
                <span class="my_add" @click="add(item.id)"></span>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="pop" style="display: none;">
        <div class="pop_box">
          <div class="del_info">
            确定要删除该商品吗？
          </div>
          <div class="del_cancel">
            取消
          </div>
          <div class="del_ok" @click="deleteItem">
            确定
          </div>
        </div>
      </div>
      <div class="cart_fo">
        <footer class="acrt footer">
          <div class="count_money_box">
            <div class="heji">
              <strong>合计：</strong>
              <strong style="color: #ff621a; font-size: 18px;">
                \{\{total|cyrrency}}
              </strong>
            </div>
          </div>
          <a :disabled="!products.length" @click="checkout(products)" class="go_pay">
            <span style="color: #f5f5f5;font-weight: 600;">结算</span>
          </a>
        </footer>
      </div>
    </main>
</template>

<script>
  import {mapGetters} from 'vuex'
  import  {go} from '../libs/router'
  import {check,animatDelBox} from '../assets/js/cart.js'
    export default {
        data(){
          return{
            need_delete_item:{},
            cartDatas:[ ],
          }
        },
      mounted() {
          check();
          animatDelBox();
      },
      computed:{
          ...mapGetters({
            products: 'cartProducts',
            checkoutStatus:'checkoutStatus'
          }),
        total(){
            return this.products.reduce((total,item)=>{
              return total + item.price*item.quantity
            },0)
        }
      },methods:{
          checkout(products){

          }
      }
    }
</script>

<style scoped>

</style>
