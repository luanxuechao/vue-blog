import notification from '@/utils/notification';
import Vue from 'vue'
const messages = {
  state: {
    friendMessageCount: 0,
  },
  mutations: {
    SOCKET_NEWFRIEND: (state, message) => {
      console.log('SOCKET_NEWFRIEND',message);
      message.title ='新的好友';
      message.content =message[0].creator.nickName+'请求添加你为好友'
      notification(message);
      state.friendMessageCount++;
    },
    SET_UNREADMESSAGE:(state,count)=>{
      state.friendMessageCount =count;
    }
  },
  actions: {
    getFriendMessageCount:(context, status)=>{
      let vueObj = new Vue();
      Vue.prototype.$socket.emit('unReadFriendMessageCount',(err,result)=>{
        if(err){
          vueObj.$Notice.error({
            title: '请求出错',
            desc: err.message
          });
        }
        context.commit('SET_UNREADMESSAGE',result.count);
      });
    }
  }
}

export default messages
