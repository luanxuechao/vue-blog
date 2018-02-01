import Vue from 'vue'
import VueSocketio from 'vue-socket.io';
import store from '../../store';
import socketio from 'socket.io-client';
import {
  URL
} from '../../common/config'
import notification from '@/utils/notification'
import Cookies from 'js-cookie'
import {
  getFriendList
} from '../../resources/user'
const messages = {
  state: {
    connect: false,
    messages: [],
    changed: null,
    friendList: [],
    chatRoomId:null
  },
  mutations: {
    SOCKET_CONNECT: (state, status) => {
      state.connect = true;
    },
    SET_FRIENDS: (state, list) => {
      state.friendList = list
    },
    SET_MESSAGE: (state, message) => {
      if(state.chatRoomId == message.chatRoomId){
        state.messages.push(message);
      }
    },
    SET_MESSAGES: (state, messages) => {
      state.messages = state.messages.concat(messages);
    },
    CLEAR_MESSAGES:(state)=>{
      state.messages=[];
    },
    SET_CHATROOMID: (state, chatRoomId) => {
      state.chatRoomId = chatRoomId;
    },
    SET_UNREADMESSAGENUM:(state,chatMessage) => {
      for(let i =0;i<state.friendList.length;i++){
        if(state.friendList[i].chatRoomId == chatMessage.chatRoomId){
          if(chatMessage.sender.id != Cookies.get('userId')){
            state.friendList[i].UnReadMessagesNum++;
          }
          state.friendList[i].chatRoom.chatMessages[0]=chatMessage;
          break;
        }
      }
    },
    CLEAR_UNREADMESSAGENUM:(state,chatRoomId)=>{
      for(let i =0;i<state.friendList.length;i++){
        if(state.friendList[i].chatRoomId == chatRoomId){
          state.friendList[i].UnReadMessagesNum=0;
          break;
        }
      }
    },
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
    socket_socketConnect: (context, message) => {
      context.dispatch('getFriendMessageCount');
      context.dispatch('getFriendList');
      context.dispatch('getFriendMessage');
      context.dispatch('joinRooms');
    },
    socket_socketNewchatroom: (context, message) => {
      context.dispatch('getFriendList');
    },
    joinRooms: (context) => {
      Vue.prototype.$socket.emit('joinRooms',function(err,isJoin){
        console.log('isJoin',isJoin);
      })
    },
    getFriendList: (context) => {
      return new Promise((resolve, reject) => {
        getFriendList().then(response => {

          context.commit('SET_FRIENDS', response.data);
          resolve()
        }).catch(error => {
          reject(error)
        })
      });
    },
    socket_socketMessage: (context, message) => {
      context.commit('SET_MESSAGE',message[0]);
      context.commit('SET_UNREADMESSAGENUM',message[0]);
      notification({title:message[0].sender.nickName,content:message[0].messageContent});
    },
    getMessages: (context, chatRoomId) => {
      context.commit('CLEAR_MESSAGES');
      context.commit('SET_CHATROOMID',chatRoomId);
      context.dispatch('readMessages',chatRoomId);
      Vue.prototype.$socket.emit('getHistoryMessage', {
        chatRoomId: chatRoomId,
        createdAt: new Date().getTime(),
        limit: 5
      }, (err, messages) => {
        context.commit('SET_MESSAGES', messages.reverse());
      });
    },
    readMessages:(context,chatRoomId)=> {
      Vue.prototype.$socket.emit('readChatMessage', {
        chatRoomId: chatRoomId,
      }, (err, messages) => {
        context.commit('CLEAR_UNREADMESSAGENUM',chatRoomId);
      });
    },
    setMessage:(context,message) =>{
      context.commit('SET_MESSAGE',message);
    }
  }
}

export default messages
