<template>
  <div style="height:100%">
    <Row style="height:100%;" class="scroll">
      <Col span='6' style="height:100%; background:#ffffff;border-right:1px solid #eee;overflow-y: auto;">
      <div style="width:100%; border-bottom:1px solid #eee">
        <Button style="width:150px; margin:10px auto;display:block;" @click="modal6 = true">添加好友</Button>
      </div>
      <!-- 添加朋友-->
      <div>
        <div class='person' style='height:40px;width:100%;border-bottom:1px solid #eee;line-height:40px;'>
          <div class="demo-avatar-badge" style="margin-left:10px;">
            <Badge v-bind:dot="loading">
              <Avatar style="background-color: #EEA150;" icon="person-add" shape="square" />
            </Badge>
          </div>
          <span style="display:block;margin-top:-40px;margin-left: 50px;">新的朋友
          </span>
        </div>
      </div>
      <!-- 朋友列表-->
      <div>
        <div>
          <span style="margin-left:10px;background-color:#eee;display:block;">A</span>
          <div class='person' style='height:40px;width:100%;border-bottom:1px solid #eee;line-height:40px;'>
            <div class="demo-avatar" style="margin-left:10px;">
              <Avatar style="background-color: #877d68;margin-top:4px;" icon="pin" shape="square" />
            </div>
            <span style="display:block;margin-top: -50px;margin-left: 50px;">AAA
            </span>
          </div>
          <div class='person' style='height:40px;width:100%;border-bottom:1px solid #eee;line-height:40px;'>
            <div class="demo-avatar" style="margin-left:10px;">
              <Avatar style="background-color: #87d068;margin-top:4px;" icon="location" shape="square" />
            </div>
            <span style="display:block;margin-top: -50px;margin-left: 50px;">A123456
            </span>
          </div>
        </div>
        <div>
          <span style="margin-left:10px;background-color:#eee;display:block;">A</span>
          <div class='person' style='height:40px;width:100%;border-bottom:1px solid #eee;line-height:40px;'>
            <div class="demo-avatar" style="margin-left:10px;">
              <Avatar style="background-color: #87d07d;margin-top:4px;" icon="locked" shape="square" />
            </div>
            <span style="display:block;margin-top: -50px;margin-left: 50px;">AAA
            </span>
          </div>
          <div class='person' style='height:40px;width:100%;border-bottom:1px solid #eee;line-height:40px;'>
            <div class="demo-avatar" style="margin-left:10px;">
              <Avatar style="background-color: #9f4f68;margin-top:4px;" icon="spoon" shape="square" />
            </div>
            <span style="display:block;margin-top: -50px;margin-left: 50px;">A123456
            </span>
          </div>
        </div>
        <div>
          <span style="margin-left:10px;background-color:#eee;display:block;">A</span>
          <div class='person' style='height:40px;width:100%;border-bottom:1px solid #eee;line-height:40px;'>
            <div class="demo-avatar" style="margin-left:10px;">
              <Avatar style="background-color: #87d09f;margin-top:4px;" icon="pound" shape="square" />
            </div>
            <span style="display:block;margin-top: -50px;margin-left: 50px;">AAA
            </span>
          </div>
          <div class='person' style='height:40px;width:100%;border-bottom:1px solid #eee;line-height:40px;'>
            <div class="demo-avatar" style="margin-left:10px;">
              <Avatar style="background-color: #875168;margin-top:4px;" icon="toggle" shape="square" />
            </div>
            <span style="display:block;margin-top: -50px;margin-left: 50px;">A123456
            </span>
          </div>
        </div>
        <div>
          <span style="margin-left:10px;background-color:#eee;display:block;">A</span>
          <div class='person' style='height:40px;width:100%;border-bottom:1px solid #eee;line-height:40px;'>
            <div class="demo-avatar" style="margin-left:10px;">
              <Avatar style="background-color: #87d068;margin-top:4px;" icon="person" shape="square" />
            </div>
            <span style="display:block;margin-top: -50px;margin-left: 50px;">AAA
            </span>
          </div>
          <div class='person' style='height:40px;width:100%;border-bottom:1px solid #eee;line-height:40px;'>
            <div class="demo-avatar" style="margin-left:10px;">
              <Avatar style="background-color: #87d068;margin-top:4px;" icon="person" shape="square" />
            </div>
            <span style="display:block;margin-top: -50px;margin-left: 50px;">A123456
            </span>
          </div>
        </div>

      </div>
      </Col>
      <Col span='18' style="height:100%; background:#fff;display:flex;justify-content:center;">
      <!-- 默认界面-->
      <div v-if='friend' style="height:100%;width:100%;display:flex;justify-content:center;align-items:center;">
        <Icon type="chatboxes" size='100' style="color:#E1E1E1"></Icon>
      </div>
      <!-- 新的朋友界面 -->
      <div>
        <div style="height:40px;width:100%;border-bottom:1px solid #eee">
          <span style="line-height: 40px; margin: 20px auto; font-size:18px;margin-left:10px;font-weight:bold">好友验证消息</span>
          <span style="margin-left:360px;">
            <Icon type="ios-trash-outline" size='30' style="color:#278DE9"></Icon>
          </span>
        </div>
        <div style="overflow-y: auto;width:100%;height:370px">
          <div style="text-align: center;margin-top:20px;">
            <span style="color:#aaa;">01-11 10:20</span>
            <div style="width:470px; height:100px;margin:0 auto;border:1px solid #eee;border-radius:5px">
              <div class="demo-avatar" style="float:left;margin:30px 0px 30px 20px;">
                <Avatar style="background-color: #9f4f68;" icon="spoon" shape="circle" size='large' />
              </div>
              <div style="float:left;margin:30px 0px 30px 0px;">
                <Button type="text" style="color:#278DE9">哇哈哈</Button>
                <span>已添加你为好友</span>
              </div>
              <div style="float:right;margin:30px 20px 30px 0px;">
                <!-- <Button type="success">同意</Button>
              <Button type="error">拒绝</Button> -->
                <span style="color:#C5C5C5">已添加</span>
              </div>
            </div>
          </div>
          <div style="text-align: center;margin-top:20px;">
            <span style="color:#aaa">01-11 10:20</span>
            <div style="width:470px; height:100px;margin:0 auto;border:1px solid #eee;border-radius:5px">
              <div class="demo-avatar" style="float:left;margin:30px 0px 30px 20px;">
                <Avatar style="background-color: #9f4f68;" icon="spoon" shape="circle" size='large' />
              </div>
              <div style="float:left;margin:30px 0px 30px 0px;">
                <Button type="text" style="color:#278DE9">哇哈哈</Button>
                <span>已添加你为好友</span>
              </div>
              <div style="float:right;margin:30px 20px 30px 0px;">
                <Button type="success">同意</Button>
                <Button type="error">拒绝</Button>
              </div>
            </div>
          </div>
           <div style="text-align: center;margin-top:20px;">
            <span style="color:#aaa">01-11 10:20</span>
            <div style="width:470px; height:100px;margin:0 auto;border:1px solid #eee;border-radius:5px">
              <div class="demo-avatar" style="float:left;margin:30px 0px 30px 20px;">
                <Avatar style="background-color: #9f4f68;" icon="spoon" shape="circle" size='large' />
              </div>
              <div style="float:left;margin:30px 0px 30px 0px;">
                <Button type="text" style="color:#278DE9">哇哈哈</Button>
                <span>已添加你为好友</span>
              </div>
              <div style="float:right;margin:30px 20px 30px 0px;">
                <span style="color:#C5C5C5">等待验证</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 详细信息-->
      <div v-if='friend' style="width:90%;height:53px;border-bottom:1px solid #eee;text-align:center;">
        <p style="line-height: 53px;font-size:14px">详细信息</p>
        <div style="margin-top:20px;">
          <Avatar shape="square" icon="person" src="https://i.loli.net/2017/08/21/599a521472424.jpg" class='person-avastar' />
        </div>
        <h1 style="line-height: 53px;">
          AAA裕成景观
          <Icon type="male" color='#6DA6C6' size='14'></Icon>
          <Icon type="female" color='#CF6D69' size='14'></Icon>
        </h1>
        <p style="font-size:14px;color:#888888; line-height: 40px;">
          这是一段座右铭
        </p>
        <div>
          <p style="font-size:12px;color:#888888;line-height: 20px;text-align:left;margin-left:180px;">
            <span>
              备注：
            </span>
            <span>
              王八蛋adsda
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
  export default {
    data() {
      return {
        modal6: false,
        loading: true,
        friend: false,
        friendMobile: ''
      }
    },
    methods: {
      asyncOK() {
        this.$socket.emit('addFriend', {
          mobile: this.friendMobile
        }, (err, result) => {
          this.modal6 = false;
        })
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
