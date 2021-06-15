<template>
  <div class="ab-input">
    <input
      :id="inputId"
      v-model="inputValue"
      v-bind="$attrs"
      class="ab-input__input"
    />
    <label :for="inputId" class="ab-input__label">
      {{ label }}
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    value: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    inputId: {
      type: String,
      required: true,
    },
  },
  computed: {
    inputValue: {
      get(): string | number {
        return this.value
      },
      set(value: string | number) {
        this.$emit('input', value)
      },
    },
  },
})
</script>

<style lang="scss" scoped>
$fontSize: 16px;
$fontSizeSmall: 12px;
$labelHeight: 18px;
$selectedSpacing: map-get($spacing, 'xs');
$total: number($labelHeight) + number($selectedSpacing);
$totalPx: $total * 1px;
$totalRem: ($total / 10) * 1rem;

.ab-input {
  position: relative;
  width: 100%;
  @include font-m();

  &__input {
    @include rem(padding-top, $totalPx);
    @include rem(min-height, 50px);

    width: 100%;
    resize: vertical;
    overflow: auto;
    color: var(--font-colour);
    background-color: transparent;
    border: none;
    border-bottom: 1px solid var(--font-colour);
  }

  &__label {
    position: absolute;
    left: 0;
    top: calc(100% - #{$totalPx});
    top: calc(100% - #{$totalRem});
    @include p('xs');
    @include transition(all 300ms ease);
  }

  :focus-within > &__label,
  &__input:focus + &__label {
    top: 0;
    @include font-xs();
    @include transition(all 300ms ease);
  }
}
</style>
