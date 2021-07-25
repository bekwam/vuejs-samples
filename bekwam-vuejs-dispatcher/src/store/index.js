import { createStore } from 'vuex'

export default createStore({
  state: {
    keys: [],
    config: {}
  },
  mutations: {
    SET_KEYS: (state, keys) => state.keys = keys,
    SET_CONFIG: (state, config) => state.config = config
  },
  actions: {
    async fetchKeys({commit}) {
      const response = await fetch( process.env.VUE_APP_API_URL + "/config");
      const data = await response.json();
      commit("SET_KEYS", data);
    },
    async fetchConfig({commit}, key) {
      const response = await fetch( process.env.VUE_APP_API_URL + "/config/" + key);
      const data = await response.json();
      commit("SET_CONFIG", data);
    }
  },
  modules: {
  }
})
