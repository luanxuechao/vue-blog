<template>
  <div class="chat-container" style="background-color: #141a48;margin: 0px;overflow: hidden;">
    <Row>
      <Col span="14" offset="5" class='chat-content' style='background-color: #fff;overflow:hidden;'>
      <Menu mode="horizontal" active-name="1" @on-select="changeMenu">
        <div style="width:100%;display:flex;justify-content: center;">
          <MenuItem name="1">
          <span style="padding:8px">
            <Icon type="chatbubble" size='30'></Icon>
          </span>
          </MenuItem>
          <MenuItem name="2">
          <span style="padding:8px">
            <Icon type="person" size='30'></Icon>
          </span>
          </MenuItem>
          <MenuItem name="3">
          <span style="padding:8px">
            <Icon type="grid" size='30'></Icon>
          </span>
          </MenuItem>
        </div>
        <div @click="goPersonal" style="margin-top: -55px;float: right; margin-right:20px;height:32px;">
          <Identicon shape="circle" icon="person" :_text="user.nickName" />
        </div>
      </Menu>
      <div style='height: 420px;'>
        <router-view />
      </div>
      </Col>
    </Row>
    <Modal v-model="personModal" title="完善个人信息" @on-ok="asyncOK" style="width:330px !important">
      <Form :model="user" :label-width="60">
        <FormItem label="手机号">
          <Input v-model="user.mobile" placeholder="Enter something..." disabled></Input>
        </FormItem>
        <FormItem label="昵称">
          <Input v-model="user.nickName" placeholder="Enter something..."></Input>
        </FormItem>
        <Form-item label="性别">
          <RadioGroup v-model="user.sex" size='large'>
            <Radio label="MALE" style="padding-left:50px;">
              <Icon type="male" color='#6DA6C6'></Icon>
              <span>男</span>
            </Radio>
            <Radio label="FEMALE" style="padding-left:50px;">
              <Icon type="female" color='#CF6D69'></Icon>
              <span>女</span>
            </Radio>
          </RadioGroup>
        </Form-item>
        <FormItem label="生日">
          <Row>
            <Col span="12">
            <DatePicker type="date" placeholder="Select date" v-model="user.birthday"></DatePicker>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="个性签名">
          <Input v-model="user.motto" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>
<script>
  import Cookies from 'js-cookie'
  import Identicon from './avatar/Identicon'
  import {
    getPersonalInfo,
    updatePersonalInfo
  } from '../resources/user'
  export default {

    components: {
      Identicon
    },
    data() {
      return {
        personModal: false,
        user: {
          nickName: Cookies.get('nickName')
        },
      }
    },
    methods: {
      goDemo(routerName) {
        this.$router.push({
          path: `/${routerName}`
        });
      },
      asyncOK() {
        const _this = this;
        this.user.birthday = this.user.birthday.toString();
        updatePersonalInfo(Cookies.get('userId'), this.user).then((res) => {
          _this.$Message.success("修改成功");
          _this.personModal = false;
        }).catch((err) => {
          this.$Message.error("修改失败");
        });
      },
      goPersonal() {
        const _this = this;
        getPersonalInfo(Cookies.get('userId')).then((res) => {
          res.data.birthday = new Date(res.data.birthday);
          _this.user = res.data
          _this.personModal = true;
        }).catch((err) => {

        });
      },
      changeMenu(name) {
        switch (name) {
          case '1':
            this.$router.push({
              path: '/ChatMenu/ChatList'
            });
            break;
          case '2':
            this.$router.push({
              path: '/ChatMenu/FriendsMenu'
            });
            break;
          case '3':
            this.$router.push({
              path: '/DemoList'
            });
            break;
        }
      }
    }
  };

</script>
