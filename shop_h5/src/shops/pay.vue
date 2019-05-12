<template>
    <div class="background">
      <header class="top_bar">
        <a onclick="window.history.go(-1)" class="icon_back"></a>
        <h3 class="cartname">订单支付</h3>
      </header>
      <div class="tast_list_bd" style="background-color:#f3f3f3;padding-top: 0;padding-bottom:80px; ">
        <div class="goods_detail" style="">
          <main class="detail_box">
            <span class="divider"></span>
            <form style="margin-top: 45px;">
              <div class="column is-12">
                <label  class="label">收货人</label>
                <p class="control has-icon has-icon-right">
                  <input type="text" name="name" v-model="mobile_user_name" v-validate="'required|required'" :class="{'input':true,'is_danger':errors.has('name')}" placeholder="例如：张三" autofocus="autofocus">
                  <span class="help is-danger" v-show="errors.has('name')">收货人不能为空</span>
                </p>
              </div>
              <div class="column is-12">
                <label  class="label">收货地址</label>
                <p class="control has-icon has-icon-right">
                  <input type="text" name="url" v-model="mobile_user_address" v-validate="'required|required'" :class="{'input':true,'is_danger':errors.has('url')}" placeholder="例如：湖北" autofocus="autofocus">
                  <span class="help is-danger" v-show="errors.has('url')">收货人不能为空</span>
                </p>
              </div>
              <div class="column is-12">
                <label  class="label">收货电话</label>
                <p class="control has-icon has-icon-right">
                  <input type="text" name="phone" v-model="mobile_user_phone" v-validate="'required|required'" :class="{'input':true,'is_danger':errors.has('phone')}" placeholder="例如：18888888888" autofocus="autofocus">
                  <span class="help is-danger" v-show="errors.has('phone')">收货电话不能为空</span>
                </p>
              </div>
            </form>
            <span class="divider"></span>
            <section class="product_info clearfix" v-if="single_pay">
              <div>
                <div class="fu_li_zhuan_qu">
                  <img :src="good_images[0]"  class="log_image">
                  <div class="content">
                    <div class="title">

                    </div>
                    <div class="logo_and_shop_name">
                      <div class="product_pric">
                        <span>￥</span>
                        <span class="rel_pric"></span>
                        <span>$nbsp x</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="product_info clearfix" v-else v-for="product in cartProducts">
              <div>
                <div class="fu_li_zhuan_qu">
                  <img :src="product.image"  class="log_image">
                  <div class="content">
                    <div class="title">

                    </div>
                    <div class="logo_and_shop_name">
                      <div class="product_pric">
                        <span>￥</span>
                        <span class="rel_pric"></span>
                        <span>$nbsp x</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <span class="divider" style="height: 15px;"></span>
              <div class="extra_cost" style="">
                <span style="float: left;margin-left: 15px">应付金额：</span>
                <div class="rel_price" type="text" name="cost" style="border:0;background-color: white;font-size: 20px;color: #ff621a;font-weight: bold;outline: none;text-align: right;padding-right: 20px;">
                  \{\{total_cost|currency}}
                </div>
                <div v-else class="rel_price" type="text" name="cost" style="border:0;background-color: white;font-size: 20px;color: #ff621a;font-weight: bold;outline: none;text-align: right;padding-right: 20px;">
                  \{\{total|currency}}

                </div>
              </div>
            </section>
          </main>
          <span class="divider"></span>
          <div style="height: 55px;display: flex;width: 100%;padding: 0px 10px;background-color: #fff;" @click="">
            <div style="flex: 1;display: flex;">
              <div style="margin-top: 10px;">
                <img src="../..assets/微信icon@3x.png" style="width: 35px;">
              </div>
              <span style="margin-top: 8px;font-size:18px;line-height: 40px;margin-left: 10px;">微信支付</span>
            </div>
            <div style="padding: 14px 10px;" @click="user_wechat">
              <img src="../..assets/选中 3x.png" style="width: 28px;" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="shop_layout-scroll-absolute" style="">
        <div class="queding" @click="buy">立即支付</div>
      </div>
    </div>
</template>

