<template>
  <div class="testimonial">
    <Header />
    <h1>This is about testimonials</h1>
    <Footer />
  </div>
</template>


<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Contact',
  components: {
    Header,
    Footer
  }
}
</script>
