<template>
  <div id="app">
    <Layout />
  </div>
</template>

<script>
import Layout from './layout/Layout.vue'
export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  text-align: center;
}
</style>
