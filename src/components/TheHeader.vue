<template>
  <header>
    <div class="utility-bar">
      <a
        href="tel:+1-908-246-8546"
        class="phone"
        title="(908) 246-8546"
      >
        (908) 246-8546
      </a>
      &nbsp;|&nbsp;
      <a
        href="https://www.google.com/maps/place/Luke+Electric+LLC/@40.7005691,-74.9635502,15z/data=!4m5!3m4!1s0x0:0x935b5fafd5a5016a!8m2!3d40.7005691!4d-74.9635502"
        title="Google"
        target="_blank"
      >
        Directions
      </a>
    </div>
    <div class="logo">
      <router-link to="/">
        <img
          alt="Luke Electric NJ"
          src="/images/logo.png"
        />
      </router-link>
    </div>
    <navigation />
  </header>
</template>

<script>
import Navigation from './Navigation'
export default {
  name: 'Header',
  components: {
    Navigation
  }
}
</script>

<style lang="scss">

.utility-bar {
  margin: 0;
  background: var(--dark-gray);
  color: white;
  font-weight: bold;
  padding: 15px 25px;
  text-align: right;
  text-transform: uppercase;
  a,
  a:visited,
  a:active {
    color: white;
    &:hover {
      color: white;
      text-underline: none;
    }
  }
}

.logo {
  text-align: center;
  padding: 15px;

  img {
    max-width: 300px;
  }
}
</style>
