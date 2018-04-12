<template>
  <div id="page" class="page">
    <Test></Test>
    <Button type="primary" @click="modTest">修改test值</Button>
    <router-view></router-view>
  </div>
</template>

<script>
import Test from './src/views/Test.vue'

export default {
  components: {
    Test
  },
  data: function () {
    return {
    }
  },
  methods: {
    modTest() {
      this.$store.commit('updateTest', '这是修改后的值')
      console.log('updateTest后，test的值为：' + this.$store.state.test)
      this.$Message.info(`test的新值应为：${this.$store.state.test}`)
    }
  }
}
</script>

<style scoped>
.page {
  width: 90%;
  margin: 50px auto;
}
</style>
