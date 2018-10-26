<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";
body {
  background: #ebebeb;
  font-family: Helvetica Neue, Helvetica, Roboto, Segoe UI, Arial, sans-serif;
}
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
// }
</style>
