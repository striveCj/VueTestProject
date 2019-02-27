<template>
  <div>
    <table>
       <tr v-for="blog in blogs" :key='blog'>
        <td>{{blog.title}}</td>
       </tr>
    </table>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        title: '博客列表页',
        blogs: [
        ]
      }
    },
    mounted () {
      alert(1)
      this.$http.get('api/Home/GetVueList').then((response) => {
        console.info(response.body)
        this.blogs = response.body.blogs
      }, (response) => {
        console.error(response)
      })
    }
  }
</script>
<style>
  td {
    border-bottom: 1px solid grey;
  }
</style>
