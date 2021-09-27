<template>
  <div>
    Hello Google Maps
    <GmapMap
  :center="{lat:10, lng:10}"
  :zoom="7"
  map-type-id="terrain"
  style="width: 100%; height: 100vh"
>
</GmapMap>
  </div>
</template>

<script>
export default {
  name: 'GoogleMap',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
