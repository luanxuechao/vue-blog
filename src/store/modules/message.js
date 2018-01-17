import Vue from 'vue'
import VueSocketio from 'vue-socket.io';
import store from '../../store';
import socketio from 'socket.io-client';
import { URL } from '../../common/config'
const messages = {
  state: {
    connect: false,
    message: null,
    changed: null
  },
  mutations: {
    SOCKET_CONNECT: (state, status) => {
      state.connect = true
    },
    SOCKET_NEW_INTERNAL_LETTER: (state, message) => {
      state.message = message
    },
    SET_CHANGED: (state, changed) => {
      state.changed = changed
    }
  },
  actions: {
    SocketConnect:(context, status)=>{
    if(!Vue.prototype.$socket){
      Vue.use(VueSocketio, socketio(URL + '/chat',{
        query: {
          access_token: store.getters.token
        },
        transports: ['websocket']
      }), store);
    }else{
      Vue.prototype.$socket.connect();
    }
    },
    socket_connect: (context, status) => {
      context.commit('SOCKET_CONNECT', status)
    },
    socket_newInternalLetter: (context, message) => {
      // console.log('socket_newInternalLetter', message)
      context.commit('SOCKET_NEW_INTERNAL_LETTER', message)
      notification(message)
    },
    GetChanged: ({ commit }, status) => {
      commit('SET_CHANGED', status)
    }
  }
}

export default messages
