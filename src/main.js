import { createApp, defineAsyncComponent } from "vue";
import router from "./router";
import App from "./App.vue";
import store from "./store";
import BaseCardVue from "./pages/ui/BaseCard.vue";
import BaseButtonVue from "./pages/ui/BaseButton.vue";
import BaseBadge from "./pages/ui/BaseBadge.vue";
import BaseSpinner from "./pages/ui/BaseSpinner.vue";
// import BaseDialog from "./pages/ui/BaseDialog.vue";

const BaseDialog = defineAsyncComponent(() =>
  import("./pages/ui/BaseDialog.vue")
);
const app = createApp(App);
app.use(router);
app.use(store);
app.component("base-card", BaseCardVue);
app.component("base-button", BaseButtonVue);
app.component("base-badge", BaseBadge);
app.component("base-spinner", BaseSpinner);
app.component("base-dialog", BaseDialog);
app.mount("#app");
