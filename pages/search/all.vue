<template>
  <div class="layout_search_box">

    <Head>
      <Title>{{ pagingInfo.keyword }}_搜索_日漫之家_rmzj.me</Title>
    </Head>

    <!-- 搜索框 -->
    <div class="search_box">
      <div class="search_main">
        <div class="icon"></div>

        <input type="text" v-model="keyword" placeholder="输入关键字搜索">

        <!-- 搜索 按钮 -->
        <div class="button" @click="searchContent">搜索</div>
      </div>
    </div>

    <!-- 导航 -->
    <div class="search_nav">
      <div class="item active">
        <span class="t">综合</span>
      </div>

      <div class="item">
        <span class="t">视频</span>
        <i class="i">{{ topTlistCount.video }}</i>
      </div>

      <div class="item">
        <span class="t">番剧</span>
        <i class="i">{{ topTlistCount.media_bangumi }}</i>
      </div>

      <div class="item">
        <span class="t">影视</span>
        <i class="i">{{ topTlistCount.movie }}</i>
      </div>

      <div class="item">
        <span class="t">直播</span>
        <i class="i">{{ topTlistCount.live }}</i>
      </div>

      <div class="item">
        <span class="t">专栏</span>
        <i class="i">{{ topTlistCount.article }}</i>
      </div>

      <div class="item">
        <span class="t">话题</span>
        <i class="i">{{ topTlistCount.topic }}</i>
      </div>

      <div class="item">
        <span class="t">用户</span>
        <i class="i">{{ topTlistCount.upuser }}</i>
      </div>
    </div>

    <!-- 导航线 -->
    <div class="search_nav_x">
      <div class="p"></div>
    </div>

    <section class="search_section">
      <!-- 筛选条件 -->
      <div class="screen_box">
        <ul class="screen_list">
          <li class="active">综合排序</li>
          <li>最多点击</li>
          <li>最新发布</li>
          <li>最多弹幕</li>
          <li>最多收藏</li>
        </ul>

        <!-- 更多筛选 -->
        <div class="more_filters">
          <span> 更多筛选 </span>
          <i></i>
        </div>
      </div>

      <searchActivity />

      <ul class="video_loading" v-if="isShowLoading">
        <li v-for="(item, index) in 42" :key="index">
          <div class="thumbnail"></div>
          <div class="t1"></div>
          <div class="t2"></div>
          <div class="u3"></div>
        </li>
      </ul>

      <!-- 综合列表模板 -->
      <template v-for="(t, i) in resultList" :key="i" v-else>
        <!-- 番剧 模板 -->
        <div class="bangumi_pgc_list first_child" v-if="t.result_type == 'media_bangumi' && pagingInfo.page == 1">
          <div class="row">
            <searchMovies v-for="(item, index) in t.data" :key="index" :itemInfo="item" />
          </div>

          <!-- 查看全部 -->
          <div class="show_more_text">
            <div class="show_media_more_min">查看全部 {{ topTlistCount.media_bangumi }} 部相关番剧作品</div>
          </div>
        </div>

        <!-- 影视 模板 -->
        <div class="bangumi_pgc_list" v-if="t.result_type == 'media_ft' && pagingInfo.page == 1">
          <div class="row media_item">
            <searchMovies v-for="(item, index) in t.data" :key="index" :itemInfo="item" />
          </div>

          <!-- 查看全部 -->
          <div class="show_more_text">
            <div class="show_media_more_min">查看全部 {{ topTlistCount.media_bangumi }} 部相关影视作品</div>
          </div>
        </div>

        <!-- 视频模板 -->
        <div class="video_module_list" v-if="t.result_type == 'video'">
          <searchVideoModule v-for="(item, index) in t.data" :key="index" :videoInfo="item" />
        </div>
      </template>
    </section>
  </div>
</template>

<script>
import { useRouter } from "vue-router"
import { getSearchAll } from "@/api/search/all"

