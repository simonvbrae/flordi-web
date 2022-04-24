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
      state.scrollState++;
    },
  },
  actions: {
    incrementScrollState() {
      this.commit("INCREMENT_SCROLL_STATE");
    },
  },
  modules: {},
});
