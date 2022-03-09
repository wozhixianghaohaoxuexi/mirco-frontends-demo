<template>
  <div id="app">
    <div>mirco-vue3</div>
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
</style>
