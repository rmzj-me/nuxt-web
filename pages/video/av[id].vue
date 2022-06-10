<template>
  <div class="v_wrap">

    <Head>
      <Title>{{ videoDetails.h1Title }}</Title>
      <Meta name="referrer" content="never" />
    </Head>

    <div class="v_left">
      <!-- 基础信息 -->
      <div class="video_info">
        <!-- 标题 -->
        <h1 class="video_title">{{ videoDetails.h1Title }}</h1>

        <!-- 统计 -->
        <div class="video_data">
          <span title="总播放数443998" class="view">44.4万播放&nbsp;·&nbsp;</span>
          <span title="历史累计弹幕数300" class="dm">总弹幕数300</span>
          <span>2021-01-31 16:38:58</span>
        </div>
      </div>

      <!-- 播放器 -->
      <div class="player_wrap">
        <videoPlayer />
      </div>
    </div>

    <div class="v_right">
      <videoPayBar />

      <div class="ep_list_wrapper">
        <!-- 头部 -->
        <div class="list_title">
          <h4 title="正片">正片</h4>
          <span class="ep_list_order"></span>
          <span class="ep_list_progress">1/{{ videoDetails.epList.length }}</span>
        </div>

        <!-- 列表 -->
        <div class="list_wrapper">
          <ul class="clearfix" :style="`height: ${videoDetails.epList.length * 30}px;`">
            <li class="ep_item" v-for="(item, index) in videoDetails.epList" :key="index">
              <span :title="item.title" class="ep_title">{{ item.title }}</span>
              <div class="ep_tip pre" v-if="item.epStatus == 3">预告</div>
              <div class="ep_tip vip" v-if="item.epStatus == 2">会员</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router"
import { getVideoDetails } from "@/api/video/web"

export default {
  async setup() {
    const router = useRouter()

    const resourcesId = router.currentRoute.value.params.id

    const { data } = await getVideoDetails({
      resourcesId: resourcesId,
    })

    return {
      videoDetails: data
    }
  },

  head() {
    return {
      title: "日漫之家 - 高质量在线动漫网站",
      meta: [
        { name: "keywords", content: "日漫之家,rmzj,rmzj.me,免费番剧,在线番剧,蓝光BT,动漫网,sendfun" },
        { name: "description", content: "日漫之家拥有各种BD高清1080p无修动漫,观看完全免费、无须注册、高速播放、更新及时的专业在线日漫之家,我们致力为所有动漫迷们提供最好看的动漫。" },
      ]
    }
  },
}
</script>

<style lang="less" scoped>
.v_wrap {
  width: 1562px;
  height: auto;
  margin: 0 auto;
  padding: 0 68px 68px;

  &::after {
    content: '';
    display: block;
    width: 100%;
    overflow: hidden;
  }
}

.v_left {
  float: left;
  width: 1076px;

  &::after {
    content: '';
    display: block;
    width: 100%;
    overflow: hidden;
  }
}

.v_right {
  float: right;
  width: 320px;
  padding-top: 96px;

  &::after {
    content: '';
    display: block;
    width: 100%;
    overflow: hidden;
  }
}

.video_info {
  width: 100%;
  height: 96px;
  padding-top: 27px;
  padding-bottom: 19px;

  .video_title {
    width: 100%;
    height: 26px;
    line-height: 26px;
    color: #212121;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .video_data {
    width: 100%;
    height: 16px;
    line-height: 16px;
    color: #999;
    font-size: 12px;

    span {
      display: inline-block;
      height: 16px;
    }

    .dm {
      margin-right: 12px;
    }
  }
}

.player_wrap {
  position: relative;
  width: 100%;
  height: 651px;
}

.ep_list_wrapper {
  position: relative;
  width: 100%;
  border-radius: 2px;
  margin-bottom: 20px;
  background-color: #f4f4f4;

  .list_title {
    width: 100%;
    height: 42px;
    padding: 0 16px;

    h4 {
      float: left;
      height: 42px;
      line-height: 42px;
      color: #212121;
      font-size: 16px;
      font-weight: 400;
      max-width: 220px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .ep_list_order {
      float: right;
      cursor: pointer;
      width: 16px;
      height: 13px;
      margin-top: 14px;
      margin-left: 10px;
      margin-right: 4px;
      background-size: contain;
      background-repeat: no-repeat;
      background-image: url(../../assets/img/video/ep_list_order.png);
    }

    .ep_list_progress {
      float: right;
      display: block;
      height: 42px;
      line-height: 42px;
      color: #999;
      font-size: 12px;
    }
  }

  .list_wrapper {
    display: block;
    overflow: auto;
    position: relative;
    width: 100%;
    max-height: 175px;
    padding: 0 0 6px 6px;

    ul {
      position: relative;
      width: 100%;

      .ep_item {
        display: block;
        cursor: pointer;
        position: relative;
        width: 100%;
        height: 30px;
        border-radius: 2px;
        padding: 0 0 0 10px;
        transition: background-color 0.3s ease;
        color: #222;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        &.cursor {
          background-color: #fff;
          color: #00a1d6;
        }

        &.visited {
        }

        .ep_title {
          line-height: 30px;
          font-size: 12px;
        }

        .ep_tip {
          float: right;
          width: 32px;
          height: 18px;
          line-height: 18px;
          border-radius: 2px;
          margin: 6px 12px 6px 0;
          color: #fff;
          font-size: 12px;
          font-weight: 400;
          text-align: center;

          &.pre {
            background-color: #00a1d6;
          }

          &.vip {
            background-color: #fb7299;
          }
        }
      }
    }
  }
}
</style>