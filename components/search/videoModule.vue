<template>
  <div class="video_module">
    <!-- 缩略图 -->
    <div class="thumbnail">
      <NuxtLink class="cover" :to="`/video/av${videoInfo.id}`" target="_blank">
        <picture>
          <source :srcset="videoInfo.pic" type="image/webp">
          <img :src="videoInfo.pic" :alt="videoInfo.title ">
        </picture>
      </NuxtLink>

      <!-- 待看 -->
      <div class="to_be_seen"></div>

      <!-- 统计 -->
      <div class="census">
        <!-- 播放量 -->
        <div class="playback_volume">
          <div class="icon"></div>
          <span>{{ videoInfo.play }}</span>
        </div>

        <!-- 点赞量 -->
        <div class="likes">
          <div class="icon"></div>
          <span>{{ videoInfo.like }}</span>
        </div>

        <div class="duration">{{ videoInfo.duration }}</div>
      </div>
    </div>

    <NuxtLink class="title" :to="`/video/av${videoInfo.id}`" target="_blank">{{ videoInfo.title }}</NuxtLink>

    <NuxtLink class="userinfo" :to="`/space/${videoInfo.mid}`" target="_blank">
      <div class="up_icon"></div>
      <div class="up_name">{{ videoInfo.author }}</div>
      <div class="add_time"> · {{ formatTimeAgo(videoInfo.pubdate) }}</div>
    </NuxtLink>
  </div>
</template>

<script>
import { timeAgo } from "@/utils/formatTime"

export default {
  props: ["videoInfo"],

  methods: {
    /**
     * @description: 格式化 - 时间格式化
     * @param {*} time
     * @return {*}
     */
    formatTimeAgo(time) {
      return timeAgo(time)
    },
  },
}
</script>

<style lang="less" scoped>
.video_module {
  float: left;
  width: 288px;
  height: 227px;
  padding: 0 8px 1px;
  margin-bottom: 40px;
  background-color: #fff;
}

.thumbnail {
  cursor: pointer;
  position: relative;
  width: 272px;
  height: 152px;
  overflow: hidden;
  border-radius: 6px;
  margin-bottom: 10px;
  background-color: #f1f2fc;

  &:hover {
    .to_be_seen {
      opacity: 1;
    }

    .census {
      opacity: 0;
    }
  }

  .cover {
    overflow: hidden;
    position: absolute;
    object-fit: contain;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border-radius: 6px;

    picture,
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: inherit;
    }
  }

  .to_be_seen {
    opacity: 0;
    position: absolute;
    transition: opacity 0.3s;
    z-index: 2;
    top: 8px;
    right: 8px;
    width: 28px;
    height: 28px;
    border-radius: 6px;
    background-size: 22px;
    background-position: center;
    background-repeat: no-repeat;
    background-color: rgba(33, 33, 33, 0.8);
    background-image: url(../../assets/icon/search/icon_to_be_seen_1.png);
  }

  .census {
    opacity: 1;
    position: absolute;
    transition: opacity 0.3s;
    z-index: 3;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 38px;
    overflow: hidden;
    padding: 14px 8px 6px;
    border-radius: 0 0 6px 6px;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.5) 100%
    );

    .playback_volume {
      float: left;
      height: 18px;
      line-height: 18px;
      margin-right: 12px;

      .icon {
        float: left;
        width: 18px;
        height: 18px;
        margin-right: 2px;
        background-size: 15px;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url(../../assets/icon/search/icon_playback_volume_1.png);
      }

      span {
        float: left;
        display: block;
        height: 18px;
        line-height: 18px;
        color: #fff;
        font-size: 13px;
        font-weight: 400;
        font-style: normal;
        font-family: 'Inter';
      }
    }

    .likes {
      float: left;
      height: 18px;
      line-height: 18px;
      margin-right: 12px;

      .icon {
        float: left;
        width: 18px;
        height: 18px;
        margin-right: 2px;
        background-size: 14px;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url(../../assets/icon/search/icon_likes_1.png);
      }

      span {
        float: left;
        display: block;
        height: 18px;
        line-height: 18px;
        color: #fff;
        font-size: 13px;
        font-weight: 400;
        font-style: normal;
        font-family: 'Inter';
      }
    }

    .duration {
      float: right;
      height: 18px;
      line-height: 18px;
      color: #fff;
      font-size: 13px;
      font-weight: 400;
    }
  }
}

.title {
  display: block;
  cursor: pointer;
  position: relative;
  width: 272px;
  height: 40px;
  line-height: 20px;
  margin-bottom: 4px;
  color: #18191c;
  font-size: 15px;
  font-weight: 500;
  font-style: normal;
  font-family: 'Inter';
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;

  &:hover {
    color: #00aeec;
  }

  em {
    color: #f25d8e;
    font-style: normal;
  }
}

.userinfo {
  display: block;
  width: 100%;
  height: 20px;
  line-height: 20px;

  &:hover {
    .up_icon {
      background-image: url(../../assets/icon/search/icon_up_icon_2.png);
    }

    .up_name,
    .add_time {
      color: #00aeec;
    }
  }

  .up_icon {
    float: left;
    cursor: pointer;
    width: 16px;
    height: 16px;
    margin-top: 2px;
    margin-right: 2px;
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(../../assets/icon/search/icon_up_icon_1.png);
  }

  .up_name {
    float: left;
    cursor: pointer;
    height: 20px;
    line-height: 20px;
    margin-right: 4px;
    color: #9499a0;
    font-size: 13px;
    font-weight: 400;
  }

  .add_time {
    float: left;
    cursor: pointer;
    height: 20px;
    line-height: 20px;
    color: #9499a0;
    font-size: 13px;
    font-weight: 400;
  }
}
</style>