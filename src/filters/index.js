import util from '../utils/util'
import * as filters from'./utils'
let filter = {
  install: function(Vue) {
    util.each(filters, function(value, key) {
        Vue.filter(key, value)
    })
    Vue.mixin({});
  }
}

export default filter;
