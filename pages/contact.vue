<template>
  <div class="container"></div>
</template>

<script lang="ts">
import Vue from 'vue'
import { generateHeaders } from '~/utils/seo'

export default Vue.extend({
  head() {
    return generateHeaders(
      'Contact me',
      'Send me a message using the form or use my social media links to get in touch another way.',
      'site_meta.jpg',
      `${process.env.HOST_NAME}/${this.$route.path}`
    )
  },
})
</script>
