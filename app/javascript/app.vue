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
      this.$store.commit('updateTest', 'test的新值')
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
