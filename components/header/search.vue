<template>
  <div class="layout_search_box" :class="{ hover: isShowPopup }">
    <!-- 输入框 B -->
    <div class="input_box">
      <!-- 输入框 -->
      <div class="input">
        <input type="text" v-model="keyWords" placeholder="宝贝，这就是高考后的世界" @focus="onFocus" @blur="onBlur" @keyup.enter="onKeyupEnter">
        <div class="empty" @click="clearKeyWords" v-if="isEmpty"></div>
      </div>

      <!-- 按钮 -->
      <div class="button" @click="onKeyupEnter"></div>
    </div>

    <!-- 弹窗 P -->
    <div class="popup_box" v-if="isShowPopup && !isEmpty">
      <div class="search_records_header">
        <div class="title">搜索历史</div>
        <div class="eliminate">清空</div>
      </div>

      <!-- 搜索记录 -->
      <ul class="search_records">
        <li v-for="(item, index) in searchRecordsList" :key="`search_records_${index}`" @click="clickKeyWords(item)">
          <span>{{ item }}</span>
          <div class="delete"></div>
        </li>
      </ul>

      <!-- 热搜 -->
      <div class="hot_search">热搜</div>

      <!-- 热搜列表 -->
      <ul class="hot_search_list">
        <li v-for="(item, index) in hotSearchList" :key="`hot_search_list_${index}`" @click="clickKeyWords(item.title)">
          <div class="i">{{ index + 1 }}</div>
          <div class="t">{{ item.title }}</div>
          <div :class="`g ${item.icon}`"></div>
        </li>
      </ul>
    </div>

    <!-- 关键词弹窗 K -->
    <ul class="popup_keywords_box" v-if="isShowPopup && isEmpty">
      <li @click="clickKeyWords('爱你')">爱你</li>
      <li><em>爱</em>你</li>
      <li>爱你</li>
      <li>爱你</li>
      <li>爱你</li>
      <li>爱你</li>
      <li>爱你</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEmpty: false,
      isShowPopup: false,

      keyWords: "",

      searchRecordsList: [
        "日漫",
        "前端",
        "asmr",
      ],

      hotSearchList: [
        {
          title: "高考成绩不是最终答案",
          icon: "newe",
        },
        {
          title: "老E绯绯官宣结婚",
          icon: "newe",
        },
        {
          title: "高考英语",
          icon: "hot",
        },
        {
          title: "2022全国乙卷现状",
          icon: "hot",
        },
        {
          title: "王者荣耀将推出国际服",
          icon: "hot",
        },
        {
          title: "穿山甲第一个走出考场",
          icon: "newe",
        },
        {
          title: "UP主押中高考作文题",
          icon: "",
        },
        {
          title: "李玉刚洛天依 我是你的瓷儿",
          icon: "",
        },
        {
          title: "哔哩哔哩向前冲",
          icon: "",
        },
        {
          title: "高考采访名场面",
          icon: "",
        },
      ],
    }
  },

  watch: {
    keyWords: function (text) {
      if (text == "") {
        this.isEmpty = false
      } else {
        this.isEmpty = true
      }
    },
  },

  mounted() { },

  methods: {
    /**
     * @description: 输入框监听 - 获取焦点
     * @return {*}
     */
    onFocus() {
      this.isShowPopup = true
    },

    /**
     * @description: 输入框监听 - 失去焦点
     * @return {*}
     */
    onBlur() {
      var _this = this

      setTimeout(() => {
        _this.isShowPopup = false
      }, 100);
    },

    /**
     * @description: 输入框监听 - 回车键
     * @return {*}
     */
    onKeyupEnter() {
      var text = this.keyWords

      window.open(`/search/all?keyword=${text}`);
    },

    /**
     * @description: 搜索框 - 清空关键词
     * @return {*}
     */
    clearKeyWords() {
      this.keyWords = ""
    },

    /**
     * @description: 搜索框 - 点击关键词
     * @return {*}
     */
    clickKeyWords(text) {
      this.keyWords = text

      this.$router.push({ path: "/search/all", query: { keyword: text } });
    },
  },

  filters: {},
}
</script>

<style lang="less" scoped>
.layout_search_box {
  float: left;
  position: relative;
  width: 500px;
  height: 40px;
  margin-top: 12px;
  margin-left: 102px;

  &.hover {
    .input_box {
      border-bottom: none;
      border-radius: 8px 8px 0 0;
      background-color: #fff;

      .input {
        input {
          border-radius: 6px;
          background-color: #e3e5e7;
        }
      }
    }
  }
}

