import Vue from 'vue'
import Vuex from 'vuex'
import axios from './plugins/axios'
import { setToken, removeToken } from './plugins/cookie'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginState: ''
  },
  mutations: {
    "SET_Login_State": function (state, statusCode) {
      state.loginState = statusCode
    }
  },
  actions: {
    Login({commit}, userInfo) {
      return new Promise((rel, rej) => {
        axios({
          method: 'post',
          url: '/notice/login',
          data: userInfo
        }).then((res) => {
          setToken('success');
          commit('SET_Login_State', 'success');
          if(res.data === 'success') {
            rel();
          } else {
            rej('用户名或密码错误');
          }
          
        }).catch((err) => {
          rej(err);
        })
      })
    },
    OutLogin() {
      return new Promise((rel, rej) => {
        removeToken();
        rel();
      })
    }
  }
})
