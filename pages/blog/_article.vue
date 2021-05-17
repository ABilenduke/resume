<template>
  <article>
    <NuxtContent :document="article" />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { generateHeaders } from '~/utils/seo'

export default Vue.extend({
  name: 'ArticlePage',
  async asyncData({ $content }) {
    let article = null

    try {
      article = await $content('articles/article-1').fetch()
    } catch {
      console.log('NOT FOUND!')
    }

    return { article }
  },
  data: () => ({
    article: {
      title: '',
      description: '',
    },
  }),
  head() {
    return generateHeaders(
      this.article.title,
      this.article.description,
      `/articles/${this.article.title}.jpg`,
      `${process.env.HOST_NAME}/${this.$route.path}`
    )
  },
})
</script>
