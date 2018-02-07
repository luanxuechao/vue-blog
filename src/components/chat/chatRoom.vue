<template>
  <div style="height:100%">
    <div v-if='chatRoomId' style="height:100%">
      <Row style='height:290px;'>
        <Col span='24' style="height:100%;">
        <div style="height:40px;background:#eee;width:100%">
          <span style="line-height: 40px; margin: 20px auto; font-size:18px;margin-left:10px;font-weight:bold">{{remark}}</span>
          <div style='margin-top:-30px;margin-left:450px'>
            <Icon type="ios-information-outline" size='20'></Icon>
          </div>
        </div>
        <Scroll :on-reach-top="handleReachTop" style='margin-bottom:10px;'>
          <div id="dialogue_box" style="overflow-y: auto;height:230px;width:500px;margin: 0 auto;">
            <div v-if='chatMessages.length >0' v-for='chatMessage in chatMessages'>
              <div v-if= 'chatMessage.messageType == "DATETIME" '>
              <span  style='text-align: center;display:block;color:#B2B2B2'>
              {{chatMessage.messageContent | chatMessageTimeFilter('HH:mm:SS')}}
              </span>
              </div>
              <div class="bubbleItem" v-if='chatMessage.messageType != "DATETIME" && chatMessage.sender.id != userId  '>
                <span class="bubble leftBubble">
                  {{chatMessage.messageContent}}
                  <span class="bottomLevel"></span>
                  <span class="topLevel"></span>
                  <span class="chatAvatar">
                    <Identicon :_text="chatMessage.sender.nickName" size="small" />
                  </span>
                </span>
              </div>
              <div class="bubbleItem clearfix" v-if='chatMessage.messageType != "DATETIME" && chatMessage.sender.id == userId  '>
                <span style="font-family: Arial, Helvetica, sans-serif;">
                </span>
                <span class="bubble rightBubble">
                  {{chatMessage.messageContent}}
                  <span class="bottomLevel"></span>
                  <span class="topLevel"></span>
                  <span class="chatAvatar">
                    <Identicon :_text="chatMessage.sender.nickName" size="small" />
                  </span>
                </span>
              </div>
            </div>
          </div>
        </Scroll>
        </Col>
      </Row>
      <Row>
        <Col span='24' style="height:100%">
        <Input type="textarea" :autosize="{minRows: 5,maxRows: 5}" @on-enter="sendMessage" v-model='message'></Input>
        </Col>
      </Row>
    </div>
    <div v-if='!chatRoomId' style="height:100%;width:100%;display:flex;justify-content:center;align-items:center;">
      <Icon type="chatboxes" size='100' style="color:#E1E1E1"></Icon>
    </div>
  </div>
</template>

<script>
  import Cookies from 'js-cookie'
  import Identicon from '../avatar/Identicon'
  export default {
    props: {
      chatRoomId: {
        type: String
      },
      remark: {
        type: String
      }
    },
    components: {
      Identicon
    },
    computed: {
      chatMessages() {
        if (this.$store.getters.messages.length > 0 && (!this.lastMessage ||
            this.lastMessage.id != this.$store.getters.messages[this.$store.getters.messages.length - 1].id)) {
          this.isScroll = true;
          this.lastMessage = this.$store.getters.messages[this.$store.getters.messages.length - 1];
        }
        return this.$store.getters.messages;
      }
    },
    watch: {
      chatRoomId(val, oldVal) {
        this.$store.dispatch('getMessages', val);
      }
    },
    mounted:function(){
      if(this.chatRoomId){
        this.$store.dispatch('getMessages', this.chatRoomId);
      }
    },
    updated: function() {
      const _this = this
      this.$nextTick(() => {
        var div = document.getElementById('dialogue_box');
        if (_this.isScroll) {
          _this.isScroll = false;
          div.scrollTop = div.scrollHeight;
          _this.$store.dispatch('readMessages', _this.chatRoomId);
        }
      })
    },
    data() {
      return {
        message: null,
        userId: Cookies.get('userId'),
        lastMessage: null,
        isScroll: true,
        isLoading: false
      }
    },
    methods: {
      handleReachTop() {
        const _this = this;
        if (_this.isLoading) {
          return;
        }
        _this.isLoading = true;
        return new Promise((resolve, reject) => {
          _this.$socket.emit('getHistoryMessage', {
            chatRoomId: _this.chatRoomId,
            createdAt: new Date(_this.chatMessages[0].createdAt).getTime(),
            limit: 5
          }, (err, messages) => {
            _this.isLoading = false;
            if (err) {
              reject(err);
            }
            if (messages.length == 0) {
              _this.$Message.warning("历史消息加载完了");
            }
            _this.$store.commit('SET_MESSAGES', messages);
            resolve();
          });
        })
      },
      sendMessage() {
        let data = {
          chatRoomId: this.chatRoomId,
          messageContent: this.message.trim(),
          messageType: 'MESSAGE'
        }
        this.$socket.emit('message', data, (err, message) => {
          if (err) {
            this.$Message.error('消息出错', err.message);
          }
          this.message = null;
          if (!this.chatMessages) {
            this.chatMessages = [];
          }
          this.chatMessages.push(message);
        });
        return;
      }
    }
  };

</script>
<style>
  .bubbleItem {
    width: 100%;
  }

  .bubble {
    max-width: 300px;
    position: relative;
    line-height: 30px;
    padding-left: 10px;
    padding-top: 3px;
    padding-bottom: 3px;
    border-radius: 7px;
    margin-top: 15px;
    padding-right: 10px;
    display: inline-block;
  }

  .leftBubble {
    position: relative;
    margin-left: 50px;
    border: 1px solid #eee;
    background-color: #eee;
    word-wrap: break-word;
  }

  .leftBubble .bottomLevel {
    position: absolute;
    top: 10px;
    left: -10px;
    border-top: 10px solid #eee;
    border-left: 10px solid transparent;
  }

  .leftBubble .topLevel {
    position: absolute;
    top: 11px;
    left: -8px;
    border-top: 10px solid #eee;
    border-left: 10px solid transparent;
    z-index: 100;
  }

  .leftBubble .chatAvatar {
    position: absolute;
    top: -5px;
    left: -40px;
  }

  .rightBubble {
    position: relative;
    margin-right: 50px;
    float: right;
    border: 1px solid #D7EADD;
    background-color: #D7EADD;
  }

  .rightBubble .bottomLevel {
    position: absolute;
    bottom: 11px;
    right: -10px;
    border-bottom: 10px solid #D7EADD;
    border-right: 10px solid transparent;
  }

  .rightBubble .topLevel {
    position: absolute;
    bottom: 12px;
    right: -8px;
    border-bottom: 10px solid #D7EADD;
    border-right: 10px solid transparent;
    z-index: 100;
  }

  .rightBubble .chatAvatar {
    position: absolute;
    bottom: -5px;
    right: -40px;
  }

  .clearfix:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
  }

</style>