<script>
  import {go} from '../../libs/router'
  import {mapGetters} from 'vuex'
    export default {
    data(){
      return{
        good_images:[],
        good:"",
        buy_count:this.$route.query.buy_count,
        good_id:this.$route.query.good_id,
        open_id:this.$route.state.userInfo.open_id,
        mobile_user_address:'',
        mobile_user_phone:'',
        mobile_user_name:'',
        guest_remarks:'',
        is_use_wechat:false
      }
    },
      watch:{

      },
      mounted(){
      if (this.single_pay) {
        this.$http.get(this.$configs.api+'goods/goods_details?good_id='+this.good_id).then((response)=>{
          console.info(this.good_id)
          console.info(response.body)
          this.good=response.body.goodthis.good_images=response.body.good_images
        },(error)=>{
          console.error(error)
        });
      }
      },
      computed:{
      total(){
        return this.carProducts.reduce((total,p)=>{
          return(total+p.price=p.quantity)
        },0)
      },
        single_pay(){
        return this.good_id&&this.buy_count
        },
        total_cost(){
        return this.good.price*this.buy_count
        },
        ...mapGetters({
          cartProducts:'cartProucts',
          checkoutStatus:'checkoutStatus'
        })
      },
      methods:{
        validateBeforeSubmit(){
          return new Promise((resolve, reject) => {
            this.$validator.validateAll().then(resolve=>{
              console.info(result)
              if (result){
                console.info("=============表单验证成功====")
                resolve(true)
              } else  {
                alert("请填写完整的收货信息")
                resolve(false)
              }
            });
          })
        },
        plus(){
          this.buy_count=this.buy_count+1
        },
        minus(){
          if (this.buy_count>1) {
            this.buy_count=this.buy_count-1
          }
        },
        user_wechat(){
          if (this.is_use_wechat===false){
            this.is_use_wechat=true
          } else  {
            this.is_use_wechat=false
          }
        },
        buy(){
          let result=this.validateBeforeSubmit().then((resolve)=>{
            if (resolve) {
              console.info('true====')
              let params
              if (this.single_pay){
                params={
                  good_id: this.good_id,
                  buy_count:this.buy_count,
                  total_cost:this.total_cost,
                  guest_remarks: this.guest_remarks,
                  mobile_user_address: this.mobile_user_address,
                  mobile_user_name: this.mobile_user_name,
                  mobile_user_phone: this.mobile_user_phone,
                  open_id: this.open_id
                }
              }else {
                console.info(this.total)
                params={
                  good_id: this.good_id,
                  total_cost:this.total_cost,
                  guest_remarks: this.guest_remarks,
                  mobile_user_address: this.mobile_user_address,
                  mobile_user_name: this.mobile_user_name,
                  mobile_user_phone: this.mobile_user_phone,
                  open_id: this.open_id
                }
              }
              this.$http.post(this.$configs.api+'goods/buy',params).then((response)=>{
                let order_number=response.body.order_number
                this.purchase(order_number)
              },(error)=>{
                console.error(error)
              });
            }else {
              console.info('==请填写完整的收货信息')
            }
          })
        },
  purchase(order_number){
          if (typeof WeixinJSBride=="undefined"){
            if (document.addEventListener){
              document.addEventListener('WeixinJSBridgeReady',this.onBridgeReady,false);
            } else if(document.attachEvent){
              document.attachEvent('WeixinJSBridgeReady',this.onBridgeReady);
              document.attachEvent('onWeixinJSBridgeReady',this.onBridgeReady);
            }
          } else{
            this.onBridgeReady(order_number);
          }
  },
        onBridgeReady(order_number){
          let that=this
          let total_cost
          if (this.single_pay){
            total_cost=this.total_cost
          } else {
            total_cost=this.total
          }
          this.$http.post(this.$configs.api+'payments/user_pay',{
            open_id:this.$store.state.userInfo.open_id,
            total_cost:total_cost,
            order_number:order_number
          }).then((response)=>{
            WeixinJSBridge.invoke(
              'getBrandWCPayRequest',{
                "appId":response.data.appId,
                "timeStamp":response.data.timeStamp,
                "nonceStr":response.data.nonceStr,
                "package":response.data.package,
                "signType":response.data.sginType,
                "paySign":response.data.paySign
              },
              function(res){
                if (res.err_msg=="get_brand_wcpay_request:ok") {
                  that.$router.push({
                    path:'/shops/paysuccess?order_id='+order_number
                  });
                }
              },(error)=>{
                console.error(error);
              }
            )
            }

          )
        }
      }

    }
</script>

<style scoped>

</style>
