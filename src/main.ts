import "./assets/main.scss";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { useDataStore } from "./stores/DataStore";
import { useTextStore } from "./stores/TextStore";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

const pinia = createPinia();

const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount("#app");

import "bootstrap/dist/js/bootstrap.js";
