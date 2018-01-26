<template>
  <div style="height:100%">
    <Row style="height:100%;">
      <Col span='7' class="scroll" style="height:100%; background:#ffffff;border-right:1px solid #eee;overflow-y: scroll;">
      <div style='height:60px;border-bottom:1px solid #eee;position:relative;padding:10px; ' v-for=' chatUser in chatList'>
        <div class="demo-avatar" style="position:absoulte;left:10px; display: flex;width:190px">
        <Identicon shape="circle"  :_text="chatUser.chatUser.nickName" size="large" />
          <div style="margin-left:10px">
            <h3>
              {{chatUser.remark}}
            </h3>
            <span style='overflow:hidden; text-overflow:ellipsis;
                          display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;'>
               {{chatUser.chatRoom.chatMessages?chatUser.chatRoom.chatMessages[0].content :''}}
            </span>
          </div>
        </div>
      </div>
      </Col>
      <Col span='17' style="height:100%; background:#fffff">
      <chat-room></chat-room>
      </Col>
    </Row>
  </div>
</template>
<script>
  import chatRoom from './chat/chatRoom'
  import Identicon from './avatar/Identicon'
  export default {
    components: {
      chatRoom,
      Identicon
    },
    computed: {
      chatList() {
        return this.$store.getters.friendList
      }
    },
  }

</script>
<style>
  .scroll::-webkit-scrollbar {
    display: none;
  }

</style>
