<template>
  <div>
    <div style="margin: 30px auto;">
      <p>store.state.test: {{ test }}</p>
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
    }
  }
}
</script>

<style scoped>
</style>
