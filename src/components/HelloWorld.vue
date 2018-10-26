<template>
  <div class="hello">
    <headelem></headelem>
    <router-view class="view-main" />
    <tabbarHello></tabbarHello>
  </div>
</template>

<script>
import headelem from "./headelem";
import tabbarHello from "./tabbarHello";
export default {
  name: "HelloWorld",
  components: {
    headelem,
    tabbarHello
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.view-main {
  margin-top: 90px;
}
</style>
