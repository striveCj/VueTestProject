<template>
  <div id="app">
    <roter-view></roter-view>
  </div>
</template>

<script>
  import store from './vuex/store'
  import { SET_BASEINFO, GET_BASEINFO } from './vuex/mutation_types'
  export default {
    store,
    name: 'app',
    data() {
      return {
        user_info: {
          open_id:this.$route.query.open_id
        }
      }
    },
    mounted() {
      store.dispatch(SET_BASEINFO, { open_id: 'opFELv6YkJkMaH-xFkokTWCs5AlQ' })
      if (this.suer_info.open_id) {
        store.dispatch(SET_BASEINFO, this.user_info)
      } else {
        store.dispatch(SET_BASEINFO)
        if (store.state.userinfo.open_id === undefined) {
          console.info('用户id和open_id不存在，跳转到授权等待页面')
          this.$router.push({name:'wait_to_shouquan'})
        } else {
          console.info('已经有BASEINFO')
        }
      }
    },
    watch: {
      '$route'(val) {

      }
    },
    methods: {

    },
    components: {

    }
  }
</script>
