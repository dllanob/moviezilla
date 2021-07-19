<template>
  <p v-if="$fetchState.pending">
    <span class="loading" />
  </p>
  <ul v-else class="items-list">
    <card-item v-for="(movie, index) in movies" :key="index" type="simple" :movie="movie" />
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  async fetch () {
    await this.fetchPopularMovies()
  },
  computed: {
    ...mapGetters({
      movies: 'movies/popular'
    })
  },
  methods: {
    ...mapActions({
      fetchPopularMovies: 'movies/fetchPopularMovies'
    })
  }
}
</script>
