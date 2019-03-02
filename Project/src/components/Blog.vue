<template>
  <div>
    <div>
      <p>标题：{{blog.title}} </p>
      <p>发布于：{{blog.published_at}} </p>
      <div>
        {{blog.body}}
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
<style scoped>
  p{
    font-size:15px;
    color:rebeccapurple;
  }
</style>
