<template>
  <Header />
  <div class="about">
    <Carousel />
  </div>
</template>

<script setup>
  import Header from '../components/Header.vue'
  import Carousel from '../components/Carousel.vue'
</script>

<style scoped>
  .about {
    width: 100vw;
    height: 100vh;
  }
</style>
