<template>
  <div class="home">
    <Header />
    <HelloWorld msg="Welcome to Luke Electric"/>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Footer,
    Header
  }
}
</script>
