import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import getters from './getters';
import messages from './modules/message';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    messages
  },
  getters
});

export default store
