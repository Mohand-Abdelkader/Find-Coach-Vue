import mutation from "./mutation";
import actions from "./actions";
export default {
  namespaced: true,
  state() {
    return {
      requests: [],
    };
  },
  mutation,
  actions,
};
