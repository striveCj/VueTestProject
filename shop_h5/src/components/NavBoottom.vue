<template>
<div class="footer">
  <footer class="fixBottomBox">
    <ul>
      <router-link tag="li" to="/" class="tabItem">
        <a href="javascript:;" class="tab-item-link" v-if="is_shops_index">
          <img src="../assets/footer01.png" alt="" class="tabbar-logo" />
          <p class="tabbar-text" style="color: rgba(234,49,6,0.66);">首页 </p>
        </a>
        <a href="javascript:;" class="tab-item-link" v-if="is_shops_index">
          <img src="../assets/footer001.png" alt="" class="tabbar-logo" />
          <p class="tabbar-text" >首页 </p>
        </a>
      </router-link>
      <router-link tag="li" to="/shops/category" class="tabItem">
        <a href="javascript:;" class="tab-item-link" v-if="is_shops_index">
          <img src="../assets/footer02.png" alt="" class="tabbar-logo" />
          <p class="tabbar-text" style="color: rgba(234,49,6,0.66);">分类 </p>
        </a>
        <a href="javascript:;" class="tab-item-link" v-if="is_shops_index">
          <img src="../assets/footer002.png" alt="" class="tabbar-logo" />
          <p class="tabbar-text" >分类 </p>
        </a>
      </router-link>
      <router-link tag="li" to="/shops/category" class="tabItem">
        <a href="javascript:;" class="tab-item-link" v-if="is_shops_index">
          <img src="../assets/footer03.png" alt="" class="tabbar-logo" />
          <p class="tabbar-text" style="color: rgba(234,49,6,0.66);">购物车 </p>
        </a>
        <a href="javascript:;" class="tab-item-link" v-if="is_shops_index">
          <img src="../assets/footer003.png" alt="" class="tabbar-logo" />
          <p class="tabbar-text" >购物车 </p>
        </a>
      </router-link>
      <router-link tag="li" to="/shops/category" class="tabItem">
        <a href="javascript:;" class="tab-item-link" v-if="is_shops_index">
          <img src="../assets/footer04.png" alt="" class="tabbar-logo" />
          <p class="tabbar-text" style="color: rgba(234,49,6,0.66);">我的 </p>
        </a>
        <a href="javascript:;" class="tab-item-link" v-if="is_shops_index">
          <img src="../assets/footer004.png" alt="" class="tabbar-logo" />
          <p class="tabbar-text" >我的 </p>
        </a>
      </router-link>
    </ul>
  </footer>
</div>
</template>
<script>
  export default {
    data(){
      return{}
    },
    props:{
      is_shops_index:Boolean,
    is_category:Boolean,
      is_cart:Boolean,
      is_mine:Boolean,
    },
    mounted() {
    },
    computed:{

    },
methods:{

}
  }
</script>
