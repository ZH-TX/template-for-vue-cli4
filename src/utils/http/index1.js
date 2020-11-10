import Vue from 'vue'
import Oraxios from 'axios'



export default function axios(opt) {
  return new Promise((resolve, reject) => {
    //可以创建多个实例
    const instance = Oraxios.create({
      baseURL: 'https://cnodejs.org/api/v1',
      timeout: 5000
    })
    instance.interceptors.request.use(config => {
      // console.log('来到了request拦截success中');
      // config.data = qs.stringify(config.data)
      // console.log(config)
      // 1.当发送网络请求时, 在页面中添加一个loading组件, 作为动画

      // 2.某些请求要求用户必须登录, 判断用户是否有token, 如果没有token跳转到login页面

      // 3.对请求的参数进行序列化(看服务器是否需要序列化)
      return config
    }, err => {
      return err
    })

    instance.interceptors.response.use(res => {
      console.log('res相应成功');

      return res.data
    }, err => {
      console.log('res相应失败');

      if (err && err.response) {
        switch (err.response.status) {
          case 400:
            err.message = '请求错误'
            break
          case 401:
            err.message = '未授权的访问'
            break

          case 404:
            err.message = '没有找到啊'
            break
        }
      }
      return err
    })
    instance(opt).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}