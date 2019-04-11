<template>
  <p>{{firstName}} {{lastName}} aka {{alias}}</p>
</template>

<script>
export default {
  data() {
    return {
      firstName: "Walter",
      lastName: "White",
      alias: "Heisenberg"
    };
  }
};
</script>

<style scoped>
</style>
