<template>
  <div v-if="movie">
    <a-icon type="left" class="back" role="button" @click="goBack" />
    <movie-detail :data="movie" />
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  asyncData ({ params }) {
    const id = params.id
    return { id }
  },
  async fetch () {
    await this.fetchMovieDetail(this.id)
  },
  computed: {
    ...mapGetters({
      movie: 'movie/data'
    })
  },
  methods: {
    ...mapActions({
      fetchMovieDetail: 'movie/fetchMovieDetail'
    }),
    ...mapMutations({
      clearMovie: 'movie/SET_EMPTY_MOVIE'
    }),
    goBack () {
      this.$router.go(-1)
      this.clearMovie()
    }
  }
}
</script>

<style lang="scss">
.back {
  top: 50px;
  left: 70px;
  color: white;
  font-size: 2em;
  position: absolute;
}
</style>
