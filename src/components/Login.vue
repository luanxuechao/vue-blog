<template>
  <div class="login-container" style="background-color: #141a48;margin: 0px;overflow: hidden;">
    <div id="canvascontainer" ref='can'></div>
    <Form ref="loginForm" autoComplete="on"  class="card-box login-form">
      <Form-item >
        <Input type="text"  placeholder="请输入邮箱" autoComplete="off">
        <Icon type="ios-email-outline" size='35'slot="prepend"></Icon>
        </Input>
      </Form-item>
      <!-- <Form-item prop="password"> -->
    <Form-item>
        <!-- <Input type="password" v-model="loginForm.password" placeholder="Password" @keyup.enter.native="handleLogin"> -->
        <Input class="code-input" type="text"  placeholder="请输入验证码" @keyup.enter.native="handleLogin">
        <Icon type="ios-locked-outline" size='35' style='width:27px;'slot="prepend"></Icon>
        <Button  type="text" slot="append"  @click="startCount">
          获取验证码
          <!-- <vue-count-down
          ref="countdown"
          @countdownstart="countdownStart"
          @countdownend="countdownEnd"
          @countdownprogress="onCountdownProgress"
          :auto-start="false"
          :leading-zero="false"
          >30</vue-count-down> -->
        </Button>
        </Input>
      </Form-item>
      <Form-item>
        <Button type="primary" @click="handleLogin('loginForm')" long>登录</Button>
      </Form-item>
    </Form>

  </div>
</template>

<script>
export default {};
</script>

<style>
.login-container a {
  color: #0078de;
}

#canvascontainer {
  position: absolute;
  top: 0px;
}

.wz-input-group-prepend {
  background-color: #141a48;
  border: 1px solid #2d8cf0;
  border-right: none;
  color: #2d8cf0;
}
</style>

<style rel="stylesheet/scss" lang="scss">
.tips {
  font-size: 14px;
  color: #fff;
  margin-bottom: 5px;
}

.login-container {
  height: 100vh;
  background-color: #2d3a4b;
  background-image: url('../assets/images/bg_login.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  .ivu-input-group-append {
    background-color: #fff;
    color: #4A90E2;
  }
  .code-input {
    input {
      border-right-width: 0px;
    }
  }
  .ivu-input {
    &:hover {
      border-color: #DFDFE6;
    }
    &:focus {
      // border-color: #DFDFE6;
      box-shadow: none;
    }
  }

  input:-webkit-autofill {
    // -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;
    // -webkit-text-fill-color: #fff !important;
    -webkit-box-shadow: 0 0 0px 1000px #ddd inset !important;
    -webkit-text-fill-color: #333 !important;
  }
  input {
    background: transparent;
    // border: 1px solid #2d8cf0;
    // border: 1px solid #fdd000;
    -webkit-appearance: none;
    // border-radius: 3px;
    padding: 12px 5px 12px 15px;
    // color: #eeeeee;
    color: #888;
    height: 47px;
  }
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: #889aa4;
  }

  .title {
    font-size: 26px;
    font-weight: 400;
    color: #eeeeee;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  }

  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    background-color: #fff;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }

  .forget-pwd {
    color: #fff;
  }

  .ivu-input-group-append {
    border: 1px solid #dddee1 !important
  }
}
</style>