export default {
  head() {
    return {
      title: "搜索_日漫之家_rmzj",
      meta: [
        { name: "keywords", content: "日漫之家,rmzj,rmzj.me,免费番剧,在线番剧,蓝光BT,动漫网,sendfun" },
        { name: "description", content: "日漫之家拥有各种BD高清1080p无修动漫,观看完全免费、无须注册、高速播放、更新及时的专业在线日漫之家,我们致力为所有动漫迷们提供最好看的动漫。" },
      ]
    }
  },

  data() {
    return {
      isShowLoading: false,

      keyword: "",

      pagingInfo: {
        page: 1,
        page_size: 42,
        keyword: ""
      },

      topTlist: {},
      resultList: [],
    }
  },

  watch: {
    $route: function () {
      this.initSearchData()
    },
  },

  mounted() {
    this.initSearchData()
  },

  methods: {
    /**
     * @description: 初始化 - 搜索信息
     * @return {*}
     */
    initSearchData() {
      var query = this.$route.query

      this.keyword = query.keyword

      this.pagingInfo.page = 1
      this.pagingInfo.keyword = query.keyword

      this.getSearchAllListData()
    },

    /**
     * @description: 操作 - 搜索
     * @return {*}
     */
    searchContent() {
      const keyword = this.keyword

      this.pagingInfo.keyword = keyword

      this.$router.push(`/search/all?keyword=${keyword}`);
    },

    /**
     * @description: 请求 - 综合搜索
     * @return {*}
     */
    async getSearchAllListData() {
      this.isShowLoading = true

      const { data } = await getSearchAll(this.pagingInfo)

      this.resultList = data.result
      this.topTlist = data.top_tlist

      this.isShowLoading = false
    },
  },

  computed: {
    /**
     * @description: 格式化 - 资源数量
     * @return {*}
     */
    topTlistCount() {
      var topTlist = this.topTlist

      for (const key in topTlist) {
        if (topTlist[key] >= 99) {
          topTlist[key] = "99+"
        }
      }

      return topTlist
    },
  },
}
</script>

<style lang="less" scoped>
.layout_search_box {
  width: 100%;
  height: auto;
  overflow: hidden;
  padding-top: 30px;
}

.search_box {
  width: 100%;
  height: 54px;
  margin-bottom: 20px;

  .search_main {
    position: relative;
    width: 640px;
    height: 54px;
    margin: 0 auto;
    background-color: #f6f7f8;
    border: 1px solid #f1f2f3;
    border-radius: 6px;

    .icon {
      position: absolute;
      top: 9px;
      left: 5px;
      width: 45px;
      height: 36px;
      background-size: 16px;
      background-position: center;
      background-repeat: no-repeat;
      background-image: url(../../assets/icon/search/icon_search_1.png);
    }

    input {
      outline: none;
      position: absolute;
      top: 9px;
      left: 50px;
      width: 468px;
      height: 36px;
      border: none;
      background-color: transparent;
      color: #18191c;
      font-size: 18px;
      font-weight: 400;
    }

    .button {
      cursor: pointer;
      user-select: none;
      position: absolute;
      top: 7px;
      right: 7px;
      width: 100px;
      height: 40px;
      line-height: 38px;
      background-color: #00aeec;
      border: 1px solid #00aeec;
      border-radius: 6px;
      color: #fff;
      font-size: 15px;
      font-weight: 400;
      text-align: center;
    }
  }
}

.search_nav {
  width: 1710px;
  height: 40px;
  margin: 0 auto;
  user-select: none;

  .item {
    float: left;
    height: 100%;
    line-height: 40px;
    padding: 0px 24px;

    &:nth-child(1) {
      padding-left: 0;
    }

    &.active {
      .t {
        color: #00aeec;
      }
    }

    .t {
      display: inline-block;
      height: 40px;
      line-height: 40px;
      padding-right: 4px;
      color: #61666d;
      font-size: 16px;
      font-weight: 500;
    }

    .i {
      display: inline-block;
      width: auto;
      height: 17px;
      line-height: 17px;
      padding: 0px 6px;
      border-radius: 8px;
      background-color: #f1f2f3;
      color: #61666d;
      font-size: 12px;
      font-weight: 400;
      font-style: normal;
    }
  }
}

