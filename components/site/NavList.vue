<template>
  <ul
    class="site-navigation-list"
    :class="{
      column: column,
      'hide-mobile': hideMobile,
      small: size === 'small',
      normal: size === 'normal',
      large: size === 'large',
    }"
  >
    <slot name="start"></slot>
    <li class="site-navigation-list__item link">
      <NuxtLink to="/blog" @click.native="$emit('link-click')"> Blog </NuxtLink>
    </li>
    <li class="site-navigation-list__item link">
      <NuxtLink to="/portfolio" @click.native="$emit('link-click')">
        Portfolio
      </NuxtLink>
    </li>
    <li class="site-navigation-list__item link">
      <NuxtLink to="/contact" @click.native="$emit('link-click')">
        Contact
      </NuxtLink>
    </li>
    <slot name="end"></slot>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'SiteNavList',
  props: {
    column: Boolean,
    hideMobile: Boolean,
    size: {
      type: String,
      default: 'normal',
      validator: (value) => {
        const VALUES = ['small', 'normal', 'large']
        return VALUES.includes(value)
      },
    },
  },
})
</script>

<style lang="scss" scoped>
.site-navigation-list {
  @include flex-box;
  @include justify-center;

  width: 100%;
  list-style: none;
  padding: 0;

  &.column {
    @include flex-col;
    @include justify-start;
  }

  &__item {
    @include flex-box;
    @include items-center;

    @include px('s');

    a {
      text-decoration: none;
      @include font-color;
      @include font-m;
    }

    &.logo {
      margin-right: auto;
    }
    &.menu {
      @include device-tablet {
        display: none;
        visibility: hidden;
        opacity: 0;
      }
    }
    &.link {
      @include px('m');
      @include flex-box;

      a:hover {
        @include bold;
      }
      a.nuxt-link-active {
        @include bold;
        @include rem(text-decoration-thickness, 2px);

        text-decoration-line: underline;
        text-decoration-style: solid;
        text-decoration-color: var(--highlight-colour);
        text-underline-position: under;
      }
    }
  }

  &.large {
    .site-navigation-list__item {
      &.link {
        @include px('m');
        @include py('m');

        a {
          @include font-size('l');
        }
      }
    }
  }

  &.hide-mobile {
    .site-navigation-list__item {
      &.link {
        display: none;
        visibility: hidden;
        opacity: 0;

        @include device-tablet {
          @include flex-box;

          visibility: visible;
          opacity: 1;
        }
      }
    }
  }
}
</style>
