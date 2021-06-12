<template>
  <div class="testimonial">
    <Header />
    <h1>This is about testimonials</h1>
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
