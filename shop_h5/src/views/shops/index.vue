<template>
  <div class="background">
    <div class="home">
      <div class="m_layout">
        <!--轮播图-->
        <HomeBannerView></HomeBannerView>
        <!--导航-->
        <HomeNavView></HomeNavView>

        <span class="divider" style="height:4px;"></span>
        <div class="product_top">
          <div class="product_left">
            <div>商品列表</div>
          </div>
        </div>
        <span class="divider" style="height:2px;"></span>
        <SpecialMarket :id="good.id" :name="good.name" :description="good.description" :image_url="good.image_url" v-for="good in goods" ></SpecialMarket>

      </div>
    </div>
    <NavBottomView :is_shops_index="is_shops_index"></NavBottomView>
  </div>
</template>
<script>
  import { bindEvent, scrollPic } from '../../libs/index.js'
  import HomeBannerView from '../../components/HomeBanner.vue'
  import HomeNavView from '../../components/HomeNav.vue'
  import SpecialMarket from '../../components/SpecialMarket.vue'
  import NavBottomView from '../../components/NavBottom.vue'
  export default {

  }
</script>
