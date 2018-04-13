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
export default {
  data: function () {
    return {
    }
  },
  computed: {
    test() {
      return this.$store.state.test
    },
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    increment () {
      this.$store.commit('increment')
    },
    decrement () {
      this.$store.commit('decrement')
    },
    updateTest() {
      this.$store.commit('updateTest')
      console.log('updateTest: ' + this.$store.state.test)
      this.$Message.info(`updateTest: ${this.$store.state.test}`)
    },
    initialTest() {
      this.$store.commit('initialTest')
      console.log('initialTest: ' + this.$store.state.test)
      this.$Message.info(`initialTest: ${this.$store.state.test}`)
    }
  }
}
</script>

<style scoped>
</style>