.search_nav_x {
  position: relative;
  width: 1711px;
  height: 4px;
  margin: 0 auto 3px;

  .p {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 32px;
    height: 3px;
    background-color: #00aef4;
  }
}

.search_section {
  width: 100%;
  height: auto;
  overflow: hidden;
  padding-top: 30px;
  border-top: 1px solid #f1f2f3;
}

.screen_box {
  user-select: none;
  width: 1711px;
  height: 34px;
  margin: 0 auto;

  .screen_list {
    float: left;
    height: 100%;

    li {
      float: left;
      cursor: pointer;
      width: 86px;
      height: 34px;
      line-height: 34px;
      margin-right: 10px;
      border-radius: 6px;
      background: #fff;
      color: #61666d;
      font-size: 14px;
      font-weight: 400;
      text-align: center;

      &.active {
        background-color: #dff6fd;
        color: #00aef4;
      }
    }
  }

  .more_filters {
    float: right;
    cursor: pointer;
    width: auto;
    height: 34px;
    line-height: 32px;
    padding: 0 10px;
    background-color: #fff;
    border: 1px solid #e3e5e7;
    border-radius: 6px;
    text-align: center;

    span {
      display: inline-block;
      padding-right: 3px;
      color: #000;
      font-size: 15px;
      font-weight: 400;
    }

    i {
      display: inline-block;
      width: 13px;
      height: 13px;
      background-size: cover;
      background-repeat: no-repeat;
      background-image: url(../../assets/icon/search/icon_right_1.png);
    }
  }
}

.video_loading {
  width: 1728px;
  height: auto;
  margin: 0 auto;
  overflow: hidden;

  li {
    float: left;
    width: 288px;
    height: 227px;
    padding: 0 8px 1px;
    margin-bottom: 40px;
    background-color: #fff;

    .thumbnail {
      cursor: pointer;
      position: relative;
      width: 272px;
      height: 152px;
      overflow: hidden;
      border-radius: 6px;
      margin-bottom: 10px;
      background-color: #f1f2f3;
    }

    .t1 {
      width: 256px;
      height: 18px;
      margin-bottom: 4px;
      border-radius: 6px;
      background-color: #f1f2f3;
    }

    .t2 {
      width: 196px;
      height: 18px;
      margin-bottom: 8px;
      border-radius: 6px;
      background-color: #f1f2f3;
    }

    .u3 {
      width: 136px;
      height: 16px;
      border-radius: 6px;
      background-color: #f1f2f3;
    }
  }
}

.bangumi_pgc_list {
  width: 1727px;
  height: auto;
  margin: 0 auto;

  &.first_child {
    padding-top: 20px;
  }

  &::after {
    content: '';
    display: block;
    width: 100%;
    overflow: hidden;
  }

  .row {
    width: 100%;
    height: auto;
    overflow: hidden;

    &.media_item {
      padding-top: 40px;
    }

    :deep(.movies) {
      float: left;
      width: calc(100% / 3);
    }
  }

  .show_more_text {
    user-select: none;
    position: relative;
    z-index: 2;
    width: 100%;
    height: 1px;
    background-color: #f1f2f3;

    .show_media_more_min {
      cursor: pointer;
      position: absolute;
      top: 50%;
      left: 50%;
      height: 32px;
      line-height: 32px;
      padding: 0 15px;
      border-radius: 6px;
      background-color: #fff;
      transform: translate(-50%, -50%);
      transition-property: color, background-color, border;
      transition-duration: 0.2s;
      color: #00aeec;
      font-size: 14px;
      text-align: center;

      &:hover {
        background-color: #dff6fd;
        color: #00aeec;
      }
    }
  }
}

.video_module_list {
  width: 1728px;
  height: auto;
  margin: 0 auto;
  overflow: hidden;
  padding-top: 40px;
}
</style>