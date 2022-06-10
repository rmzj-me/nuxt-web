<template>
  <div class="layout_login_box">
    <!-- 头部 -->
    <div class="login_header">
      <div class="bg"></div>
    </div>

    <!-- 标题 -->
    <div class="login_title">
      <span>登录</span>
    </div>

    <!-- 主体 -->
    <div class="main">
      <div class="main_left">
        <div class="character"></div>

        <!-- 二维码 -->
        <div class="qrcod">
          <!-- 二维码 -->
          <div class="code"></div>

          <!-- 点击刷新 -->
          <div class="refresh_button">
            <div class="icon"></div>
            <div class="text">点击刷新</div>
          </div>
        </div>
      </div>

      <div class="main_right">
        <!-- 导航 -->
        <div class="right_nav">
          <div class="item active">密码登录</div>
          <div class="item">短信登录</div>
        </div>

        <!-- 账号密码 -->
        <div class="name_and_pass">
          <div class="username">
            <input type="text" placeholder="你的手机号/邮箱" maxlength="11">
          </div>

          <div class="password">
            <input type="text" placeholder="密码" maxlength="50">
          </div>
        </div>

        <!-- 记住密码 -->
        <div class="remember_password">
          <div class="record_password" :class="{ active: isRememberPassword }" @click="switchingRecordPasswordState">
            <div class="icon"></div>
            <div class="text">记住我</div>
          </div>

          <div class="tip">不是自己的电脑上不要勾选此项</div>

          <div class="btns">
            <div class="btn">忘记密码?</div>
            <div class="btn">无法验证?</div>
          </div>
        </div>

        <div class="operation_button">
          <div class="button login">登录</div>
          <div class="button reg">注册</div>
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <div class="footer">登录即代表你同意<em>用户协议</em>和<em>隐私政策</em></div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "登录 - 日漫之家 - 高质量在线动漫网站",
    }
  },

  data() {
    return {
      isRememberPassword: true,
    }
  },

  methods: {
    /**
     * @description: 操作 - 切换记录密码状态
     * @return {*}
     */
    switchingRecordPasswordState() {
      this.isRememberPassword = !this.isRememberPassword
    },
  },
}
</script>

<style lang="less" scoped>
.layout_login_box {
  width: 100%;
  height: 600px;
  overflow: hidden;
}

.login_header {
  position: relative;
  width: 100%;
  height: 86px;
  margin-bottom: 20px;
  background-color: #00a0d8;

  .bg {
    position: absolute;
    top: 0px;
    left: 50%;
    width: 980px;
    height: 106px;
    margin-left: -490px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(../../assets/img/login/bg_header.png);
  }
}

.login_title {
  position: relative;
  width: 980px;
  height: 59px;
  margin: 0 auto;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #ddd;
  }

  span {
    position: relative;
    z-index: 2;
    display: block;
    width: 116px;
    height: 100%;
    line-height: 59px;
    margin: 0 auto;
    background-color: #fff;
    color: #000;
    font-size: 38px;
    font-weight: 400;
    text-align: center;
  }
}

.main {
  width: 980px;
  height: 367px;
  margin: 0 auto 24px;
}

