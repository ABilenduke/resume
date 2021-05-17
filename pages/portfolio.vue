<template>
  <div class="container"></div>
</template>

<script lang="ts">
import Vue from 'vue'
import { generateHeaders } from '~/utils/seo'

export default Vue.extend({
  head() {
    return generateHeaders(
      'Portfolio',
      'You will find working examples of projects I have designed and created.',
      'articles/article-1.jpg',
      `${process.env.HOST_NAME}/${this.$route.path}`
    )
  },
})
</script>
