<template>
  <div
    class="image-container"
    :class="{
      'fit-screen': fitScreen,
    }"
  >
    <img
      class="image-container__image"
      :src="`https://andrewbilenduke.nyc3.digitaloceanspaces.com/${src}`"
      :alt="alt"
    />
    <div class="image-container__tint" :class="tint" />
    <div class="image-container__content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'BaseImage',
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
      validator: (value) => {
        return value.length > 5
      },
    },
    tint: {
      type: String,
      default: 'none',
      validator: (value) => {
        const TINTS = [
          'none',
          'background',
          'container',
          'font',
          'primary',
          'secondary',
          'highlight',
          'success',
          'warning',
          'danger',
          'dark',
          'light',
        ]
        return TINTS.includes(value)
      },
    },
    fitScreen: Boolean,
  },
})
</script>

<style lang="scss" scoped>
.image-container {
  position: relative;
  width: 100%;

  &__image {
    @include object-fit(cover);

    width: 100%;
    height: 100%;
    z-index: 0;
  }

  &__tint {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: none;
    opacity: 0.5;

    &.none {
      background-color: transparent;
    }

    &.dark {
      background-color: $dark-container;
    }
    &.light {
      background-color: $light-container;
    }

    &.background {
      background-color: var(--background);
    }
    &.container {
      background-color: var(--container);
    }
    &.font {
      background-color: var(--font);
    }

    &.primary {
      background-color: var(--primary);
    }
    &.secondary {
      background-color: var(--secondary);
    }
    &.highlight {
      background-color: var(--highlight);
    }

    &.success {
      background-color: var(--success);
    }
    &.warning {
      background-color: var(--warning);
    }
    &.danger {
      background-color: var(--danger);
    }
  }

  &__content {
    @include flex-box;

    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  &.fit-screen {
    height: calc(100vh - #{$nav-height});
  }
}
</style>
