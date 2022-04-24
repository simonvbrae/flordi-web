import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { scrollState: 0 },
  getters: {
    getScrollState() {
      return this.scrollState;
    },
  },
  mutations: {
    INCREMENT_SCROLL_STATE(state) {
      state.scrollState += 1;
    },
  },
  actions: {
    incrementScrollState() {
      console.log("increment");
      this.commit("INCREMENT_SCROLL_STATE");
    },
  },
  modules: {},
});
