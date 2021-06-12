<template>
  <div class="contact">
    <Header />
    <h1>This is about contact</h1>
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
