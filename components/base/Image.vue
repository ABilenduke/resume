<template>
  <div class="base-image" :class="[orientation, `ratio-${ratio}`]">
    <img
      :src="`https://andrewbilenduke.nyc3.digitaloceanspaces.com/${src}`"
      :alt="alt"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'BaseImage',
  props: {
    orientation: {
      type: String,
      default: 'landscape',
      validator: (value) => {
        const ORIENTATIONS = ['landscape', 'portrait']
        return ORIENTATIONS.includes(value)
      },
    },
    ratio: {
      type: String,
      default: '1-1',
      validator: (value) => {
        const RATIOS = ['1-1', '3-2', '4-3', '16-9', '18-6']
        return RATIOS.includes(value)
      },
    },
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
      validator: (value) => {
        return value.length > 5
      },
    },
  },
})
</script>

<style lang="scss" scoped>
.base-image {
  position: relative;

  img {
    @include object-fit(cover);

    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }

  &.landscape {
    &.ratio-1-1 {
      width: 100%;
      padding-top: 100%;
    }
    &.ratio-3-2 {
      width: 100%;
      padding-top: 66.67%;
    }
    &.ratio-4-3 {
      width: 100%;
      padding-top: 75%;
    }
    &.ratio-16-9 {
      width: 100%;
      padding-top: 56.3%;
    }
    &.ratio-18-6 {
      width: 100%;
      padding-top: 33.33%;
    }
  }
  &.portrait {
    &.ratio-1-1 {
      width: 100%;
      padding-top: 100%;
    }
    &.ratio-3-2 {
      width: 100%;
      padding-top: 166.67%;
    }
    &.ratio-4-3 {
      width: 100%;
      padding-top: 175%;
    }
    &.ratio-16-9 {
      width: 100%;
      padding-top: 156.3%;
    }
    &.ratio-18-6 {
      width: 100%;
      padding-top: 133.33%;
    }
  }
}
</style>
