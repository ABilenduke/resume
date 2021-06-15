<template>
  <svg
    class="ab-svg-hamburger"
    viewBox="0 0 100 100"
    @click="$emit('input', !value)"
  >
    <path
      :class="
        value
          ? 'ab-svg-hamburger__top-bun--active'
          : 'ab-svg-hamburger__top-bun'
      "
      d="M93.027,13.721c0,-2.069 -1.68,-3.75 -3.75,-3.75l-78.523,0c-2.069,0 -3.75,1.681 -3.75,3.75l0,7.5c0,2.07 1.681,3.75 3.75,3.75l78.523,0c2.07,0 3.75,-1.68 3.75,-3.75l0,-7.5Z"
    />
    <path
      :class="
        value ? 'ab-svg-hamburger__patty--active' : 'ab-svg-hamburger__patty'
      "
      d="M92.996,46.25c0,-2.07 -1.681,-3.75 -3.75,-3.75l-78.523,0c-2.07,0 -3.75,1.68 -3.75,3.75l0,7.5c0,2.07 1.68,3.75 3.75,3.75l78.523,0c2.069,0 3.75,-1.68 3.75,-3.75l0,-7.5Z"
    />
    <path
      :class="
        value
          ? 'ab-svg-hamburger__bottom-bun--active'
          : 'ab-svg-hamburger__bottom-bun'
      "
      d="M93.027,78.779c0,-2.07 -1.68,-3.75 -3.75,-3.75l-78.523,0c-2.069,0 -3.75,1.68 -3.75,3.75l0,7.5c0,2.069 1.681,3.75 3.75,3.75l78.523,0c2.07,0 3.75,-1.681 3.75,-3.75l0,-7.5Z"
    />
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IconHamburger',
  props: {
    value: {
      type: Boolean,
    },
  },
})
</script>

<style lang="scss" scoped>
.ab-svg-hamburger path {
  fill: var(--font-colour);
}
.ab-svg-hamburger {
  @include flex-box;
  @include flex-col;
  @include justify-between;
  @include transition(all 300ms ease-in-out);
  @include rem(width, 24px);
  @include rem(height, 24px);

  stroke-width: 55;
  cursor: pointer;

  $activatedTranslatePx: 24.6px;
  $activatedTranslateRem: 2.4rem;

  &__top-bun {
    @include transition(all 300ms ease-in-out);
    &--active {
      @include transition(all 300ms ease-in-out);
      @include transform(translateX($activatedTranslatePx) rotateZ(45deg));
      @include transform(translateX($activatedTranslateRem) rotateZ(45deg));
    }
  }
  &__patty {
    opacity: 1;
    @include transition(all 100ms ease-in-out);
    &--active {
      @include transition(all 200ms ease-in-out);

      opacity: 0;
    }
  }
  &__bottom-bun {
    @include transition(all 300ms ease-in-out);
    &--active {
      @include transition(all 300ms ease-in-out);
      @include transform(
        translateX(-45px) translateY($activatedTranslatePx) rotateZ(-45deg)
      );
      @include transform(
        translateX(-4.5rem) translateY($activatedTranslateRem) rotateZ(-45deg)
      );
    }
  }
}
</style>
