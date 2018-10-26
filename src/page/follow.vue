<!--关注页-->
<template>
    <div id="follow">
        <router-link tag="div" to="/follow" class="divWrap title-style">
            <flexbox :gutter="0">
                <flexbox-item :span="2/3" :order="1">
                    <div class="flex-demo">发现更多感兴趣的人</div>
                </flexbox-item>
                <flexbox-item :span="1/3" :order="2">
                    <div class="flex-demo flex-right">
                        <span class="head-portrait"></span>
                        <span class="head-portrait"></span>
                        <!-- <span class="fa fa-home" style="font-size:100px;color:000"></span> -->

                        <x-icon type="ios-arrow-right" size="18"></x-icon>
                    </div>
                </flexbox-item>
            </flexbox>
        </router-link>
    </div>
</template>

<script>
export default {
  name: "follow"
};
</script>

<style lang="less">
.divWrap {
  padding: 5px 10px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  .flex-demo {
    display: inline-block;
  }
  .flex-right {
    float: right;
  }
}
</style>
