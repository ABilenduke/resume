<template>
  <nav class="site-navigation" :class="{ hide }">
    <SiteNavList hide-mobile class="site-navigation__list">
      <template #start>
        <li class="site-navigation-list__item logo">
          <NuxtLink to="/">
            <div class="logo-image" />
          </NuxtLink>
        </li>
        <li class="site-navigation-list__item menu">
          <a href="javascript:void(0)">
            <IconHamburger v-model="menuIsOpen" />
          </a>
        </li>
      </template>
    </SiteNavList>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'SiteNavBar',
  props: {
    menuStatus: Boolean,
    hide: Boolean,
  },
  data: () => ({
    colourTheme: '',
  }),
  computed: {
    menuIsOpen: {
      get(): boolean {
        return this.menuStatus
      },
      set(value: boolean) {
        this.$emit('menu-status-change', value)
      },
    },
  },
})
</script>

<style lang="scss" scoped>
.site-navigation {
  @include sticky;
  @include rem(min-height, $nav-height);
  @include flex-box;
  @include items-center;

  top: 0;
  background-color: var(--container-colour);
  z-index: 1;

  &__list {
    height: 100%;
  }

  @include device-tablet {
    @include px('l');
  }
}

.logo-image {
  width: 75px;
  height: 30px;
  background-image: var(--logo);
  background-position: 50% 50%;
  background-size: cover;
}
</style>
