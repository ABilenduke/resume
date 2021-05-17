<template>
  <main class="site-container">
    <div
      class="site-container__inner"
      :class="{
        'menu-active': menuIsOpen,
      }"
    >
      <SiteNavBar
        :menu-status="menuIsOpen"
        @menu-status-change="menuIsOpen = $event"
      />
      <div class="site-container__main">
        <section class="content">
          <Nuxt />
        </section>
      </div>
      <SiteFooter />
    </div>
    <SiteMobileMenu :active="menuIsOpen" @close="menuIsOpen = false" />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'DefaultLayout',
  data: () => ({
    menuIsOpen: false,
  }),
})
</script>

<style lang="scss" scoped>
.site-container {
  @include flex-box;

  width: 100%;

  &__inner {
    @include flex-box;
    @include flex-col;
    @include transform(translateX(0));
    @include transition(transform 300ms ease);

    width: 100%;

    &.menu-active {
      @include transform(translateX(-90%));
      @include transition(transform 300ms ease);
    }
  }

  &__main {
    position: relative;
    min-height: calc(100vh - 50px);
    @include flex-box;

    width: 100%;
    z-index: 0;

    .content {
      display: block;
      width: 100%;
    }
  }
}
</style>
