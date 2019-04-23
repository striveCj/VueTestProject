<template>
    <div class="background">
      <div class="goods_detail"  style="height: 100%">
        <header class="goods_detail">
          <a href="" class="icon_back" onclick="window.history.go(-1)"></a>
          <h3>商品详情</h3>
        </header>
        <div class="tast_list_bd" style="padding-top:44px;">
          <main class="detail_box">
            <div class="home_ban">
              <div class="m_banner clearfix" id="my_banner">
                <ul class="banner_box">
                  <div v-for="image in goods_details">
                    <li>
                      <img :src=image style="height: 300px">
                    </li>
                  </div>
                </ul>
                <ul class="point_box">
                  <li></li>
                </ul>
              </div>
            </div>
            <section class="product_info clearfix">
              <div class="product_left">
                <p class="product_name">

                </p>
                <div class="product_pric">
                  <span>￥</span>
                  <span class="rel_price"></span>
                  <span></span>
                  <span style="color:gray;text-decoration:line-through;font-size:18px;margin-left:14px;">原价：￥</span>
                </div>
              </div>
            </section>

            <span class="divider" style="height: 2px;">
              
            </span>
            <div id="choose_number" style="height: 40px;background-color: #fff;">
              <label style="font-size: 18px;float: left; margin-left:10.5px; margin-top: 7.5px;">购买数量</label>
              <div style="padding-top: 5px;">
                <img src="../../assets/add@2x.png" style="margin-right: 10px;display: inline;float: right;width: 30px;" class="plus" @click="plus" alt="">
                <input pattern="[0-9]*" v-model="buy_count" type="text" name="counts" style="width: 30px;display: inline;float: right;border: 0.5px solid #e2e2e2;line-height: 28px;text-align: center;">
                <img src="../../assets/minus@2x.png" style="display: inline;float: right;width: 30px;" class="minus" @click="minus" alt="">
              </div>
            </div>

            <section class="product_intro">
              <div class="pro_det" v-html="good.description" style="padding: 0 6.5px;">

              </div>
            </section>
            
          </main>
        </div>
        <footer class="cart_d_footer">
          <div class="m">
            <ul class="m_box">
              <li class="m_item">
                <a @click="toCart" class="m_item_link">
                  <em class="m_item_pic three"></em>
                  <span class="m_item_name">购物车</span>
                </a>
              </li>
            </ul>
            <div class="btn_box clearfix">
              <a @click="addToCart" class="buy_now">加入购物车</a>
              <a @click="zhifu" class="buybuy">立即购买</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
</template>

<script>
  import {go} from '../../libs/router'
  import {scrollPic} from '../../libs/index.js'
    export default {
        data(){
          return{
            good_images:[],
            good:"",
            buy_count:1,
            good_id:this.$route.query.good_id
          }
        },
      watch:{},
      mounted(){
          scrollPic();
          this.$http.get(this.$configs.api+'goods/goods_details?good_id='+this.good_id).then((response)=>{
            console.info(this.good_id)
            console.info(response.body)
            console.info(response.body)
            this.good=response.body.good
            this.good_images=response.body.good_images
          },(error)=>{
            console.error(error)
          });
      },
      methods:{
          addToCart(){
            alert("商品已经加入到了购物车")
            let goods={
              id:this.good_id,
              title:this.good.name,
              quantity:this.buy_count,
              price:this.good.price,
              image:this.good_images[0]
            }
            this.$store.dispatch('addToCart',goods)
          }
      }
    }
</script>

<style scoped>

</style>
