/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from 'axios';
import qs from 'qs';
import {
    Toast
} from 'vant';
import store from '../../store/index'

// 环境的切换

// if (process.env.NODE_ENV == 'development') {  
//     axios.defaults.baseURL = '/api';
// } else if (process.env.NODE_ENV == 'debug') {    
//     axios.defaults.baseURL = '';
// } else if (process.env.NODE_ENV == 'production') {    
//     axios.defaults.baseURL = 'http://api.123dailu.com/';
// }
// http://192.168.60.190/wqrc/public/index.php/weixin/index/articlelist.html?page=1&categoryId=7&pageSize=10

//  weixin/index/articlelist.html?categoryId=7&page=0&pageSize=10
// axios.defaults.baseURL = process.env.VUE_APP_API_URL

// 请求超时时间
// axios.defaults.timeout = 60000;

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

const baseURL=process.env.VUE_APP_MODE == 'production'?process.env.VUE_APP_API_URL:'/proxyApi'
//可以创建多个实例,切换到不同实例/proxyApi
export const instance = axios.create({
    baseURL: baseURL,//'/proxyApi',
    timeout: 1000 * 60
})
instance.interceptors.request.use(config => {
    // console.log(config)
    // 1.当发送网络请求时, 在页面中添加一个loading组件, 作为动画
    // 2.某些请求要求用户必须登录, 判断用户是否有token, 如果没有token跳转到login页面
    // 3.对请求的参数进行序列化(看服务器是否需要序列化)
    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
    }
    return config
}, err => {
    return Promise.reject(err)
})

instance.interceptors.response.use(res => {
    return Promise.resolve(res)
}, err => {
    return Promise.reject(err)
})


instance.post = (url, data) => {
    return instance({
        url,
        method: 'post',
        data
    })
}



/** 
 * get方法，对应get请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
                params: params
            })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}
/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, qs.stringify(params))
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}