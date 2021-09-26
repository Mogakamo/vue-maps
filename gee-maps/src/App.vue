<template>
  <div>
    <GoogleMaps />
  </div>
</template>

<script>
import GoogleMaps from "./components/GoogleMaps.vue"

export default {
  name: 'App',
  components: {
    GoogleMaps,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
