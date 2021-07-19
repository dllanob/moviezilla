<template>
  <section v-if="movie" class="outstanding-item">
    <div class="outstanding-item_banner">
      <img :src="`https://image.tmdb.org/t/p/original${ movie.backdrop_path }`" alt="banner image">
    </div>
    <div class="outstanding-item_description">
      <h2 class="outstanding-item_description_title">
        {{ movie.title }}
      </h2>
      <a-rate :default-value="2" />
      <categories-list />
      <p>{{ movie.overview }}</p>
      <nuxt-link :to="`/movie/detail/${movie.id}`">
        Check more
      </nuxt-link>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      movie: null
    }
  },
  async fetch () {
    await this.fetchPopularMovies()
  },
  computed: {
    ...mapGetters({
      movies: 'movies/popular'
    })
  },
  mounted () {
    const position = Math.floor(Math.random() * 20)
    this.movie = this.movies[position]
  },
  methods: {
    ...mapActions({
      fetchPopularMovies: 'movies/fetchPopularMovies'
    })
  }
}
</script>

<style lang="scss">
.outstanding-item {
  display: flex;
  margin-top: 50px;
  margin-bottom: 50px;
  .ant-rate {
    font-size: 1em;
    margin-bottom: 15px;
  }
  &_banner,
  &_description {
    width: 50%;
  }
  &_banner {
    overflow: hidden;
    position: relative;
    border-radius: 10px;
    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &_description {
    padding-left: 50px;
    &_title {
      font-size: 1.4em;
      font-weight: bolder;
      margin-bottom: 15px;
    }
    .category-list {
      margin-bottom: 20px;
    }
  }
}

</style>
