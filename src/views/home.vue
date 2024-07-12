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
        },
        {
          link: "/line",
          name: 'Line'
        },
        {
          link: '/xaxis',
          name: 'Xaxis'
        },
        {
          link: '/transfer',
          name: '排序'
        },
        {
          link: '/border',
          name: '边框'
        }
      ],
    };
  },
};
</script>

<style scoped lang="less">
</style>
