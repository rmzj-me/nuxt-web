<template>
  <div class="activity">
    <!-- 缩略图 -->
    <div class="thumbnail">
      <picture class="v_img">
        <source srcset="https://tva3.sinaimg.cn/large/008pGw86ly1h3344cml6cj30io0aigqo.jpg" type="image/webp">
        <img src="https://tva3.sinaimg.cn/large/008pGw86ly1h3344cml6cj30io0aigqo.jpg" alt="活动封面">
      </picture>
    </div>

    <div class="info">
      <!-- 标题 -->
      <div class="title">
        <div class="i">活动</div>
        <div class="t">Web前端基础，超多动画案例，学得懂，项目多！</div>
      </div>

      <!-- up主 -->
      <div class="username">日漫之家课堂</div>

      <!-- 立刻参与 -->
      <div class="participate_now">立刻参与</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.activity {
  width: 1711px;
  height: 217px;
  margin: 0 auto;
  padding-top: 20px;
  background-color: #fff;
  border-bottom: 1px solid #f1f2f3;
}

.thumbnail {
  float: left;
  cursor: pointer;
  overflow: hidden;
  width: 278px;
  height: 156px;
  margin-right: 16px;
  border-radius: 6px;
  background-color: #f1f2fc;

  .v_img {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #f1f2f3;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: inherit;
    }
  }
}

.info {
  float: left;
  position: relative;
  width: 500px;
  height: 156px;

  .title {
    width: 100%;
    height: 25px;
    margin-bottom: 8px;

    &:hover {
      .t {
        color: #00aeec;
      }
    }

    .i {
      float: left;
      user-select: none;
      width: 36px;
      height: 18px;
      line-height: 16px;
      margin-top: 4px;
      margin-right: 6px;
      border: 1px solid #9499a0;
      border-radius: 4px;
      color: #9499a0;
      font-size: 12px;
      font-weight: 400;
      text-align: center;
    }

    .t {
      float: left;
      cursor: pointer;
      height: 25px;
      line-height: 25px;
      color: #18191c;
      font-size: 18px;
      font-weight: 600;
    }
  }

  .username {
    width: 100%;
    height: 18px;
    line-height: 18px;
    color: #61666d;
    font-size: 13px;
    font-weight: 400;
  }

  .participate_now {
    cursor: pointer;
    user-select: none;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 120px;
    height: 36px;
    line-height: 36px;
    border-radius: 6px;
    background-color: #00aeec;
    color: #fff;
    font-size: 15px;
    font-weight: 400;
    font-style: normal;
    text-align: center;
    font-family: 'Inter';
  }
}
</style>