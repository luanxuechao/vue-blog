import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ArticleDetail from '@/components/ArticleDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/ArticleDetail',
      name: 'ArticleDetail',
      component: ArticleDetail
    }
  ]
})
