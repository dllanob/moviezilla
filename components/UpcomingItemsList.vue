<template>
  <p v-if="$fetchState.pending">
    <span class="loading" />
  </p>
  <ol v-else class="list">
    <list-item v-for="(movie, index) in movies.slice(0, 5)" :key="index" :movie="movie" />
  </ol>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  async fetch () {
    await this.fetchUpcomingMovies()
  },
  computed: {
    ...mapGetters({
      movies: 'movies/upcoming'
    })
  },
  methods: {
    ...mapActions({
      fetchUpcomingMovies: 'movies/fetchUpcomingMovies'
    })
  }
}
</script>
