<template>
  <div>父亲</div>
  <child></child>
</template>

<script>
import Child from './child.vue'
export default {
  components: {
    Child
  },
  data() {
    return {}
  },
  created() {
    console.log('父组件created测试了呀')
  },
  mounted() {
    console.log('父组件mounted测试了呀')
  }
}
</script>
