import Vue from 'vue'
import Vuex from 'vuex'
import { http } from '../http-common'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    layout: 'default',
    active: [],
    liabilities: [],
    periods: [],
    capital: []
  },
  mutations: {
    setLayout (state, payload) {
      state.layout = payload
    },
    toggleItem (state, payload) {
      state.liabilities.map((item) => {
        if (item.id === payload.id) {
          item.allocated = !item.allocated
        }
      })
    },
    setPeriods (state, data) {
      state.periods = data
    },
    setActive (state, data) {
      state.active = data
    },
    setLiabilities (state, data) {
      state.liabilities = data
    }
  },
  actions: {
    getPeriods ({ commit }) {
      http.get('periods')
        .then(response => {
          commit('setPeriods', response.data)
        })
    },
    getActive ({ commit }) {
      http.get('active')
        .then(response => {
          commit('setActive', response.data)
        })
    },
    getLiabilities ({ commit }) {
      http.get('liabilities')
        .then(response => {
          commit('setLiabilities', response.data)
        })
    }
  },
  getters: {
    layout (state) {
      return state.layout
    },
    profit (state) {
      const profit = state.active.reduce((profit, item) => {
        return profit + item.amount
      }, 0)
      return profit
    },
    expenses (state) {
      const expenses = state.liabilities.reduce((expenses, item) => {
        return expenses + item.amount
      }, 0)
      return expenses
    }
  },
  modules: {
  }
})
