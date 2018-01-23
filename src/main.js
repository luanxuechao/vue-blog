// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//components
import Vue from 'vue'
import App from './App'
import router from './router'
import iview from 'iview'
import VueQuillEditor from 'vue-quill-editor'
import mavonEditor from 'mavon-editor'
import store from './store'
import filter from './filters'


// css
import  'iview/dist/styles/iview.css'
import './assets/css/article.css'
import 'mavon-editor/dist/css/index.css'
import 'github-markdown-css/github-markdown.css'
import './assets/css/articleDetail.css'


// add
Vue.use(iview);
Vue.use(mavonEditor)
Vue.use(VueQuillEditor)
Vue.use(filter)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {App }
})
