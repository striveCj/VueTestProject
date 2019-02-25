<template>
  <div>
    {{message}}
    <input type="button" @click="show_message()" value="..." />
    <input type="button" v-on:click="say_hi('jim')" value="...." />

  </div>
</template>
<script>
export default {
 data () {
  return {
    message: '你好Vue!本消息来自于变量'
  }
    },
    methods: {
      show_message: function () {
        alert('message:' + this.message)
      },
      say_hi: function (name) {
        alert(name + 'Hello')
      }
    }
}
</script>
<style>

</style>
