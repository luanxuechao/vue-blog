import httpServer from '../common/httpInterceptor'
import Qs from 'qs'
export function delFriendMessage(){
  return httpServer({
    url: 'FriendMessages/deletedMessage',
    method: 'delete'
  });
}
