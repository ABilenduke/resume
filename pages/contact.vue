<template>
  <div class="ab-contact-page-container">
    <div class="ab-contact-page-container__content">
      <div class="ab-contact-page-container__form-container">
        <form @submit.prevent="sendMessage()">
          <FormInput
            v-model="message.name"
            input-id="message-name"
            type="text"
            name="name"
            label="Name"
          />
          <FormInput
            v-model="message.email"
            input-id="message-email"
            type="email"
            name="email"
            label="Email"
          />
          <FormTextarea
            v-model="message.body"
            input-id="message-body"
            name="body"
            label="Message"
          />
          <ContainerHorizontalGroup>
            <BaseButton type="submit">Send</BaseButton>
            <BaseButton type="reset">Clear</BaseButton>
          </ContainerHorizontalGroup>
        </form>
      </div>
      <ContainerImage
        :src="`contact.jpg`"
        alt="A person typing on a typewritter at a desk in a crowded place."
        tint="primary"
        class="ab-contact-page-container__image-container"
      >
        <div class="ab-contact-page-container__image-content">
          <h1 class="ab-contact-page-container__image-content--header">
            Contact me using the following methods:
          </h1>
          <h2 class="ab-contact-page-container__image-content--subheader">
            I am a fullstack web developer.
          </h2>
          <ul>
            <li>
              <a href="mailto:andrewbilenduke@gmail.com">
                <IconEmail />
                <span>andrewbilenduke@gmail.com</span>
              </a>
            </li>
            <li>
              <a href="tel:+15148093094">
                <IconPhone />
                <span>1 514 809 3094</span>
              </a>
            </li>
          </ul>
          <ContainerHorizontalGroup>
            <SocialButton brand="LinkedIn" role="link" destination="profile" />
            <SocialButton brand="Github" role="link" destination="profile" />
          </ContainerHorizontalGroup>
        </div>
      </ContainerImage>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { generateHeaders } from '~/utils/seo'

export default Vue.extend({
  name: 'ContactPage',
  data: () => ({
    message: {
      name: '',
      email: '',
      body: '',
    },
  }),
  head() {
    return generateHeaders(
      'Contact me',
      'Send me a message using the form or use my social media links to get in touch another way.',
      'site_meta.jpg',
      `${process.env.HOST_NAME}/${this.$route.path}`
    )
  },
  methods: {
    sendMessage() {
      this.$axios.post('/api/public-message', this.message)
    },
  },
})
</script>

<style lang="scss" scoped>
.ab-contact-page-container {
  @include flex-box;
  @include justify-center;
  @include p('m');

  min-height: calc(100vh - #{$nav-height});
  width: 100%;

  &__content {
    @include flex-box;
    @include flex-col;
    @include max-width;

    @include device-s-screen {
      @include flex-row-reverse;

      height: calc(96vh - #{$nav-height});
    }
  }

  &__form-container {
    @include flex(1 auto);
    @include p('m');

    width: 100%;
    background-color: var(--container-colour);
  }

  &__image-container {
    @include flex(1 auto);
  }
  &__image-content {
    @include flex-box;
    @include flex-col;
    @include items-center;
    @include justify-center;

    width: 100%;
    height: 100%;
  }
}
</style>
