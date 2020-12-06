import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    layout: 'default',
    active: [
      {
        id: 1,
        name: 'Зарплата Анастасия',
        amount: 20000
      },
      {
        id: 2,
        name: 'Зарплата Максим',
        amount: 40000
      }
    ],
    liabilities: [
      {
        id: 1,
        name: 'Ипотека',
        amount: 13000
      },
      {
        id: 2,
        name: 'Еда',
        amount: 4000
      },
      {
        id: 3,
        name: 'Стрижка',
        amount: 300
      },
      {
        id: 4,
        name: 'Бензин',
        amount: 3000
      }
    ]
  },
  mutations: {
    setLayout (state, payload) {
      state.layout = payload
    }
  },
  actions: {
  },
  getters: {
    layout (state) {
      return state.layout
    },
    active (state) {
      return state.active
    }
  },
  modules: {
  }
})
