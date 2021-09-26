import Vue from 'vue'
import App from './App.vue'
import VueGoogleMap from "vuejs-google-maps";
import "vuejs-google-maps/dist/vuejs-google-maps.css";

Vue.config.productionTip = false

Vue.use(VueGoogleMap, {
  load: {
    apiKey: "AIzaSyAFpCdi4OzvUUr9VYwayGr1URY3FXWB3bs",
    libraries: [
      /* rest of libraries */
      
    ],
  },
});

new Vue({
  render: h => h(App),
}).$mount('#app')
