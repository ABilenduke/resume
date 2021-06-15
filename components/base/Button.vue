<template>
  <button
    v-bind="$attrs"
    :type="buttonType"
    :disabled="disabled"
    :class="[`${theme}-theme`, `${colour}-colour`, `${size}-size`]"
    class="ab-button"
    @click.middle="$emit('clickMiddle', $event)"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    disabled: Boolean,
    buttonType: {
      type: String,
      default: 'button',
      validator: (value) => {
        const BUTTON_TYPES = ['button', 'submit', 'reset']
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
        const COLOURS = [
          'standard',
          'primary',
          'secondary',
          'highlight',
          'success',
          'warning',
          'danger',
        ]
        return COLOURS.includes(value)
      },
    },
    size: {
      type: String,
      default: 'normal',
      validator: (value) => {
        const SIZES = ['x-small', 'small', 'normal', 'large', 'x-large']
        return SIZES.includes(value)
      },
    },
  },
})
</script>

<style lang="scss" scoped>
.ab-button {
  @include border-radius(5px);

  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }

  // COLOURS
  &.standard-colour {
    color: var(--background-colour);
    background-color: var(--font-colour);

    &:disabled {
      color: hsla(var(--background-colour), 0.2);
      background-color: hsla(var(--font-colour), 0.2);
    }
  }
  &.primary-colour {
    color: var(--font-colour);
    background-color: var(--primary-colour);

    &:disabled {
      color: hsla(var(--background-colour), 0.2);
      background-color: hsla(var(--font-colour), 0.2);
    }
  }
  &.secondary-colour {
    color: var(--font-colour);
    background-color: var(--secondary-colour);

    &:disabled {
      color: hsla(var(--background-colour), 0.2);
      background-color: hsla(var(--font-colour), 0.2);
    }
  }
  &.highlight-colour {
    color: var(--font-colour);
    background-color: var(--highlight-colour);

    &:disabled {
      color: hsla(var(--background-colour), 0.2);
      background-color: hsla(var(--font-colour), 0.2);
    }
  }
  &.success-colour {
    color: var(--font-colour);
    background-color: var(--success-colour);

    &:disabled {
      color: hsla(var(--background-colour), 0.2);
      background-color: hsla(var(--font-colour), 0.2);
    }
  }
  &.warning-colour {
    color: var(--font-colour);
    background-color: var(--warning-colour);

    &:disabled {
      color: hsla(var(--background-colour), 0.2);
      background-color: hsla(var(--font-colour), 0.2);
    }
  }
  &.danger-colour {
    color: var(--font-colour);
    background-color: var(--danger-colour);

    &:disabled {
      color: hsla(var(--background-colour), 0.2);
      background-color: hsla(var(--font-colour), 0.2);
    }
  }

  // SIZES
  &.x-small-size {
    @include font-xs;
    @include px('s');
    @include py('xs');
  }
  &.small-size {
    @include font-s;
    @include px('m');
    @include py('xs');
  }
  &.normal-size {
    @include font-m;
    @include px('l');
    @include py('s');
  }
  &.large-size {
    @include font-l;
    @include px('xl');
    @include py('m');
  }
  &.x-large-size {
    @include font-xl;
    @include px('xl');
    @include py('l');
  }
}
</style>
