<template>
  <div>
    <div>
      <p>标题： </p>
      <p>发布于： </p>
      <div>

      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        blog: {}
      }
    },
    mounted () {
      this.$http.get('api/Home/GetVueDetail?id=' + this.$route.query.id).then((response) => {
        this.blog = response.body.result
      }, (response) => {
        console.error(response)
        })
    }
  }
</script>
<style>

</style>
