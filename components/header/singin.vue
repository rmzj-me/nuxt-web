<template>
  <div class="singin">
    <div class="button" @click="openSinginPage">登录</div>
  </div>
</template>

<script>
export default {
  methods: {
    /**
     * @description: 跳转 - 登录
     * @return {*}
     */
    openSinginPage() {
      this.$router.push({ path: "/login" });
    },
  }
}
</script>

<style lang="less" scoped>
.singin {
  float: left;
  width: 50px;
  height: 36px;
  margin: 2px 4px 2px 0;

  .button {
    cursor: pointer;
    width: 36px;
    height: 36px;
    line-height: 36px;
    margin: 0 7px;
    border-radius: 50%;
    background-color: #f6f6f6;
    color: #00aeec;
    font-size: 14px;
    font-weight: 400;
    font-style: normal;
    text-align: center;
    font-family: 'Inter';
  }
}
</style>