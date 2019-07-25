import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8090'
axios.defaults.timeout = 5000

export default axios
