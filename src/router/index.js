import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TimeLine from '@/components/TimeLine'
import DemoList from '@/components/DemoList'
import Login from '@/components/Login'
import index from '@/components/index'
import ChatMenu from '@/components/ChatMenu'
import ChatList from '@/components/ChatList'
import FriendsMenu from '@/components/chat/friendsMenu'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      redirect:'/Hello',
      children:[
        {
          path: '/Hello',
          name: 'Hello',
          component: HelloWorld,
        },
        {
          path: '/TimeLine',
          name: 'TimeLine',
          component: TimeLine
        },
        {
          path: '/DemoList',
          name: 'DemoList',
          component: DemoList
        }
      ]
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/ChatMenu',
      name: 'ChatMenu',
      component: ChatMenu,
      children:[
        {
          path: 'ChatList',
          name: 'ChatList',
          component: ChatList
        },
        {
          path: 'FriendsMenu',
          name: 'FriendsMenu',
          component: FriendsMenu
        }
      ]
    }
  ]
})
