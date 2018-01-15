import {
  loginByMobile,
  logout
} from '../../resources/user'
import Cookies from 'js-cookie'
import { URL } from '../../common/config'

const user = {
  state: {
    mobile: Cookies.get('mobile'),
    nickName: Cookies.get('nickName'),
    userId: Cookies.get('userId'),
    token: Cookies.get('token'),
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_USERID: (state, userId) => {
      state.userId = userId
    },
    SET_MOBILE: (state, mobile) => {
      state.mobile = mobile
    },
    SET_NAME: (state, name) => {
      state.nickName = name;
    }
  },
  actions: {
    // 用户名登录
    LoginByMobile({
      commit
    }, userInfo) {
      const mobile = userInfo.mobile.trim();
      return new Promise((resolve, reject) => {
        loginByMobile(mobile, userInfo.password).then(response => {
          const data = response.data
          Cookies.set('token', data.token)
          Cookies.set('userId', data.id)
          Cookies.set('nickName', data.nickName)
          Cookies.set('mobile', data.mobile)
          commit('SET_TOKEN', data.token)
          commit('SET_NAME', data.username)
          commit('SET_USERID', data.id)
          commit('SET_MOBILE', mobile)
          // commit('SET_AVATAR', data.avatar ? URL + data.avatar.url : defaultAvatar)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
     // 登出
    LogOut({
      commit,
      state
    }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_NAME', '')
          commit('SET_USERID', '')
          commit('SET_MOBILE', '')
          Cookies.remove('token')
          Cookies.remove('nickName')
          Cookies.remove('userId')
          Cookies.remove('mobile')
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
  }
}
export default user
