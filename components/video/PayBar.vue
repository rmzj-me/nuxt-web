<template>
  <div class="pay_bar">成为大会员抢先看</div>
</template>

<style lang="less" scoped>
.pay_bar {
  cursor: pointer;
  position: relative;
  width: 320px;
  height: 45px;
  line-height: 45px;
  border-radius: 2px;
  margin-bottom: 20px;
  background-color: #00a1d6;
  border-radius: 2px;
  text-align: center;
  color: #fff;
  font-size: 16px;

  &:hover {
    background-color: #00b5e5;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 60px;
    height: 60px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(../../assets/img/video/func_icon_vip.png);
  }
}
</style>