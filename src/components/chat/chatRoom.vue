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
        <div style="overflow-y: auto;height:250px;width:500px;">
          <div v-if='chatMessages.length >0' v-for='chatMessage in chatMessages'>
            <div class="left-box" v-if='chatMessage.sender.id != userId'>
              <div class="avatar">
                <Avatar style="background-color: #87d068" icon="person" size="small" />
              </div>
              <p style="width:100%;padding:2px 10px;">
               {{chatMessage.messageContent}}
              </p>
            </div>
            <div class="right-box" v-if='chatMessage.sender.id == userId'>
              <div class="avatar">
                <Avatar style="background-color: #87d068" icon="person" size="small" />
              </div>
              <p style="width:100%;padding:2px 10px;">
                 {{chatMessage.messageContent}}
              </p>
            </div>
          </div>
        </div>
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
  export default {
    props: {
      chatRoomId: {
        type: String
      },
      remark: {
        type: String
      }
    },

    watch: {
      chatRoomId(val, oldVal) {
        this.$socket.emit('getHistoryMessage', {
          chatRoomId: this.chatRoomId,
          createdAt: new Date().getTime(),
          limit: 5
        }, (err, messages) => {
          this.chatMessages = messages.reverse();
        });
      }
    },
    data() {
      return {
        message: null,
        userId: Cookies.get('userId'),
        chatMessages: []
      }
    },
    methods: {
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
          this.chatMessages.push(message);
        });
        return;
      }
    }
  };

</script>
<style>
  .left-box {
    position: relative;
    top: 10px;
    left: 60px;
    max-width: 300px;
    min-height: 40px;
    background: #eee;
    -moz-border-radius: 12px;
    -webkit-border-radius: 12px;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 500;
    word-wrap: break-word;
    margin-bottom: 10px;

  }

  .left-box .avatar {
     position: absolute;
    top: 10px;
    left:-50px;
  }

  .left-box:before {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    right: 100%;
    top: 12px;
    border-top: 8px solid transparent;
    border-right: 16px solid #eee;
    border-bottom: 8px solid transparent;
  }

  .right-box {
    position: relative;
    top: 10px;
    right: -120px;
    max-width: 300px;
    min-height: 40px;
    background: #eee;
    -moz-border-radius: 12px;
    -webkit-border-radius: 12px;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 500;
    word-wrap: break-word;
    margin-bottom: 10px;
    /*  */
  }

  .right-box .avatar {
    position: absolute;
    top: 10px;
    right: -50px;
  }

  .right-box:after {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    left: 100%;
    top: 12px;
    border-top: 8px solid transparent;
    border-left: 16px solid #eee;
    border-bottom: 8px solid transparent;
  }

</style>
