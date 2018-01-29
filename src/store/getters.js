const getters = {
  token: state => state.user.token,
  name: state => state.user.name,
  uid: state => state.user.uid,
  userId: state => state.user.userId,
  email: state => state.user.email,
  username: state => state.user.username,
  mobile: state => state.user.mobile,
  friendMessageCount: state =>state.friendMessages.friendMessageCount,
  friendMessages: state =>state.friendMessages.friendMessages,
  friendList: state=>state.messages.friendList
};
export default getters
