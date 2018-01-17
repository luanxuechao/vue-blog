<template>
  <router-view />

</template>

<script>
  import Cookies from 'js-cookie';
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
      }
    }
  }

</script>
