<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/panel-upgrades">Panel Upgrades</router-link>
    <router-link to="/new-construction-electrical">New Construction Electrical</router-link>
    <router-link to="/electrical-repairs">Electrical Repairs</router-link>
    <router-link to="/outdoor-lighting">Outdoor Lighting</router-link>
    <router-link to="/testimonials">Testimonials</router-link>
    <router-link to="/contact">Contact</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style lang="scss">
nav {
  background: var(--blue);
  padding: 25px;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;

  a,
  a:visited,
  a:active {
    color: white;
    margin: 40px 20px;

    &:hover {
      color: white;
    }
  }
}
</style>
