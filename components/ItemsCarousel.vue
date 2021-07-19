<template>
  <a-carousel autoplay class="carousel" effect="fade">
    <p v-if="$fetchState.pending">
      <span class="loading" />
    </p>
    <template v-else>
      <card-item v-for="(movie, index) in movies.slice(0, 5)" :key="index" type="banner" :movie="movie" />
    </template>
  </a-carousel>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  async fetch () {
    await this.fetchDiscoverMovies()
  },
  computed: {
    ...mapGetters({
      movies: 'movies/discover'
    })
  },
  methods: {
    ...mapActions({
      fetchDiscoverMovies: 'movies/fetchDiscoverMovies'
    })
  }
}
</script>

<style lang="scss">
@import "~assets/styles/init/variables";

.carousel {
  width: 100%;
  height: 400px;
  overflow: hidden;
  background: black;
  border-radius: 10px;
  margin-bottom: 50px;
  z-index: 100;
  .slick-slide {
    height: 400px;
    > div {
      height: 100%;
    }
  }
}

.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 400px;
  line-height: 400px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>
