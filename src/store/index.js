import { createStore } from "vuex";
import coaches from "./modules/coaches/index.js";
import requestsModule from "./modules/requests/index.js";
import authModule from "./modules/auth/index.js";

const store = createStore({
  modules: {
    coaches,
    requests: requestsModule,
    auth: authModule,
  },
});

export default store;
