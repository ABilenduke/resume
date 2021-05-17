<template>
  <div class="container">
    <ContainerImage
      :src="`site_meta.jpg`"
      alt="A top down view of a person grasping their hands with a computer next to them on a desk."
      fit-screen
      tint="dark"
    >
      <div class="banner-content">
        <h1 class="banner-content__header">Hi, my name is Andrew Bilenduke</h1>
        <h2 class="banner-content__header">I am a fullstack web developer.</h2>
        <FunTypingText />
      </div>
    </ContainerImage>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { generateHeaders } from '~/utils/seo'

export default Vue.extend({
  head() {
    return generateHeaders(
      'Andrew Bilenduke',
      'Full stack web developer',
      'site_meta.jpg',
      `${process.env.HOST_NAME}/${this.$route.path}`
    )
  },
})
</script>

<style lang="scss" scoped>
.banner-content {
  @include align-self(center);
  @include justify-start;
  @include p('l');

  >>> .fun-typing-text__type-writer {
    @include font-size('xl');
  }

  &__header {
    @include font-size('xl');

    color: $light-font;
    font-family: $font-family-header;

    @include device-tablet {
      @include font-size('xl');
    }
  }
}
</style>
