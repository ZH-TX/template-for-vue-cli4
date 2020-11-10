import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '一览英才网2021届秋季校园招聘节盛大开启'
    },
    component: ()=>import('views/Home.vue')
  },
  {
    path: '/home',
    redirect:'/',
  },
  
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(from){
    // console.log(from);
    localStorage.setItem('from', JSON.stringify({
      path: from.path,
      query: from.query
    }))
  }
  if (to.meta) {
    // console.log(to);
    document.title = to.meta.title
    if (to.meta.title === '文章详情') {
      document.title = from.meta.title||'NOT FOUND'
    }
  }
  return next()
})


export default router
