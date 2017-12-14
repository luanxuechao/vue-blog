<template>
  <div class="chat-container" style="background-color: #141a48;margin: 0px;overflow: hidden;">

    <Row>
      <Col span="14" offset="5"  class='chat-content' style='background-color: #fff;'>
       <Menu mode="horizontal" active-name="1">
            <div class="layout-assistant" style='width: 300px; margin: 0 auto;height: inherit;'>
                <MenuItem name="1"> <Icon type="chatbubble" size='35' style="display:block"></Icon></MenuItem>
                <MenuItem name="2">Option 2</MenuItem>
                <MenuItem name="3">Option 3</MenuItem>
            </div>
            <div>
            </div>
        </Menu>
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
  min-width: 470px;
  min-height: 470px;
  background-color: #fff;
  // padding: 35px 35px 15px 35px;
  transform: translateY(-50%);
}
</style>
