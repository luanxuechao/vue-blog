<template>
  <div class="chat-container" style="background-color: #141a48;margin: 0px;overflow: hidden;">
    <Row>
      <Col span="14" offset="5"  class='chat-content' style='background-color: #fff;overflow:hidden;'>
       <Menu mode="horizontal" active-name="1"  @on-select="changeMenu">
            <div style="width:100%;display:flex;justify-content: center;">
                <MenuItem name="1"> <span style="padding:8px"><Icon type="chatbubble" size='30' ></Icon></span></MenuItem>
                <MenuItem name="2"><span style="padding:8px"><Icon type="person" size='30'></Icon></span></MenuItem>
                <MenuItem name="3"><span style="padding:8px"><Icon type="grid" size='30'></Icon></span></MenuItem>
            </div>
             <div style="margin-top: -55px;float: right; margin-right:20px;height:32px;">
                <Identicon shape="circle" icon="person" :_text="user.nickName"
                />
            </div>
        </Menu>
        <div style='height: 420px;'>
          <router-view />
          </div>
      </Col>
    </Row>
  </div>
</template>
<script>
import Cookies from 'js-cookie'
import Identicon from './avatar/Identicon'
export default {

  components:{
    Identicon
  },
  data(){
    return{
      user:{
          nickName:Cookies.get('nickName')
      },
    }
  },
  methods: {
    goDemo(routerName) {
      this.$router.push({ path: `/${routerName}` });
    },
    changeMenu(name){
        switch(name){
            case '1':
               this.$router.push({ path: '/ChatMenu/ChatList' });
                break;
            case '2':
               this.$router.push({ path: '/ChatMenu/FriendsMenu' });
                break;
            case '3':
               this.$router.push({ path: '/DemoList' });
                break;
        }
    }
  }
};
</script>


