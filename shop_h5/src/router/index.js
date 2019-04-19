import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/views/shops/index'
import GoodsDetails from '@/views/shops/goods_details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/shops/goods_details',
      name:'GoodsDetails',
      compoent:GoodsDetails
    },
    {
      path: '/wait_to_shouquan',
      name: 'wait_to_shouquan',
      component:require('../views/wait_to_shouquan.vue') 
    }, {
      path: '/',
      name: 'Home',
      component:Index
    }
  ]
})
