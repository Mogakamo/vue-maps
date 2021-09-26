import Vue from 'vue'
import App from './App.vue'
import VueGoogleMap from 'vue-google-maps'
import "vuejs-google-maps/dist/vuejs-google-maps.css";


Vue.config.productionTip = false

Vue.use(VueGoogleMap, {
  load: {
    key: "GOOGLE MAP API KEY GOES HERE",
    libraries: "places",
  },
});

new Vue({
  render: h => h(App),
}).$mount('#app')
