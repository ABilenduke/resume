<template>
  <BaseSideMenu
    class="site-navigation"
    :active="active"
    @close="$emit('close')"
  >
    <SiteNavList column size="large" @link-click="$emit('close')" />
  </BaseSideMenu>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'SiteMobileMenu',
  props: {
    active: Boolean,
  },
})
</script>

<style lang="scss" scoped>
.site-navigation {
  @include device-tablet {
    display: none;
    visibility: hidden;
    opacity: 0;
  }
}
</style>
