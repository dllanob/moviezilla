<template>
  <nuxt-link to="/" class="logo">
    <img src="~assets/images/logo.png" alt="Foodiqo logo" draggable="false">
  </nuxt-link>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.logo {
  animation: 1s appear;
  img {
    width: 100%;
    max-width: 300px;
  }
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
