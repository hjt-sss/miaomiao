import Vue from 'vue'
import Router from 'vue-router'
import movieRouter from './movie'
import cinemaRouter from './cinema'
import mineRouter from './mine'
import adminRouter from './admin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL, // 这里打印出来是‘/’
  // base: 'miaomiao', //修改路由路径
  routes: [
    movieRouter,
    cinemaRouter,
    mineRouter,
    adminRouter,
    {
      path : '/*',
      redirect : '/mine'
    }
  ]
})

