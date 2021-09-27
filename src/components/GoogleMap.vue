<template>
  <div>
    Hello Google Maps <br>
    <button @click="showMarkers">Markers</button>
    <button @click="showDirection">Direction</button>
    <button @click="clear">clear</button>
    <GmapMap
  :center="center"
  :zoom="7"
  map-type-id="terrain"
  style="width: 100%; height: 80vh"
>
<GmapMarker
    :key="index"
    v-for="(m, index) in markers"
    :position="m.position"
    :clickable="true"
    :draggable="true"
    @click="center=m.position"
  />

  <gmap-polygon :paths="paths"></gmap-polygon>
</GmapMap>
  </div>
</template>

<script>
const home = { lat:-1.2253851978512977, lng:36.78071808114655 }
const school = { lat: 0.6321041564805784, lng:35.311758983803145 }
export default {
  name: 'GoogleMap',
  data() {
    return {
      markers: [],
      center: home
    };
  },
  methods: {
    showMarkers() {
      this.markers = [
        {
          position: home
        },
        {
          position: school
        }
      ]
    },
    showDirection() {
      this.paths = [home, school]
    },
    clear() {
      this.paths = [],
      this.markers = []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
