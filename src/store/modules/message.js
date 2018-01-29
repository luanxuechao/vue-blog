import Vue from 'vue'
import VueSocketio from 'vue-socket.io';
import store from '../../store';
import socketio from 'socket.io-client';
import {
  URL
} from '../../common/config'
import notification from '@/utils/notification'
import Cookies from 'js-cookie'
import {getFriendList} from '../../resources/user'
const messages = {
  state: {
    connect: false,
    message: null,
    changed: null,
    friendList:[]
  },
  mutations: {
    SOCKET_CONNECT: (state, status) => {
      state.connect = true;
    },
    SET_FRIENDS:(state, list)=>{
      state.friendList =list
    }
  },
  actions: {
    SocketConnect: (context, status) => {
      if (!Vue.prototype.$socket) {
        Vue.use(VueSocketio, socketio(URL + '/chat', {
          query: {
            access_token: Cookies.get('token'),
            mobile: Cookies.get('mobile')
          },
          transports: ['websocket']
        }), store);
      } else {
        Vue.prototype.$socket.query.access_token = Cookies.get('token');
        Vue.prototype.$socket.query.mobile = Cookies.get('mobile');
        Vue.prototype.$socket.connect();
      }
    },
    socket_socketConnect:(context,message)=>{
      context.dispatch('getFriendMessageCount');
      context.dispatch('getFriendList');
    },
    socket_socketNewchatroom:(context,message)=>{
      context.dispatch('getFriendList');
    },
    getFriendList:(context)=>{
      return new Promise((resolve, reject) => {
        getFriendList().then(response => {

          context.commit('SET_FRIENDS',response.data);
          resolve()
        }).catch(error => {
          reject(error)
        })
      });
    }

  }
}

export default messages
