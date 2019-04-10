
<template>
  <div id="mount-point"></div>
</template>

<script>
/* eslint-disable */
import Profile from "./main.js";
export default {
  mounted() {
    new Profile().$mount("#mount-point");
  }
};
</script>

<style>
</style>
