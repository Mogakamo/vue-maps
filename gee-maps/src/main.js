import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

//vue-maps
import * as VueGoogleMaps from 'vue2-google-maps'

VueGoogleMaps.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAFpCdi4OzvUUr9VYwayGr1URY3FXWB3bs",
    libraries: "places",
  },
});

createApp(App).use(store).use(router).mount("#app");
