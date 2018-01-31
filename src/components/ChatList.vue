<template>
  <div style="height:100%">
    <Row style="height:100%;">
      <Col span='7' class="scroll" style="height:100%; background:#ffffff;border-right:1px solid #eee;overflow-y: scroll;">
      <div style='height:60px;border-bottom:1px solid #eee;position:relative;padding:10px; '@click='goChatRoom(chatUser.chatRoomId,chatUser.remark)' v-if='chatList.length >0' v-for=' chatUser in chatList'>
        <div class="demo-avatar-badge" style="position:absoulte;left:10px; display: flex;width:190px">
          <Badge :count="chatUser.UnReadMessagesNum" overflow-count="9">
          <Identicon shape="square"  :_text="chatUser.chatUser.nickName" size="large" />
          </Badge>
          <div style="margin-left:15px;width:100%">
            <h3 style='display:inline-block'>
              {{chatUser.remark}}
            </h3>
            <span style='color:#B2B2B2; position: absolute;right: 10px;'>
            {{chatUser.chatRoom.chatMessages.length>0?chatUser.chatRoom.chatMessages[0].createdAt :'' | friendMenuTimefilter('yyy')}}
            </span>
            <span style='color:#B2B2B2;overflow:hidden; text-overflow:ellipsis;
                          display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;'>
               {{chatUser.chatRoom.chatMessages.length>0?chatUser.chatRoom.chatMessages[0].messageContent :''}}
            </span>
          </div>
        </div>
      </div>
      </Col>
      <Col span='17' style="height:100%; background:#fffff">
      <chat-room :chatRoomId='chatRoomId' :remark='remark'></chat-room>
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
    data(){
      return  {
        chatRoomId:null,
        remark:null,
      }
    },
    computed: {
      chatList() {
        console.log('this.$store.getters.friendList',this.$store.getters.friendList);
        return this.$store.getters.friendList
      }
    },
    methods:{
      goChatRoom(roomId,remark){
        this.chatRoomId = roomId;
        this.remark =remark
      }
    }
  }

</script>
<style>
  .scroll::-webkit-scrollbar {
    display: none;
  }

</style>
