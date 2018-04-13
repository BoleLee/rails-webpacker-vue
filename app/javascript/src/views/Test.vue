<template>
  <div>
    <div style="margin: 30px auto;">
      <p>store.state.test: {{ test }}</p>
      <p>store.state.count: {{ count }}</p>
      <Button @click="increment">count自增</Button>
      <Button @click="decrement">count自减</Button>
      <Button @click="updateTest">updateTest</Button>
      <Button @click="initialTest">initialTest</Button>
    </div>
  </div>
</template>

<script>
import store from '../store'

export default {
  data: function () {
    return {
    }
  },
  computed: {
    test() {
      return store.state.test
    },
    count () {
      return store.state.count
    }
  },
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    },
    updateTest() {
      store.commit('updateTest')
      console.log('updateTest: ' + store.state.test)
      this.$Message.info(`updateTest: ${store.state.test}`)
    },
    initialTest() {
      store.commit('initialTest')
      console.log('initialTest: ' + store.state.test)
      this.$Message.info(`initialTest: ${store.state.test}`)
    }
  }
}
</script>

<style scoped>
</style>
