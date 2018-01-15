<template>
  <div class="login-container" style="background-color: #141a48;margin: 0px;overflow: hidden;">
    <div id="canvascontainer" ref='can'></div>
    <Form ref="loginForm" autoComplete="on" class="card-box login-form">
      <Form-item prop="mobile">
        <Input type="text" v-model="loginForm.mobile" placeholder="请输入手机号" autoComplete="off">
        <Icon type="android-phone-portrait" size='35' slot="prepend"></Icon>
        </Input>
      </Form-item>
      <Form-item prop="password">
        <Input type="password" v-model="loginForm.password" placeholder="请输入密码" @keyup.enter.native="handleLogin">
        <Icon type="ios-locked-outline" size='35' slot="prepend"></Icon>
        </Input>
      </Form-item>
      <Form-item style="text-align:center">
        <Button type="primary" @click="handleLogin()" style="margin-right:30px">登录</Button>
        <Button type="ghost" @click="goPage('Register')" style="margin-right:50px">注册</Button>
        <!-- <Button type="text" @click="goPage('R')" style="margin-right:-60px;margin-top:-40px;">忘记密码?</Button> -->
      </Form-item>
    </Form>
  </div>
</template>

<script>
  import {
    isMobile
  } from "../utils/validate"
  export default {
    data() {
      const validateMobile = (rule, value, callback) => {
        if (!isMobile(value)) {
          callback(new Error("请输入正确的合法手机号"));
        } else {
          callback();
        }
      };
      const validatepassword = (rule, value, callback) => {
        if (value.length <= 8 && value.length >= 5) {
          callback();
        } else {
          callback(new Error("请输入正确的密码"));
        }
      };
      return {
        loginForm: {
          mobile: '',
          password: '',
        },
        loginRules: {
          mobile: [{
            required: true,
            trigger: "blur",
            validator: validateMobile
          }],
          password: [{
            required: true,
            trigger: "blur",
            validator: validatepassword
          }]
        },
      }
    },
    methods: {
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          if (!valid) {
            return false;
          };
          this.$store
            .dispatch("LoginByMobile", this.loginForm)
            .then(res => {
              // this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
              // const mobile = res.data.mobile
              // Cookies.set('loginMobile', this.loginForm.mobile)
              this.$Message.success("登录成功")

              this.loading = false;
              this.$router.push({ path: "/" });
            })
            .catch((err) => {
              // console.log('err', err)
              this.$Message.error('登录出了点问题！', err);
              this.loading = false;
            });
        })
      },
      goPage(name) {
        this.$router.push({
          path: `/${name}`
        });
      }
    }
  };

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
      background: transparent; // border: 1px solid #2d8cf0;
      // border: 1px solid #fdd000;
      -webkit-appearance: none; // border-radius: 3px;
      padding: 12px 5px 12px 15px; // color: #eeeeee;
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
