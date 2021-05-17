<template>
  <button
    type="button"
    class="theme-selector"
    @click="selectedTheme = selectedTheme === 'dark' ? 'light' : 'dark'"
  >
    Switch to {{ selectedTheme === 'dark' ? 'light' : 'dark' }} mode
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ColourTheme',
  data: () => ({
    selectedTheme: 'light',
  }),
  watch: {
    selectedTheme(value) {
      localStorage.colourTheme = value
      document.documentElement.setAttribute('data-theme', value)
    },
  },
  mounted() {
    this.selectedTheme = localStorage.colourTheme

    if (this.selectedTheme || !window.matchMedia) return

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.selectedTheme = 'dark'
    }
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      this.selectedTheme = 'light'
    }
  },
})
</script>

<style lang="scss" scoped>
.theme-selector {
  @include px('s');
  @include py('xs');
  @include font-s;

  cursor: pointer;
}
</style>
