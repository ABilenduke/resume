<template>
  <div class="ab-textarea">
    <textarea
      :id="textareaId"
      v-model="textareaValue"
      v-bind="$attrs"
      class="ab-textarea__input"
    />
    <label :for="textareaId" class="ab-textarea__label">
      {{ label }}
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getRandomArbitrary } from '~/utils/math'

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
    id: {
      type: String,
      default: '',
    },
  },
  computed: {
    textareaValue: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
  created() {
    this.textareaId = this.id
    if (!this.textareaId)
      this.textareaId = `ab-textarea-${getRandomArbitrary(100, 999)}`
  },
})
</script>

<style lang="scss" scoped>
$fontSize: 'm';
$fontSizeSmall: 'xs';
$selectedSpacingSize: 'xs';
$labelHeight: map-get($fontSizes, $fontSize);
$selectedSpacing: map-get($spacing, $selectedSpacingSize);
$total: number($labelHeight) + (number($selectedSpacing) * 2);
$totalPx: $total * 1px;
$totalRem: ($total / 10) * 1rem;

.ab-textarea {
  position: relative;
  width: 100%;
  @include font-size($fontSize);

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
    @include p($selectedSpacingSize);

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
