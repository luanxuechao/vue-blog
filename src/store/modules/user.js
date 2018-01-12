import {
  loginByUsername
} from '../../resources/user'
import Cookies from 'js-cookie'
import { URL } from '../../common/config'

const user = {
  state: {
    mobile: Cookies.get('LoginMobile'),
    username: Cookies.get('UserName'),
    code: '',
    userId: Cookies.get('UserId'),
    token: Cookies.get('Admin-Token'),
    user_type: Cookies.get('UserType'),
    name: '',
    avatar: Cookies.get('Avatar'),
    roles: []
  },

  mutations: {
    SET_USER_TYPE: (state, user_type) => {
      state.user_type = user_type
    },
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_USERID: (state, userId) => {
      state.userId = userId
    },
    SET_MOBILE: (state, mobile) => {
      state.mobile = mobile
    },
    SET_USERNAME: (state, username) => {
      state.username = username
    },
    SET_STATUS: (state, status) => {
      state.status = status;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    LOGIN_SUCCESS: () => {
      // console.log('login success')
    },
    LOGOUT_USER: state => {
      state.user = '';
    }
  },
  actions: {
    // 用户名登录
    LoginByUsername({
      commit
    }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        loginByUsername(username, userInfo.password).then(response => {
          const data = response.data
          // console.log('LoginByUsername:', response.data)
          Cookies.set('Admin-Token', data.token)
          Cookies.set('UserType', data.role.name)
          Cookies.set('Uid', data.organizationId)
          Cookies.set('UserId', data.id)
          Cookies.set('Avatar', data.avatar ? URL + data.avatar.url : defaultAvatar)
          commit('SET_TOKEN', data.token)
          commit('SET_USERNAME', data.username)
          commit('SET_USER_TYPE', data.role.name)
          commit('SET_UID', data.organizationId)
          commit('SET_USERID', data.id)
          commit('SET_MOBILE', mobile)
          commit('SET_CODE', code)
          commit('SET_AVATAR', data.avatar ? URL + data.avatar.url : defaultAvatar)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
  }
}
export default user
