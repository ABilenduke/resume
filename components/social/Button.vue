<template>
  <BaseButton
    class="ab-social-button"
    :role="role"
    @click.native="handleClickEvent()"
    @clickMiddle="handleMiddleClickEvent()"
  >
    <span class="ab-social-button__icon-container">
      <component :is="`Icon${getCapitalizedWord(brand)}`" />
    </span>
    <span class="ab-social-button__text-container">
      {{ brand }}
    </span>
  </BaseButton>
</template>

<script lang="ts">
import Vue from 'vue'
import { capitalize } from '~/utils/tools'

export default Vue.extend({
  props: {
    brand: {
      type: String,
      required: true,
      validator: (value) => {
        const BRANDS = ['linkedin', 'github']
        return BRANDS.includes(value.toLowerCase())
      },
    },
    role: {
      type: String,
      default: 'link',
      validator: (value) => {
        const ROLES = [
          'checkbox',
          'link',
          'menuitem',
          'menuitemcheckbox',
          'menuitemradio',
          'option',
          'radio',
          'switch',
          'tab',
        ]
        return ROLES.includes(value.toLowerCase())
      },
    },
    destination: {
      type: String,
      default: '',
      validator: (value) => {
        const DESTINATIONS = ['profile']
        return DESTINATIONS.includes(value.toLowerCase())
      },
    },
  },
  data: () => ({
    profiles: {
      linkedin: 'https://www.linkedin.com/in/andrew-bilenduke-8633118a',
      github: 'https://github.com/ABilenduke',
    },
  }),
  methods: {
    getCapitalizedWord(word: string) {
      return capitalize(word)
    },
    handleClickEvent(): void {
      if (this.role === 'link' && this.destination === 'profile') {
        window.open(this.profiles[this.brand.toLowerCase()], '_blank')
      }
    },
    handleMiddleClickEvent() {
      if (this.role === 'link' && this.destination === 'profile') {
        window.open(this.profiles[this.brand.toLowerCase()], '_blank')
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.ab-social-button {
  @include flex-box;
  @include items-center;
}
</style>
