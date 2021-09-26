import App from './App.vue'

import * as VueGoogleMaps from "vue2-google-maps"
import Vue from 'vue'

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAFpCdi4OzvUUr9VYwayGr1URY3FXWB3bs",
    libraries: "places",
  },
});


new Vue({
  render: (h) => h(App),
}).$mount("#app");
