<template>
  <button :type="buttonType" class="ab-button" :class="[theme, colour, size]">
    <slot name="left-side"></slot>
    <slot></slot>
    <slot name="right-side"></slot>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'BaseButton',
  props: {
    buttonType: {
      type: String,
      default: 'button',
      validator: (value) => {
        const BUTTON_TYPES = ['button', 'submit']
        return BUTTON_TYPES.includes(value)
      },
    },
    theme: {
      type: String,
      default: 'standard',
      validator: (value) => {
        const THEMES = ['standard']
        return THEMES.includes(value)
      },
    },
    colour: {
      type: String,
      default: 'standard',
      validator: (value) => {
        const COLOURS = ['standard', 'primary', 'secondary', 'highlight']
        return COLOURS.includes(value)
      },
    },
    size: {
      type: String,
      default: 'normal',
      validator: (value) => {
        const COLOURS = ['x-small', 'small', 'normal', 'large', 'x-large']
        return COLOURS.includes(value)
      },
    },
  },
})
</script>

<style lang="scss" scoped>
.ab-button {
  @include border-radius(15px);
}
</style>
