<template>
  <div>
    <h1>INDEX</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { generateHeaders } from '~/utils/seo'

export default Vue.extend({
  head() {
    return generateHeaders(
      'Blog Articles',
      'All of my articles.',
      'site_meta.jpg',
      `${process.env.HOST_NAME}/${this.$route.path}`
    )
  },
})
</script>
