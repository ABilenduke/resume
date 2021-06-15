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
      background-color: $container-colour-dark;
      color: $font-colour-dark;
    }
    &.light {
      background-color: $container-colour;
      color: $font-colour;
    }

    &.background {
      background-color: var(--background-colour);
    }
    &.container {
      background-color: var(--container-colour);
    }
    &.font {
      background-color: var(--font-colour);
    }

    &.primary {
      background-color: var(--primary-colour);
    }
    &.secondary {
      background-color: var(--secondary-colour);
    }
    &.highlight {
      background-color: var(--highlight-colour);
    }

    &.success {
      background-color: var(--success-colour);
    }
    &.warning {
      background-color: var(--warning-colour);
    }
    &.danger {
      background-color: var(--danger-colour);
    }
  }

  &__content {
    @include flex-box;

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  &.fit-screen {
    height: calc(100vh - #{$nav-height});
  }
}
</style>
