import axios from 'axios';
import store from '../store';
import Vue from 'vue';
import { URL } from './config'


const service = axios.create({
  baseURL: URL + '/api/v1/',  // 基本路径
  timeout: 5000 // 请求超时时间
});

// request拦截器
service.interceptors.request.use(config => {
  if (store.getters.token) {
    config.headers.Authorization = store.getters.token;
  }
  return config;
}, error => {
  Promise.reject(error);
})

service.interceptors.response.use(
  response => response,
  error => {
    const statusCode = error.response.data.error.statusCode
    if (statusCode === 401) {
      store.dispatch('FedLogOut').then(() => {
        location.reload()
      })
    } else {
      const vueObj = new Vue()
      const msg = error.response.data.error.message
      vueObj.$Notice.error({
        title: '请求出错',
        desc: msg
      });
    }
    return Promise.reject(error);
  }
)

export default service;
