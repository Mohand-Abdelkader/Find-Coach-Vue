import mutation from "./mutation";
import actions from "./actions";
import getters from "./getters";
import mutations from "../coaches/mutations";
export default {
  namespaced: true, // Ensure this line exists
  state() {
    return {
      requests: [],
    };
  },

  mutations: mutation,
  actions,
  getters,
};
