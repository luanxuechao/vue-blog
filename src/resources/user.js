import httpServer from '../common/httpInterceptor'
import Qs from 'qs'

// 用户登录
export function loginByMobile(mobile, password) {
  const data = {
    mobile:mobile,
    password:password
  };
  return httpServer({
    url: 'BlogUsers/login',
    method: 'post',
    data: Qs.stringify(data)
  });
}

// 用户登录
export function register(userForm) {
  let userData = {
    mobile:userForm.mobile,
    nickName:userForm.nickName,
    sex:userForm.sex,
    password:userForm.password
  }
  return httpServer({
    url: 'BlogUsers',
    method: 'post',
    data: Qs.stringify(userData)
  });
}

export function logout(){
  return httpServer({
    url: 'BlogUsers/logout',
    method: 'post'
  });
}
