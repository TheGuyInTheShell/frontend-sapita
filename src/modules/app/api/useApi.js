import axios from 'axios'
import { useSessionStore } from '../../login/store/session';

const sessionStore = useSessionStore()

const apiBase = axios.create({
    baseURL: 'http://localhost:3037/index.php/api',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*'
    }
})

apiBase.interceptors.request.use(function (config) {
    config.headers.set( 'Session-hash', localStorage.getItem('session_hash') ?? 'none')
    config.headers.set('Temp-token', localStorage.getItem('temp_token') ?? 'none')
    return config;
  }, function (error) {
    return Promise.reject(error);
  });


apiBase.interceptors.response.use(function (response) {

    if (response.data === 'No session') {
      sessionStore.dropSession()
    }
    if (response.data?.temp_token) {
      localStorage.setItem('temp_token', response.data.temp_token)
    }
    return response;
  }, function (error) {

    return Promise.reject(error);
  });

export {apiBase}