<template>
  <div class="outdoor-lighting">
    <Header />
    <h1>This is about outdoor lighting</h1>
    <Footer />
  </div>
</template>


<script>
import Header from '@/components/TheHeader.vue'
import Footer from '@/components/TheFooter.vue'

export default {
  name: 'Contact',
  components: {
    Header,
    Footer
  }
}
</script>
