<template>
  <div
    class="content-card"
    :style="{ backgroundImage: `url('${background}')` }"
  >
    <div class="content-card-overlay" />
    <div class="content-card-content">
      <h2>{{ title }}</h2>
      <h4>{{ description }}</h4>
      <router-link v-if="to" :to="to">Learn More</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentCard',
  props: {
    background: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    to: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss">
.content-card {
  padding: 200px 50px;
  text-align: center;
  color: white;
  background-size: cover;
  position: relative;

  @media all and (max-width: 1000px) {
      padding: 50px 25px;
  }

  .content-card-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: RGBA(0, 0, 0, .5);
  }

  .content-card-content {
    z-index: 10;
    position: relative;

    h2,
    h4 {
      padding-bottom: 20px;
    }
  }

  a,
  a:visited,
  a:active {
    padding: 10px;
    border: solid 2px white;
    color: white;
    font-weight: 600;
    text-transform: uppercase;
    text-decoration: none;

    &:hover {
      background: white;
      color: black;
      text-decoration: none;
    }
  }
}
</style>
