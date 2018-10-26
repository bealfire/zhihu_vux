<!--热榜页-->
<template>
    <div id="tabbarHello">
        <tabbar>
            <tabbar-item @on-item-click="clickTabbarItem(i)" v-for="(list,i) in dataList.list" :key="list.name">
                <span slot="icon" :class="dataList.activeIndex&&dataList.activeIndex==i?'faActive':'faUnActive'">
                    <!-- <span slot="icon" :class="{'faActive':activeIndex==i}"> -->
                    <i :class="['fa',list.iconName ]"></i>
                </span>
                <span slot="label">{{list.name}}</span>
            </tabbar-item>
        </tabbar>
    </div>
</template>

<script>
export default {
  name: "tabbarHello",
  data() {
    return {
      dataList: {
        list: [
          { iconName: "fa-home", name: "首页" },
          { iconName: "fa-heart", name: "想法" },
          { iconName: "fa-mortar-board", name: "大学" },
          { iconName: "fa-bell", name: "通知" },
          { iconName: "fa-user", name: "我的" }
        ],
        activeIndex: 0
      }
    };
  },
  methods: {
    clickTabbarItem(val) {
      this.dataList.activeIndex = val;
    }
  }
};
</script>

<style lang="less">
.fa {
  font-size: 23px;
//   color: rgb(133, 144, 166);
}
#tabbarHello {
  .faActive {
    i {
      color: #0084ff;
    }
  }
  .faUnActive {
    i {
      color: rgb(133, 144, 166);
    }
  }
}
</style>
