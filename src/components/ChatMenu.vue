<template>
  <div class="chat-container" style="background-color: #141a48;margin: 0px;overflow: hidden;">
    <Row>
      <Col span="14" offset="5"  class='chat-content' style='background-color: #fff;overflow:hidden;'>
       <Menu mode="horizontal" active-name="1" >
            <div style="display:flex;justify-content: center;">
                <MenuItem name="1"> <span style="padding:8px"><Icon type="chatbubble" size='30' ></Icon></span></MenuItem>
                <MenuItem name="2"><span style="padding:8px"><Icon type="person" size='30'></Icon></span></MenuItem>
                <MenuItem name="3"><span style="padding:8px"><Icon type="grid" size='30'></Icon></span></MenuItem>
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
export default {
  methods: {
    goDemo(routerName) {
      this.$router.push({ path: `/${routerName}` });
    }
  }
};
</script>


<style rel="stylesheet/scss" lang="scss">
.chat-container {
  height: 100vh;
  background-color: #2d3a4b;
  background-image: url("../assets/images/bg_login.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.chat-content {
  position: fixed;
  top: 50%;
  width: 700px;
  height: 470px;
  background-color: #fff;
  // padding: 35px 35px 15px 35px;
  transform: translateY(-50%);
}
</style>
