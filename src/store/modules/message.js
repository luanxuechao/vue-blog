import Vue from 'vue'
import VueSocketio from 'vue-socket.io';
import store from '../../store';
import socketio from 'socket.io-client';
import {
  URL
} from '../../common/config'
import notification from '@/utils/notification'
import Cookies from 'js-cookie'
const messages = {
  state: {
    connect: false,
    message: null,
    changed: null
  },
  mutations: {
    SOCKET_CONNECT: (state, status) => {
      console.log('connect success!');
      state.connect = true
    },
    SOCKET_NEWFRIEND: (state, message) => {
      console.log(message);
      message.title =message[0].data;
      message.content =message[0].data
      notification(message)
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
    }
  }
}

export default messages
