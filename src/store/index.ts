import { createStore } from 'vuex'

export default createStore({
  state: {
    FavShops: [
      {
        name: 'Maison Lherault',
        img: '"/assets/images/herault.png"'
      },
      {
        name: 'Dockd Co',
        img: '"/assets/images/dock.png"'
      },
      {
        name: 'Souq Alcharq',
        img: '"/assets/images/souk.png"'
      },
      {
        name: 'Le sac de graines',
        img: '"/assets/images/sacdegraines.png"'
      },
    ],

    favs: []
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
