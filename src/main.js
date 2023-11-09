import { createApp } from "vue";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/saga-blue/theme.css";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).use(PrimeVue).mount("#app");
