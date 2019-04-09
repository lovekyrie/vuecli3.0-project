<template>
  <div>
    <template v-for="item in navList">
      <div :key="item.link">
        <router-link :to="item.link">{{item.name}}</router-link>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          link: "/slot",
          name: "插槽"
        },
        {
          link: "/slotProps",
          name: "传递属性"
        }
      ]
    };
  }
};
</script>

<style scoped lang="less">
</style>
