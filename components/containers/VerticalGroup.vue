<template>
  <div class="ab-vertical-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
.ab-vertical-group {
  @include flex-box;
  @include flex-col;
}
</style>
