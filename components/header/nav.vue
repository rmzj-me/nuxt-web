<template>
  <nav class="header_nav">
    <div class="item">
      <div class="text">番剧</div>
    </div>

    <div class="item">
      <div class="text">游戏中心</div>
    </div>

    <div class="item">
      <div class="text">直播</div>
    </div>

    <div class="item">
      <div class="text">活动中心</div>
    </div>

    <div class="item">
      <div class="text">会员购</div>
    </div>

    <div class="item">
      <div class="text">漫画</div>
    </div>

    <div class="item">
      <div class="text">赛事</div>
    </div>

    <div class="item singing_party">
      <div class="text">歌会</div>
      <div class="img"></div>
    </div>

    <div class="item download_client">
      <div class="icon"></div>
      <div class="text">下载客户端</div>
    </div>
  </nav>
</template>

<style lang="less" scoped>
.header_nav {
  float: left;
  width: 571px;
  height: 100%;

  .item {
    float: left;
    cursor: pointer;
    height: 64px;
    line-height: 64px;
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }

    .text {
      height: 64px;
      line-height: 64px;
      color: #18191c;
      font-size: 14px;
      font-weight: 400;
      font-style: normal;
      font-family: 'Inter';

      &:hover {
        animation: jump 0.3s;
      }

      @keyframes jump {
        0% {
          transform: translateY(0);
        }

        50% {
          transform: translateY(-3px);
        }

        to {
          transform: translateY(0);
        }
      }
    }
  }

  .singing_party {
    width: 54px;
    overflow: hidden;
    position: relative;

    &:hover {
      .text {
        top: -64px;
      }

      .img {
        top: 0;
      }
    }

    .text {
      position: absolute;
      transition: all 0.4s;
      top: 0;
      left: 0;
      width: 100%;
      height: 64px;
      text-align: center;
    }

    .img {
      position: absolute;
      transition: all 0.4s;
      top: 64px;
      left: 0;
      width: 100%;
      height: 64px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-image: url(../../assets/img/header/evening_party.png);
    }
  }

  .download_client {
    width: 91px;
    text-align: center;

    .icon {
      vertical-align: top;
      display: inline-block;
      width: 16px;
      height: 16px;
      margin-top: 24px;
      margin-right: 5px;
      background-size: cover;
      background-repeat: no-repeat;
      background-image: url(../../assets/icon/header/icon_download_client.png);
    }

    .text {
      display: inline-block;
      animation: none !important;
    }
  }
}
</style>