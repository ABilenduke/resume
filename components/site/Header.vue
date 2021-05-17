<template>
  <header class="site-header">
    <h1 class="site-header__title">Andrew Bilenduke</h1>
    <h2 class="site-header__subtitle">Full Stack Web Developer</h2>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
.site-header {
  @include flex-box;
  @include flex-col;
  @include justify-center;
  @include items-center;
  @include p('m');

  &__title {
    @include pb('xs');
  }
}
</style>
