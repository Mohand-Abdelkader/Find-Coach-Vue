import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import store from "./store";
import BaseCardVue from "./pages/ui/BaseCard.vue";
import BaseButtonVue from "./pages/ui/BaseButton.vue";

const app = createApp(App);
app.use(router);
app.use(store);
app.component("base-card", BaseCardVue);
app.component("base-button", BaseButtonVue);
app.mount("#app");