.main_left {
  float: left;
  position: relative;
  width: 490px;
  height: 100%;
  background-size: 480px;
  background-repeat: no-repeat;
  background-position: bottom center;
  background-image: url(../../assets/img/login/bg_left_2233.png);

  &::after {
    content: '';
    position: absolute;
    top: 33px;
    right: 0;
    width: 1px;
    height: 301px;
    background-color: #ddd;
  }

  .character {
    position: absolute;
    top: 16px;
    left: 163px;
    width: 70px;
    height: 70px;
    background-size: 70px;
    background-repeat: no-repeat;
    background-image: url(../../assets/img/login/bg_character.png);
    pointer-events: none;
  }

  .qrcod {
    position: relative;
    width: 141px;
    height: 141px;
    margin: 70px auto 0;

    .code {
      opacity: 0.2;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-repeat: no-repeat;
      background-image: url(../../assets/img/login/bg_qrcode.png);
    }

    .refresh_button {
      cursor: pointer;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 61px;
      height: 71px;
      border-radius: 3px;
      background-color: #fff;
      transform: translate(-50%, -50%);
      box-shadow: 0 3px 10px #00000080;

      .icon {
        width: 34px;
        height: 34px;
        margin: 10px auto 5px;
        background-size: 34px;
        background-repeat: no-repeat;
        background-image: url(../../assets/img/login/icon_refresh.png);
      }

      .text {
        width: 100%;
        height: 15px;
        line-height: 15px;
        color: #0594c7;
        font-size: 12px;
        font-weight: 500;
        text-align: center;
      }
    }
  }
}

.main_right {
  float: right;
  width: 490px;
  height: 100%;
  padding: 50px 38px;

  .right_nav {
    width: 100%;
    height: 19px;
    margin-bottom: 12px;

    .item {
      float: left;
      cursor: pointer;
      width: 58px;
      height: 19px;
      line-height: 19px;
      margin-right: 20px;
      color: #555;
      font-size: 14px;
      font-weight: 400;

      &.active {
        color: #02a7de;
      }
    }
  }

  .name_and_pass {
    width: 100%;
    height: 138px;
    overflow: hidden;

    .username {
      width: 100%;
      height: 40px;
      margin-bottom: 37px;

      input {
        display: block;
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        padding: 0 11px;
        border: 1px solid #ddd;
        border-radius: 4px;
        color: #aaa;
        font-size: 14px;
        font-weight: 400;
      }
    }

    .password {
      width: 100%;
      height: 40px;

      input {
        display: block;
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        padding: 0 11px;
        border: 1px solid #ddd;
        border-radius: 4px;
        color: #aaa;
        font-size: 14px;
        font-weight: 400;
      }
    }
  }

  .remember_password {
    width: 100%;
    height: 16px;
    overflow: hidden;
    margin-bottom: 10px;

    .record_password {
      float: left;
      cursor: pointer;
      height: 100%;
      margin-right: 10px;

      &.active {
        .icon {
          background-image: url(../../assets/img/login/icon_option_active.png);
        }
      }

      .icon {
        float: left;
        width: 16px;
        height: 16px;
        margin-right: 8px;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url(../../assets/img/login/icon_option.png);
      }

      .text {
        float: left;
        height: 100%;
        line-height: 16px;
        color: #000;
        font-size: 12px;
        font-weight: 400;
      }
    }

    .tip {
      float: left;
      height: 100%;
      line-height: 16px;
      color: #bbb;
      font-size: 12px;
      font-weight: 400;
    }

    .btns {
      float: right;
      height: 100%;

      .btn {
        float: left;
        cursor: pointer;
        height: 100%;
        line-height: 16px;
        margin-right: 4px;
        color: #00a1d6;
        font-size: 12px;
        font-weight: 400;

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }

  .operation_button {
    width: 100%;
    height: 38px;
    overflow: hidden;

    .button {
      float: left;
      cursor: pointer;
      width: 186px;
      height: 38px;
      line-height: 36px;
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 2px;
      color: #555;
      font-size: 14px;
      font-weight: 400;
      text-align: center;

      &.login {
        float: left;
        background-color: #00a7de;
        border: 1px solid #0381aa;
        color: #fff;

        &:hover {
          background-color: #00bee7;
        }
      }

      &.reg {
        float: right;

        &:hover {
          background-color: #f7f7f7;
        }
      }
    }
  }
}

.footer {
  width: 100%;
  height: 16px;
  line-height: 16px;
  color: #99a2aa;
  font-size: 12px;
  font-weight: 400;
  text-align: center;

  em {
    cursor: pointer;
    color: #00a1d6;
    font-style: normal;
  }
}
</style>