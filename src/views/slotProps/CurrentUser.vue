<template>
  <span>
    <slot v-bind:user="user">{{user.lastName}}</slot>
  </span>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: "Kyrie",
        lastName: "Irving"
      }
    };
  }
};
</script>

<style>
</style>
