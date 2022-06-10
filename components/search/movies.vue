<template>
  <div class="movies">
    <!-- 缩略图 -->
    <div class="thumbnail">
      <NuxtLink class="v_img" :to="`/video/av${itemInfo.media_id}`" target="_blank">
        <picture>
          <source :srcset="itemInfo.cover" type="image/webp">
          <img :src="itemInfo.cover" :alt="itemInfo.title ">
        </picture>
      </NuxtLink>

      <!-- 独家 -->
      <div class="sole">独家</div>

      <!-- 遮罩 -->
      <div class="mask"></div>

      <!-- 关注 -->
      <div class="follow_icon"></div>

      <!-- 播放 -->
      <div class="play_icon"></div>
    </div>

    <div class="main">
      <div class="info">
        <!-- 标题 -->
        <div class="title">
          <div class="i">{{ itemInfo.season_type_name }}</div>
          <NuxtLink class="t" :to="`/video/av${itemInfo.id}`" target="_blank">{{ itemInfo.title }}</NuxtLink>
        </div>

        <div class="text">
          <span>{{ itemInfo.styles }}</span> ·
          <span>{{ itemInfo.pubtime }}</span> ·
          <span>{{ itemInfo.index_show }}</span>
        </div>

        <div class="text">{{ itemInfo.cv }}</div>

        <div class="desc">简介: {{ itemInfo.desc }}</div>
      </div>

      <div class="footer">
        <!-- 评分 -->
        <div class="score">
          <span class="score_text">{{ itemInfo.user_count }}人评分</span>
          <span class="score_value">{{ itemInfo.media_score }}<span>分</span></span>
        </div>

        <div class="btns">
          <!-- 立即观看 -->
          <div class="watch_now">立即观看</div>

          <!-- 集合 -->
          <div class="media">
            <template v-for="(epItem, epIndex) in itemInfo.ep_size" :key="epIndex">
              <div class="media_btn" v-if="epIndex + 1 < showEpNumber">{{ epIndex + 1 }}</div>
              <div class="media_btn" v-else-if="epIndex + 1 == itemInfo.ep_size">{{ itemInfo.ep_size }}</div>
              <div class="media_btn events" v-else-if="epIndex + 2 == itemInfo.ep_size">...</div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemInfo: {
      type: Array,
    },

    showEpNumber: {
      type: Number,
      default: 4,
    },
  },
}
</script>

<style lang="less" scoped>
.movies {
  width: 100%;
  height: 241px;
  margin-bottom: 40px;
  padding: 0 15.5px 0 8px;
}

.thumbnail {
  float: left;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  width: 181px;
  height: 241px;
  border-radius: 6px;
  margin-right: 25px;
  background-color: #f1f2fc;

  &:hover {
    .mask,
    .follow_icon,
    .play_icon {
      opacity: 1;
    }
  }

  .v_img {
    position: relative;
    display: inline-block;
    line-height: 1;
    width: 100%;
    height: 100%;
    vertical-align: middle;

    picture,
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: inherit;
    }
  }

  .sole {
    user-select: none;
    position: absolute;
    top: 12px;
    right: 0;
    width: auto;
    height: 22px;
    line-height: 22px;
    padding: 0 4px 0 10px;
    background-color: #00c0ff;
    border-radius: 11px 0 0 11px;
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
  }

  .mask {
    opacity: 0;
    position: absolute;
    pointer-events: none;
    transition: opacity 0.3s;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .follow_icon {
    opacity: 0;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    width: 44px;
    height: 44px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(../../assets/icon/search/icon_follow_icon_1.png);
  }

  .play_icon {
    opacity: 0;
    cursor: pointer;
    position: absolute;
    right: 10px;
    bottom: 10px;
    width: 44px;
    height: 44px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(../../assets/icon/search/icon_play_icon_1.png);
  }
}

.main {
  float: left;
  width: calc(100% - 181px - 25px);
  height: 100%;
}

.info {
  width: 100%;
  height: 177px;

  .title {
    width: 100%;
    height: 22px;
    margin-bottom: 8px;

    .i {
      float: left;
      width: 48px;
      height: 18px;
      line-height: 18px;
      margin-top: 2px;
      margin-right: 6px;
      border: 1px solid #00aeec;
      color: #00aeec;
      font-size: 12px;
      font-weight: 400;
      border-radius: 6px;
      text-align: center;
    }

    .t {
      float: left;
      height: 22px;
      line-height: 22px;
      color: #18191c;
      font-size: 18px;
      font-weight: 600;

      &:hover {
        transition: all 0.2s linear;
        color: #00aeec;
      }
    }
  }

  .text {
    width: 100%;
    height: 18px;
    line-height: 18px;
    margin-bottom: 4px;
    color: #61666d;
    font-size: 13px;
    font-weight: 400;
  }

  .desc {
    width: 100%;
    height: 56px;
    line-height: 18px;
    color: #9499a0;
    font-size: 13px;
    font-weight: 400;
  }
}

.footer {
  width: 100%;
  height: 64px;

  .score {
    overflow: hidden;
    width: 100%;
    height: 20px;
    line-height: 20px;
    margin-bottom: 8px;

    .score_text {
      float: left;
      display: block;
      height: 20px;
      line-height: 20px;
      padding-right: 6px;
      color: #61666d;
      font-size: 13px;
      font-weight: 400;
    }

    .score_value {
      float: left;
      display: block;
      height: 20px;
      line-height: 20px;
      color: #ffa058;
      font-size: 20px;
      font-weight: 600;

      span {
        color: #ffa058;
        font-size: 13px;
        font-weight: 400;
        vertical-align: 1px;
      }
    }
  }

  .btns {
    width: 100%;
    height: 36px;

    .watch_now {
      float: left;
      cursor: pointer;
      user-select: none;
      width: 120px;
      height: 36px;
      line-height: 36px;
      margin-right: 8px;
      border-radius: 6px;
      background-color: #00aeec;
      color: #fff;
      font-size: 14px;
      font-weight: 400;
      text-align: center;

      &:hover {
        background-color: #40c5f1;
      }
    }

    .media {
      float: left;
      width: calc(100% - 120px - 8px);
      height: 100%;

      .media_btn {
        float: left;
        cursor: pointer;
        user-select: none;
        width: auto;
        min-width: 36px;
        height: 36px;
        line-height: 34px;
        padding: 0 4px;
        margin-right: 8px;
        border: 1px solid #e3e5e7;
        border-radius: 6px;
        color: #18191c;
        font-size: 15px;
        font-weight: 400;
        text-align: center;

        &:last-child {
          margin-right: 0;
        }

        &.events {
          pointer-events: none;
        }

        &:hover {
          background-color: #e3e5e7;
        }
      }
    }
  }
}
</style>