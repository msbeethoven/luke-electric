<template>
  <div class="testimonials">
    <content-card
      background="/images/testimonials.jpg"
      title="Testimonials"
      description="Learn why you should choose Luke Electric for your next project. Our clients say it best!"
    />
    <div class="fancy-grid">
      <div class="fancy-card-content">
        <h5>"Couldn't be happier"</h5>
        <p>Loved Luke Electric - easy to schedule, they came and replaced several light fixtures professionally and quickly! Couldn't be happier. Cleaned up everything- you would never know they were there.</p>
        <p>- Katie S.</p>
      </div>
      <div class="fancy-card-content">
        <h5>"They are clean, respect your house and are always friendly"</h5>
        <p>Jesse and the guys are great every time they come to do work! They are clean, respect your house and are always friendly. Jesse always does his best to help his customers as soon as he possibly can and has helped me to find other contractors when in need.</p>
        <p>- MB Y.</p>
      </div>
      <div class="fancy-card-content">
        <h5>"Handled our new kitchen and was great"</h5>
        <p>Handled our new kitchen and was great. Prompt, clean and got the job done for us. Thank you!</p>
        <p>- Trish E.</p>
      </div>
    </div>
  </div>
</template>

<script>
import ContentCard from '../components/ContentCard'

export default {
  name: 'Testimonials',
  components: {
    ContentCard
  }
}
</script>
