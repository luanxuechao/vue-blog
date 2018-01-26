<template>
  <div style="height:100%">
    <Row style="height:100%;" class="scroll">
      <Col span='6' style="height:100%; background:#ffffff;border-right:1px solid #eee;overflow-y: auto;">
      <div style="width:100%; border-bottom:1px solid #eee">
        <Button style="width:150px; margin:10px auto;display:block;" @click="modal6 = true">添加好友</Button>
      </div>
      <!-- 添加新朋友-->
      <div v-on:click='changMenu("NEWFRIEND")'>
        <div class='person' style='height:40px;width:100%;border-bottom:1px solid #eee;line-height:40px;'>
          <div class="demo-avatar-badge" style="margin-left:10px;">
            <Badge :dot='!!friendmessageCount' >
              <Avatar style="background-color: #EEA150;" icon="person-add" shape="square" />
            </Badge>
          </div>
          <span style="display:block;margin-top:-40px;margin-left: 50px;">新的朋友
          </span>
        </div>
      </div>
      <!-- 朋友列表-->
      <div>
        <div v-for='friend in friendList' v-if='friend.textArray.length > 0'>
          <span style="margin-left:10px;background-color:#eee;display:block;">{{friend.tag}}</span>
          <div v-for ='person in friend.textArray'v-on:click='getPersonal(person)' class='person' style='height:40px;width:100%;border-bottom:1px solid #eee;line-height:40px;'>
            <div class="demo-avatar" style="margin-left:10px;">
             <Identicon style="margin-top:4px;" shape="square"  :_text="person.remark"/>
            </div>
            <span style="display:block;margin-top: -50px;margin-left: 50px;">{{person.remark}}
            </span>
          </div>
        </div>
      </div>
      </Col>
      <Col span='18' style="height:100%; background:#fff;display:flex;justify-content:center;">
      <!-- 默认界面-->
      <div v-if='friendMenuType == "default"' style="height:100%;width:100%;display:flex;justify-content:center;align-items:center;">
        <Icon type="chatboxes" size='100' style="color:#E1E1E1"></Icon>
      </div>
      <!-- 新的朋友界面 -->
      <div v-if='friendMenuType == "NEWFRIEND"'>
        <div style="height:40px;width:100%;border-bottom:1px solid #eee">
          <span style="line-height: 40px; margin: 20px auto; font-size:18px;margin-left:10px;font-weight:bold">好友验证消息</span>
          <span style="margin-left:360px;">
            <Icon type="ios-trash-outline" size='30' style="color:#278DE9"></Icon>
          </span>
        </div>
        <div style="overflow-y: auto;width:100%;height:370px">
          <div style="text-align: center;margin-top:20px;" v-for="friendmessage in friendmessages">
            <span style="color:#aaa;">{{friendmessage.createdAt | timefilter('MM-DD HH:mm')}}</span>
            <div style="width:470px; height:100px;margin:0 auto;border:1px solid #eee;border-radius:5px">
              <div class="demo-avatar" style="float:left;margin:30px 0px 30px 20px;">
                <Identicon shape="square" icon="person" size="large" :_text="friendmessage.creatorId == userId?friendmessage.receiver.nickName:friendmessage.creator.nickName"
                />
              </div>
              <div v-if='friendmessage.creatorId == userId' style="float:left;margin:30px 0px 30px 0px;">
                <Button type="text" style="color:#278DE9">{{friendmessage.receiver.nickName}}</Button>
                <span v-if='friendmessage.result == "AUTHENTICATION"'>已通知他添加你为好友</span>
                <span v-if='friendmessage.result == "SUCCESS"'>已添加你为好友</span>
                <span v-if='friendmessage.result == "FAILED"'>已拒绝你为好友</span>
              </div>
              <div v-if='friendmessage.receiverId == userId' style="float:left;margin:30px 0px 30px 0px;">
                <Button type="text" style="color:#278DE9">{{friendmessage.creator.nickName}}</Button>
                <span>添加你为好友</span>
              </div>
              <div v-if='friendmessage.creatorId == userId' style="float:right;margin:30px 20px 30px 0px;">
                <span v-if='friendmessage.result == "AUTHENTICATION"' style="color:#C5C5C5">等待验证</span>
                <span v-if='friendmessage.result == "SUCCESS"' style="color:#C5C5C5">已添加</span>
                <span v-if='friendmessage.result == "FAILED"' style="color:#C5C5C5">已拒绝</span>
              </div>
              <div v-if='friendmessage.receiverId == userId' style="float:right;margin:30px 20px 30px 0px;">
                <Button v-if='friendmessage.result == "AUTHENTICATION"' type="success" @click='resolve(friendmessage.id,"SUCCESS")'>同意</Button>
                <Button v-if='friendmessage.result == "AUTHENTICATION"' type="error" @click='resolve(friendmessage.id,"FAILED")'>拒绝</Button>
                <span v-if='friendmessage.result == "SUCCESS"' style="color:#C5C5C5">已添加</span>
                <span v-if='friendmessage.result == "FAILED"' style="color:#C5C5C5">已拒绝</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 详细信息-->
      <div v-if='friendMenuType == "PERSONAL" && personal' style="width:90%;height:53px;border-bottom:1px solid #eee;text-align:center;">
        <p style="line-height: 53px;font-size:14px">详细信息</p>
        <div style="margin-top:20px;">
        <Identicon class='person-avastar' shape="square" icon="person" size="large" :_text="personal.chatUser.nickName"
              />
        </div>
        <h1 style="line-height: 53px;">
          {{personal.chatUser.nickName}}
          <Icon type="male" color='#6DA6C6' size='14' v-if='personal.chatUser.sex == "MALE"'></Icon>
          <Icon type="female" color='#CF6D69' size='14'  v-if='personal.chatUser.sex == "FEMALE"'></Icon>
        </h1>
        <p style="font-size:14px;color:#888888; line-height: 40px;">
         {{personal.chatUser.motto}}
        </p>
        <div>
          <p style="font-size:12px;color:#888888;line-height: 20px;text-align:left;margin-left:180px;">
            <span>
              备注：
            </span>
            <span>
               {{personal.remark}}
            </span>
          </p>
          <p style="font-size:12px;color:#888888;line-height: 20px;text-align:left;margin-left:180px;">
            <span>
              地区：
            </span>
            <span>
              上海闵行
            </span>
          </p>
        </div>
        <Button style="width:150px;margin-top:20px;" type='primary'>发送消息</Button>
      </div>
      </Col>
    </Row>
    <Modal v-model="modal6" title="添加好友" :loading="loading" @on-ok="asyncOK">
      <Input type="text" v-model='friendMobile' placeholder="请输入好友手机号">
      </Input>
    </Modal>
  </div>
