<template>
  <router-view />

</template>

<script>
  import Cookies from 'js-cookie';
  import {init } from './utils/sortPickerView'
  export default {
    name: 'app',
    mounted() {
      this.socketConnect();
    },
    methods: {
      socketConnect() {
        if(Cookies.get('token')){
            this.$store.dispatch('SocketConnect');
        }
        // Sort.init()
        // var s = init(['栾学超','1231','Chevalier','黄诗人']);
        // console.log(init(['栾学超','1231','Chevalier','黄诗人']));
      }
    }
  }

</script>
