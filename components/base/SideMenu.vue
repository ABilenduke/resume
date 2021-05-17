<template>
  <aside
    class="base-side-menu"
    :class="{
      active: active,
    }"
  >
    <div class="base-side-menu__click-away" @click="$emit('close')" />
    <div class="base-side-menu__content">
      <slot></slot>
    </div>
  </aside>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'BaseSideMenu',
  props: {
    active: Boolean,
  },
})
</script>

<style lang="scss" scoped>
.base-side-menu {
  @include transition(right 300ms ease);
  @include flex-box;

  position: fixed;
  height: 100%;
  overflow-y: hidden;
  width: 100%;
  right: -100%;
  z-index: 1;

  &.active {
    right: 0;
  }

  &__click-away {
    @include no-select;

    cursor: pointer;
    height: 100%;
    width: 10%;
  }

  &__content {
    @include flex(1);

    height: 100%;
    overflow-y: auto;
    background-color: var(--container);
  }
}
</style>
