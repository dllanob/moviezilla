<template>
  <p v-if="$fetchState.pending">
    <span class="loading" />
  </p>
  <ul v-else class="items-list">
    <card-item v-for="(movie, index) in movies" :key="index" type="image" :movie="movie" />
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  async fetch () {
    await this.fetchSimilarMovies(this.movie.id)
  },
  computed: {
    ...mapGetters({
      movie: 'movie/data',
      movies: 'movies/similar'
    })
  },
  methods: {
    ...mapActions({
      fetchSimilarMovies: 'movies/fetchSimilarMovies'
    })
  }
}
</script>

<style lang="scss">

</style>
