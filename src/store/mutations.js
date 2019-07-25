const mutations = {
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
    const index = state.packageList.findIndex(value => value.waybillNumber.toString() === payload.package.waybillNumber)
    state.packageList[index].bookTime = payload.package.bookTime
  },
  updatePackageByStatusIsTwo (state, payload) {
    const index = state.packageList.findIndex(value => value.waybillNumber.toString() === payload.package.waybillNumber)
    state.packageList[index].status = 2
  }
}

export default mutations
