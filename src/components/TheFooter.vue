<template>
  <footer>
    <navigation />
    <p class="footer-copyright">Copyright © 2021 Luke Electric, all rights reserved | Hampton, NJ | (908) 246-8546</p>
  </footer>
</template>

<script>
import Navigation from './Navigation'
export default {
  name: 'Footer',
  components: {
    Navigation
  }
}
</script>

<style lang="scss">

footer {
  background: var(--blue);
  color: white;
  padding: 10px 20px 20px;
  text-align: center;
}
</style>
