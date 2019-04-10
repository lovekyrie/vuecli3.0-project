<template>
  <current-user>
    <template v-slot:default="slotProps">{{slotProps.user.firstName}}</template>
  </current-user>
</template>

<script>
import CurrentUser from "./CurrentUser";
export default {
  components: {
    CurrentUser
  }
};
</script>

<style>
</style>
