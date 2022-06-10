<template>
  <div class="contribution">
    <div class="button">
      <div class="icon"></div>
      <div class="text">投稿</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.contribution {
  float: left;
  position: relative;
  width: 106px;
  height: 34px;
  padding: 3px 0 3px 16px;

  .button {
    cursor: pointer;
    position: relative;
    width: 90px;
    height: 34px;
    border-radius: 8px;
    background-color: #fb7299;
    text-align: center;

    .icon {
      display: inline-block;
      vertical-align: top;
      width: 18px;
      height: 18px;
      margin-top: 8px;
      margin-right: 4px;
      background-size: cover;
      background-repeat: no-repeat;
      background-image: url(../../assets/icon/header/icon_contribution.png);
    }

    .text {
      display: inline-block;
      vertical-align: top;
      height: 34px;
      line-height: 34px;
      color: #fff;
      font-size: 14px;
      font-weight: 400;
    }
  }
}
</style>