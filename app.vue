<template>
  <publicHeader></publicHeader>

  <NuxtPage />

  <publicFooter></publicFooter>
</template>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  padding-top: 64px;
  font-weight: 400;
  overflow-x: auto;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
    Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif !important;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

// :root {
// }
</style>