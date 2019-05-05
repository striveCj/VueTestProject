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
          </main>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "pay"
    }
</script>

<style scoped>

</style>
