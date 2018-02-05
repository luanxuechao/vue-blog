<template>
  <div class="hello" style="margin-top:15px;">
    <Row>
      <Col span="6" style="padding:20px;">
      <Card>
        <div style="text-align:center" v-on:click="goDemo('ChatMenu')">
          <Icon type="chatbubble" size='100' style="display:block"></Icon>
          <a>github地址</a>
          <h3>vueJS +socket.io + loopback 聊天室</h3>
        </div>
      </Card>
      </Col>
    </Row>
  </div>
</template>
<script>
import Cookies from 'js-cookie'
  export default {
    methods: {
      goDemo(routerName) {
        if(!Cookies.get('userId')){
          return this.$router.push({ path: '/Login' });
        }
        this.$router.push({
          path: `/ChatMenu/ChatList`
        });
      }
    }
  };

</script>
