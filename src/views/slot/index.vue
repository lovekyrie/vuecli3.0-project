<template>
  <base-layout>
    <template v-slot:header>
      <h1>Here might be a page title</h1>
    </template>

    <template v-slot:default>
      <p>A paragraph for the main content.</p>
      <p>And another one.</p>
    </template>

    <template v-slot:footer>
      <p>Here's some content info</p>
    </template>
  </base-layout>
</template>

<script>
/* eslint-disable */
import BaseLayout from "./BaseLayout";
export default {
  data() {
    return {};
  },
  mounted() {
    console.log(BaseLayout);
  },
  components: {
    BaseLayout
  }
};
</script>

<style scoped>
</style>
