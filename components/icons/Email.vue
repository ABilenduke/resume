<template>
  <svg viewBox="0 0 24 24" class="ab-icon-email">
    <path
      d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"
    />
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
.ab-icon-email {
  @include rem(width, 24px);
  @include rem(height, 24px);
}
</style>
