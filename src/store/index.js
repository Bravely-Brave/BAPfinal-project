import { createStore } from 'vuex'

export default createStore({
  state: {
    users: []
  },
  getters: {
  },
  mutations: {
    addUser(state, newUser) {
      state.users.push(newUser);
    }
  },
  actions: {
  },
  modules: {
  }
})
