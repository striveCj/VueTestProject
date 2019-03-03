<template>
  <div>
    <textarea v-model="content"></textarea>
    <hr />
    <input type="button" @click="submit" value="留言" />
  </div>
</template>
<script>
  export default {
    data () {
      return {
        content:''
      }
    },
    methods: {
      submit: function () {
        this.$http.post('api/Home/AddComment', { content: this.content }).then((response) => {
          alert("提交成功!,您刚才的留言是" + response.body.content)
        }, (response) => {
          alert("出错了！")
        })
      }
    }
  }
</script>
