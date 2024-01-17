<template>
  <div>
  gdfgdfkj
    <template v-for="item in navList" :key="item.link">
      <div>
        <router-link :to="item.link">{{ item.name }}</router-link>
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
          name: "插槽",
        },
        {
          link: "/slotProps",
          name: "传递属性",
        },
        {
          link: "/extend",
          name: "Vue.extend",
        },
        {
          link: "/echarts",
          name: "Echats"
        },
        {
          link: "/simple",
          name: 'Simple'
        }
      ],
    };
  },
};
</script>

<style scoped lang="less">
</style>
