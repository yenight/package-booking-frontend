import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8090'
axios.defaults.timeout = 5000

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    packageList: []
  },
  mutations: {
    getPackageList (state, payload) {
      state.packageList = payload.packageList
    },
    getPackageListByStatus (state, payload) {
      state.packageList = payload.packageList.filter(x => x.status === payload.status)
    },
    addPackage (state, payload) {
      state.packageList.push(payload.package)
    },
    changePackageStatus (state, payload) {
      state.packageList[payload.index].status = payload.status
    }
  },
  actions: {
    getPackageList ({ commit }) {
      return new Promise((resolve, reject) => {
        axios.get('/deliveryPackages')
          .then(response => {
            commit('getPackageList', { packageList: response.data })
            resolve('get data success')
          })
          .catch(error => reject(error))
      })
    },
    getPackageListByStatus ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios.get('/deliveryPackages?status=' + payload.status)
          .then(response => {
            commit('getPackageList', { packageList: response.data })
            resolve('get data success')
          })
          .catch(error => reject(error))
      })
    }
  }
})
