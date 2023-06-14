import axios from 'axios'

const apiBase = axios.create({
    baseURL: 'http://localhost:3037/index.php/api',
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
})

apiBase.interceptors.request.use(function (config) {
    config.headers.set( 'session_hash', localStorage.getItem('session_hash') ?? '')
    config.headers.set('temp_token', localStorage.getItem('temp_token') ?? '')
    return config;
  }, function (error) {
    return Promise.reject(error);
  });


apiBase.interceptors.response.use(function (response) {
    console.log(response.data)
    if (response.headers.temp_token) {
      localStorage.setItem('temp_token', response.headers.temp_token)
    }
    return response;
  }, function (error) {

    return Promise.reject(error);
  });

export {apiBase}