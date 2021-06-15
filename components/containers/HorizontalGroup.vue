<template>
  <div class="ab-horizontal-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
.ab-horizontal-group {
  @include flex-box;
}
</style>
