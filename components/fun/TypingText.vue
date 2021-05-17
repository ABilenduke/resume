<template>
  <div class="fun-typing-text">
    <h1 ref="typewriter" class="fun-typing-text__type-writer">
      <span class="wrap">{{ display }}</span>
    </h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

// https://css-tricks.com/snippets/css/typewriter-effect/
export default Vue.extend({
  name: 'FunTypingText',
  data: () => ({
    sentences: [
      'Hi, my name is Andrew Bilenduke.',
      'I am a fullstack web developer.',
      'Checkout my portfolio.',
    ],
    display: '',
    loopIndex: 0,
    period: 2000,
    isDeleting: false,
  }),
  mounted() {
    this.typeText()
  },
  methods: {
    typeText() {
      const i = this.loopIndex % this.sentences.length
      const fullText = this.sentences[i]

      if (this.isDeleting) {
        this.display = fullText.substring(0, this.display.length - 1)
      } else {
        this.display = fullText.substring(0, this.display.length + 1)
      }

      let delta = 200 - Math.random() * 100

      if (this.isDeleting) {
        delta /= 2
      }

      if (!this.isDeleting && this.display === fullText) {
        delta = this.period
        this.isDeleting = true
      } else if (this.isDeleting && this.display === '') {
        this.isDeleting = false
        this.loopIndex++
        delta = 500
      }

      setTimeout(() => {
        this.typeText()
      }, delta)
    },
  },
})
</script>

<style lang="scss" scoped>
.fun-typing-text {
  width: 100%;

  &__type-writer {
    width: fit-content;
    overflow: hidden;
  }
}

.wrap {
  border-right: 0.1em solid #333; /* The typwriter cursor */
}
</style>
