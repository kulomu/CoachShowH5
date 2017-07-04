import axios from 'axios'
import common from './common'

axios.defaults.timeout = 20000;
axios.defaults.baseURL = common.baseUrl;        //测试请求地址

// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    location.href = error.response.data
            }
        }
        return Promise.reject(error.response.data) // 返回接口返回的错误信息
    });

export default axios;