import axios from '../api/config'

const actions = {
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
          commit('updatePackageTime', payload)
          resolve('get data success')
        })
        .catch(error => reject(error))
    })
  },
  updatePackageByStatusIsTwo ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios.patch('/deliveryPackages', payload.package)
        .then(response => {
          commit('updatePackageByStatusIsTwo', payload)
          resolve('get data success')
        })
        .catch(error => reject(error))
    })
  }
}

export default actions
