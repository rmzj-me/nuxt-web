<template>
  <header class="layout_header_box">
    <div class="header_left">
      <!-- logo -->
      <headerLogo />

      <!-- 导航 -->
      <headerNav />
    </div>

    <!-- 搜索框 -->
    <headerSearch />

    <div class="header_right">
      <!-- 登录 -->
      <headerSingin />

      <!-- 大会员 -->
      <headerVip />

      <!-- 消息 -->
      <headerNews />

      <!-- 动态 -->
      <headerDynamic />

      <!-- 收藏 -->
      <headerCollection />

      <!-- 历史 -->
      <headerHistory />

      <!-- 创作中心 -->
      <headerCreativeCenter />

      <!-- 投稿 -->
      <headerContribution />
    </div>
  </header>
</template>

<style lang="less" scoped>
.layout_header_box {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 64px;
  padding: 0 24px;
  background-color: #fff;
  box-shadow: 0 2px 4px #00000014;
}

.header_left {
  float: left;
  width: 651px;
  height: 100%;
}

.header_right {
  float: right;
  height: 40px;
  margin-top: 12px;
}
</style>