<template>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <!-- 不带name的默认为default -->
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
