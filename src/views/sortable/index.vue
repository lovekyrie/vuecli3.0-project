<template>
  <ul id="items">
    <li>item1</li>
    <li>item2</li>
    <li>item3</li>
  </ul>
</template>

<script>
import Sortable from 'sortablejs'
export default {
  data() {

  },
  mounted() {
    var el = document.getElementById('items')
    var sortable = Sortable.create(el)
    console.log('fsjdkfj', sortable)
  }
}
</script>
