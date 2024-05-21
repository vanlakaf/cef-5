import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "./router";

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);

app.mount("#app");
