<template>
  <div class="electrical-repairs">
    <Header />
    <h1>This is about electrical repairs</h1>
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