</template>
<script>
  import Cookies from 'js-cookie'
    import {init } from '@/utils/sortPickerView'
  import {
    identicon
  } from 'sosnail'
  import Identicon from '../avatar/Identicon'
  export default {
    components: {
      Identicon
    },
    data() {
      return {
        modal6: false,
        friend: false,
        loading: false,
        friendMenuType: 'default',
        friendMobile: '',
        personal:null,
        friendmessages: [],
        userId: Cookies.get('userId')
      }
    },
    computed: {
      friendmessageCount() {
        return this.$store.getters.friendMessageCount
      },
      friendList(){

        return  init(this.$store.getters.friendList,'remark')
      }
    },
    methods: {
      asyncOK() {
        this.$socket.emit('addFriend', {
          mobile: this.friendMobile
        }, (err, result) => {
            if (err) {
            this.$Notice.error({
              title: '请求出错',
              desc: err.message
            });
          };
          this.modal6 = false;
        })
      },
      changMenu(type) {
        console.log(' friendmessageCount', this.$store.state.friendMessageCount)
        if (type == 'NEWFRIEND') {
           this.$socket.emit('readFriendMessages', (err, result) => {
              this.$store.commit('SET_UNREADMESSAGE',0);
              console.log('friendmessageCount',this.$store.state.friendMessageCount)
          });
          this.$socket.emit('getFriendMessages', (err, result) => {
            this.friendMenuType = type;
            this.friendmessages = result.datas;
            console.log('friendmessage', result);
          });
        } else {
          this.friendMenuType = type;
        }
      },
      getPersonal(person){
          this.personal=person;
          this.friendMenuType = 'PERSONAL'
      },
      resolve(messageId, prompt) {
        this.$socket.emit('resolveFriendMessage', {
          messageId: messageId,
          prompt: prompt
        }, (err, result) => {
          if (err) {
            this.$Notice.error({
              title: '请求出错',
              desc: err.message
            });
          };
          this.changMenu('NEWFRIEND');
        });
      }
    }
  };

</script>
<style>
  .scroll::-webkit-scrollbar {
    display: none;
  }

  .person:focus,
  .person:hover,
  .person:active {
    background: #ddd;
    outline: none;
  }

  .person-avastar {
    font-size: 100px;
    width: 100px;
    height: 100px;
    line-height: 100px;
  }

</style>
