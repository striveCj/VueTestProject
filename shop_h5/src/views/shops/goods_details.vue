<template>
    <div class="background">
      <div class="goods_detail"  style="height: 100%">
        <header class="goods_detail">
          <a href="" class="icon_back" onclick="window.history.go(-1)"></a>
          <h3>赏评详情</h3>
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
          </main>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "goods_details"
    }
</script>

<style scoped>

</style>
