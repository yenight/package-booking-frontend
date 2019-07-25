import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8090'
axios.defaults.timeout = 5000

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    packageList: [],
    activeMenuItem: 'cai-niao'
  },
  mutations: {
    changeActiveMenuItem (state, payload) {
      state.activeMenuItem = payload.activeMenuItem
    },
    getPackageList (state, payload) {
      state.packageList = payload.packageList
    },
    addPackage (state, payload) {
      state.packageList.push(payload.package)
    },
    changePackageStatus (state, payload) {
      state.packageList[payload.index].status = payload.status
    },
    createPackage (state, payload) {
      state.packageList.push(payload.package)
    },
    updatePackageTime (state, payload) {
      const index = state.packageList.indexOf(payload.package.waybillNumber)
      state.packageList[index].bookTime = payload.package.bookTime
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
    },
    createPackage ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios.post('/deliveryPackages', payload.package)
          .then(response => {
            commit('createPackage', { package: response.data })
            resolve('get data success')
          })
          .catch(error => reject(error))
      })
    },
    updatePackageTime ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios.patch('/deliveryPackages', payload.package)
          .then(response => {
            commit('createPackage', payload)
            resolve('get data success')
          })
          .catch(error => reject(error))
      })
    }
  }
})
