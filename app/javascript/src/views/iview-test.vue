<template>
  <div class="page">
    <Button @click="confirm">confirm Modal</Button>
    <p>
      当使用 this.$Modal.confirm 就会报很多[Vue warn], 点击以上按钮并打开控制台可以查看
    </p>
    <p>
      发现有时候使用 this.$router.push() 或 router-link 也会报很多[Vue warn]
    </p>
    <p>
      - 原因：引入 vue 的时候用了 ```import Vue from 'vue/dist/vue.esm' ```
    </p>
    <p>
      - 解决：改成 ```import Vue from 'vue' ```, 问题就解决了。[惊讶](原理暂时不是很清楚)
    </p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  methods: {
    confirm() {
      this.$Modal.confirm({
        title: '提示',
        content: '<p>这是一个确认弹框</p><p>查看console可以看到很多[Vue warn]</p><p>$attrs is readonly.</p><p>$listeners is readonly.</p>'
      })
    }
  }
}
</script>

<style scoped>
.page {
  margin: 50px auto;
  text-align: center;
}
p {
  margin: 20px auto;
}
</style>
