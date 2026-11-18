import axios from 'axios'
import { logout } from '../actions/userActions'

// Every backend route except /api/login now requires a token, so attach it to
// every request here instead of building headers by hand in each action.
const setupAxios = (store) => {
  axios.interceptors.request.use((config) => {
    const { userCred } = store.getState().userLogin
    // only send the token to our own API, never to third parties like Cloudinary
    const isOwnApi = config.url && config.url.startsWith('/')
    if (userCred && userCred.token && isOwnApi) {
      config.headers = config.headers || {}
      if (!config.headers.Authorization) {
        config.headers.Authorization = `Bearer ${userCred.token}`
      }
    }
    return config
  })

  // An expired or invalid token (they last 30 days) logs the user out and
  // sends them to the login page instead of leaving broken screens.
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      const status = error.response && error.response.status
      const url = (error.config && error.config.url) || ''
      if (status === 401 && !url.startsWith('/api/login')) {
        store.dispatch(logout())
        if (window.location.pathname !== '/login') {
          window.location.assign('/login')
        }
      }
      return Promise.reject(error)
    }
  )
}

export default setupAxios
