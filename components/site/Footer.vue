<template>
  <footer>
    <nav>
      <ul>
        <li>HI</li>
        <li>HI</li>
        <li>
          <UtilColourTheme />
        </li>
        <li>HI</li>
        <li>HI</li>
      </ul>
    </nav>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
footer {
  nav {
    @include p('m');

    background-color: var(--container-colour);

    ul {
      @include flex-box;
      @include justify-between;

      width: 100%;
      list-style: none;
      padding: 0;
    }
  }
}
</style>