.input_box {
  position: relative;
  width: 500px;
  height: 40px;
  opacity: 0.9;
  padding: 0 48px 0 4px;
  background-color: #f1f2f3;
  border: 1px solid #e3e5e7;
  border-radius: 8px;

  .input {
    float: left;
    position: relative;
    width: 446px;
    height: 32px;
    margin: 4px 0;

    input {
      width: 100%;
      height: 32px;
      border: none;
      outline: none;
      padding: 0 8px;
      background-color: transparent;
      color: #61666d;
      font-size: 14px;
      font-weight: 400;
      font-style: normal;
    }

    .empty {
      cursor: pointer;
      position: absolute;
      top: 8px;
      right: 10px;
      width: 16px;
      height: 16px;
      background-size: cover;
      background-repeat: no-repeat;
      background-image: url(../../assets/icon/header/icon_search_empty_button.png);
    }
  }

  .button {
    cursor: pointer;
    position: absolute;
    top: 3px;
    right: 7px;
    width: 32px;
    height: 32px;
    background-size: 16px;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(../../assets/icon/header/icon_search_button.png);
  }
}

.popup_box {
  position: absolute;
  top: 40px;
  left: 0;
  width: 500px;
  height: auto;
  overflow: hidden;
  padding: 13px 0 16px;
  background-color: #fff;
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: #e3e5e7;
  border-radius: 0 0 8px 8px;

  .search_records_header {
    width: 100%;
    height: 24px;
    padding: 0 16px;
    margin-bottom: 12px;

    .title {
      float: left;
      height: 24px;
      line-height: 24px;
      color: #000000;
      font-size: 16px;
      font-weight: 400;
      font-style: normal;
      font-family: 'Inter';
    }

    .eliminate {
      float: right;
      cursor: pointer;
      height: 24px;
      line-height: 24px;
      color: #9499a0;
      font-size: 12px;
      font-weight: 400;
      font-style: normal;
      font-family: 'Inter';
    }
  }

  .search_records {
    width: 468px;
    height: 40px;
    padding: 0 16px;
    margin-bottom: 14px;

    li {
      float: left;
      cursor: pointer;
      position: relative;
      width: auto;
      height: 30px;
      padding: 0 10px;
      margin-right: 10px;
      border-radius: 4px;
      background-color: #f6f7f8;

      &:hover {
        span {
          color: #00aeec;
        }

        .delete {
          display: block;
        }
      }

      span {
        display: block;
        width: 100%;
        height: 100%;
        line-height: 30px;
        color: #18191c;
        font-size: 12px;
        font-weight: 400;
        font-style: normal;
        font-family: 'Inter';
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .delete {
        display: none;
        position: absolute;
        top: -6px;
        right: -6px;
        width: 16px;
        height: 16px;
        background-size: 14px;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url(../../assets/icon/header/icon_search_records_delete.png);
      }
    }
  }

  .hot_search {
    width: 100%;
    height: 24px;
    padding: 0 16px;
    line-height: 24px;
    color: #18191c;
    font-size: 16px;
    font-weight: 400;
    font-style: normal;
    font-family: 'Inter';
  }

  .hot_search_list {
    width: 100%;
    height: 190px;
    overflow: hidden;

    li {
      float: left;
      cursor: pointer;
      width: 50%;
      height: 38px;
      padding: 0 16px;

      &:hover {
        background-color: #e3e5e7;
      }

      .i {
        display: inline-block;
        vertical-align: top;
        margin-right: 7px;
        width: 15px;
        height: 38px;
        line-height: 38px;
        color: #18191c;
        font-size: 14px;
        font-weight: 400;
        font-style: normal;
        text-align: center;
        font-family: 'Inter';
      }

      .t {
        display: inline-block;
        vertical-align: top;
        height: 38px;
        line-height: 38px;
        margin-right: 6px;
        color: #18191c;
        font-size: 14px;
        font-weight: 400;
        font-style: normal;
        font-family: 'Inter';
      }

      .g {
        display: inline-block;
        vertical-align: top;
        width: 14px;
        height: 14px;
        margin: 12px 0;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        &.newe {
          background-image: url(../../assets/icon/header/icon_search_hot_newe.png);
        }

        &.hot {
          background-image: url(../../assets/icon/header/icon_search_hot_hot.png);
        }
      }
    }
  }
}

.popup_keywords_box {
  position: absolute;
  top: 40px;
  left: 0;
  width: 500px;
  height: auto;
  overflow: hidden;
  background-color: #fff;
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: #e3e5e7;
  border-radius: 0 0 8px 8px;

  li {
    cursor: pointer;
    width: 100%;
    height: 32px;
    line-height: 32px;
    padding: 0 16px;
    color: #18191c;
    font-size: 14px;
    font-weight: 400;
    font-style: normal;
    font-family: 'Inter';

    &:hover {
      background-color: #e3e5e7;
    }

    em {
      color: #f25d8e;
      font-style: normal;
    }
  }
}
</style>