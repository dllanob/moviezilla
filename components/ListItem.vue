<template>
  <li v-if="movie" class="list_item">
    <nuxt-link :to="`/movie/detail/${movie.id}`">
      <h3 class="list_title">
        {{ movie.title }}
      </h3>
      <a-rate :default-value="2" disabled />
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      default: null
    }
  }
}
</script>
