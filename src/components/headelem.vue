<!--头部-->
<template>
    <div id="headelem">
        <search placeholder="搜索你感兴趣的内容..." cancel-text='提问'></search>
        <tab active-color='#1c1c1c' bar-active-color='#1e1e1e' default-color='#898989' custom-bar-height='1px'>
            <tab-item :selected="tabData.url=='/follow'" v-for="(tabData,i) in tabDataList.list" :key="tabData.url">
                <router-link tag="div" :to="tabData.url">{{tabData.name}}</router-link>
            </tab-item>
        </tab>
    </div>
</template>

<script>
import { Tab, TabItem } from "vux";
export default {
  name: "headelem",
  components: {
    Tab,
    TabItem
  },
  data() {
    return {
      tabDataList: {
        list: [
          { url: "/follow", name: "关注" },
          { url: "/recommend", name: "推荐" },
          { url: "/hotList", name: "热榜" },
          { url: "/video", name: "视频" }
        ],
        selectVal: ""
      }
    };
  }
};
</script>

<style lang="less">
#headelem {
  position: fixed;
  top: 0;
  width: 100%;
  .weui-search-bar .weui-search-bar_focusing {
    .weui-search-bar__cancel-btn {
      font-size: 10rem;
    }
    .weui-search-bar__form {
      background-color: #fff;
      border-radius: 8px;
      .weui-search-bar__label {
        background: #ebebeb;
        .weui-icon-search {
          color: #595959;
        }
      }
    }
    .weui-search-bar__form:after {
      border: 1px solid #e8e8e8;
    }
  }
  .vux-tab-container {
    height: 38px;
    .vux-tab .vux-tab-item {
      height: 38px;
      line-height: 38px;
    }
    .vux-tab-ink-bar {
      bottom: 6px;
    }
  }
}
</style>
