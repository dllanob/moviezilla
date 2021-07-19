<template>
  <p v-if="$fetchState.pending">
    <span class="loading" />
  </p>
  <ul v-else class="items-list">
    <card-item v-for="(movie, index) in movies" :key="index" type="wide" :movie="movie" />
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  async fetch () {
    await this.fetchTopRatedMovies()
  },
  computed: {
    ...mapGetters({
      movies: 'movies/top_rated'
    })
  },
  methods: {
    ...mapActions({
      fetchTopRatedMovies: 'movies/fetchTopRatedMovies'
    })
  }
}
</script>
