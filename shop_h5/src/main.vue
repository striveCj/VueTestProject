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

    },
    watch: {

    },
    methods: {

    },
    components: {

    }
  }
</script>
