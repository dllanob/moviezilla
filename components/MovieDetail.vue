<template>
  <div class="movie-detail">
    <div class="movie-detail_banner">
      <img :src="`https://image.tmdb.org/t/p/original${ data.backdrop_path }`" alt="banner">
    </div>
    <div class="movie-detail_content">
      <h3 class="movie-detail_date">
        {{ new Date(data.release_date).getFullYear() }}
      </h3>
      <h1 class="movie-detail_title">
        {{ data.title }}
      </h1>
      <categories-list class="movie-detail_categories" />
      <p>{{ data.overview }}</p>
      <h3 class="movie-detail_subtitle">
        Rate
      </h3>
      <a-rate class="movie-detail_rate" :default-value="5" disabled />
      <a-button class="card_button" type="primary" @click="addMovie(movie)">
        Buy movie
        <a-icon type="shopping-cart" />
      </a-button>
      <div class="movie-detail_others">
        <h3 class="movie-detail_subtitle">
          You may also like
        </h3>
        <similar-items-list v-if="movie" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    data: {
      type: Object,
      default: null
    }
  },
  computed: {
    ...mapGetters({
      movie: 'movie/data'
    })
  },
  methods: {
    ...mapActions({
      addItemToCart: 'cart/addItemToCart'
    }),
    addMovie (movie) {
      this.addItemToCart(movie).then(() => this.$message.success('Movie added to the cart'))
    }
  }
}
</script>

<style lang="scss">
.movie-detail {
  padding: 120px 70px 50px;
  &_back {
    top: 50px;
    left: 70px;
    font-size: 2em;
    position: absolute;
  }
  &_banner {
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: -1;
    &:before,
    &:after {
      content: '';
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      position: absolute;
      background: rgb(0,0,0);
      z-index: 1;
    }
    &:before {
      background: linear-gradient(90deg, rgba(0,0,0,1) 3%, rgba(0,0,0,0.8141631652661064) 20%, rgba(255,255,255,0) 100%);
    }
     &:after {
       background: linear-gradient(360deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8141631652661064) 16%, rgba(255,255,255,0) 100%);
    }
    img {
      right: 0;
      width: 85vw;
      height: 85vh;
      position: absolute;
      object-fit: cover;
      animation: 2s appear;
      -webkit-animation: 2s appear;
      -moz-animation: 2s appear;
      -o-animation: 2s appear;
      -ms-animation: 2s appear;
      animation: 2s appear;
    }
  }
  &_content {
    width: 50%;
  }
  &_date {
    opacity: 0.7;
    font-size: 1.4em;
    margin-bottom: 10px;
  }
  &_title {
    color: white;
    font-size: 3em;
    font-weight: bolder;
    margin-bottom: 20px;
  }
  &_categories {
    margin-bottom: 20px;
  }
  &_subtitle {
    font-weight: bolder;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 0.2em;
  }
  &_rate {
    display: block;
    margin-bottom: 50px;
  }
  &_others {
    width: 50vw;
    right: 0;
    bottom: 50px;
    position: absolute;
  }
}
</style>
