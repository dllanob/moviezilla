<template>
  <div v-if="movie" class="card" :class="{ 'card--banner': type === 'banner', 'card--simple': type === 'simple', 'card--wide': type === 'wide', 'card--image': type === 'image' }">
    <nuxt-link :to="`/movie/detail/${movie.id}`">
      <img :src="`https://image.tmdb.org/t/p/original${ type === 'banner' || type === 'image' || type === 'wide' ? movie.backdrop_path : movie.poster_path}`" class="card_image" :alt="movie.title">
    </nuxt-link>
    <h3 v-if="!(type === 'simple')" class="card_title">
      {{ movie.title }}
    </h3>
    <h5 v-if="!(type === 'simple')" class="card_subtitle">
      {{ new Date(movie.release_date).getFullYear() }}
    </h5>
    <categories-list v-if="type === 'banner'" class="card_categories" />
    <div class="card_actions">
      <nuxt-link v-if="type === 'banner'" :to="`/movie/detail/${movie.id}`">
        <a-button class="card_button" type="primary">
          Details
          <a-icon type="right" />
        </a-button>
      </nuxt-link>
      <a-button v-show="!(type === 'image')" class="card_button add" @click="addMovie(movie)">
        <a-icon type="shopping-cart" />
      </a-button>
    </div>
    <a-rate v-if="type === 'wide' || type === 'image'" :default-value="2" disabled />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    type: {
      type: String,
      default: 'simple'
    },
    movie: {
      type: Object,
      default: null
    }
  },
  methods: {
    ...mapActions({
      addMovieToCart: 'cart/addItemToCart'
    }),
    addMovie (movie) {
      this.addMovieToCart(movie).then(() => this.$message.success('Movie added to the cart'))
    }
  }
}
</script>

<style lang="scss">
@import "~assets/styles/init/variables";

.card {
  $block: ".card";
  width: 100%;
  height: 100%;
  position: relative;
  text-decoration: none;
  display: flex !important; // important for overide library styles
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  &:hover {
    text-decoration: none;
    #{$block}_image {
      transform: scale(1.2);
      transition: transform 20s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      -webkit-transform: transform 20s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
  }
  &--banner,
  &--simple,
  &--wide {
    #{$block}_image {
      top: 0;
      left: 0;
      height: 100%;
      object-fit: cover;
      position: absolute;
      animation: 2s appear;
      -webkit-animation: 2s appear;
      -moz-animation: 2s appear;
      -o-animation: 2s appear;
      -ms-animation: 2s appear;
      animation: 2s appear;
    }
  }
  &--banner {
    padding: 50px;
    position: relative;
    @media only screen and (max-width: 1200px) {
      padding: 30px;
    }
    &:before {
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: rgba($color: #000000, $alpha: 0.2);
      z-index: 1;
    }
    #{$block}_title,
    #{$block}_subtitle,
    #{$block}_categories,
    #{$block}_actions {
      z-index: 5;
    }
    #{$block}_title {
      font-size: 2em;
      position: relative;
      text-shadow: 0px 0px 30px rgba(0, 0, 0, 1);
      @media only screen and (max-width: 568px) {
        font-size: 1.4em;
      }
    }
    #{$block}_subtitle {
      opacity: 0.7;
      font-size: 1.2em;
      margin-bottom: 15px;
    }
    #{$block}_button {
      padding: 15px 35px;
      margin-right: 10px;
      &.add {
        padding: 10px 12px;
        font-size: 1.6em;
      }
    }
  }
  &--simple,
  &--wide {
    padding: 15px;
    overflow: hidden;
    margin-right: 20px;
    border-radius: 10px;
    #{$block}_title {
      margin-bottom: 5px;
    }
    #{$block}_button {
      &.add {
        top: 15px;
        right: 15px;
        width: 50px;
        padding: 8px 5px;
        font-size: 1.2em;
        position: absolute;
        z-index: 10;
      }
    }
  }
  &--simple {
    height: 300px;
    min-width: 200px;
    #{$block}_title {
      line-height: 1.4em;
      text-align: center;
    }
    #{$block}_subtitle {
      width: 100%;
      text-align: center;
    }
    #{$block}_actions {
      width: 100%;
    }
  }
  &--wide {
    height: 200px;
    min-width: 350px;
    position: relative;
    &:before {
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      position: absolute;
      background: linear-gradient(360deg, rgba(0,0,0,0.8) 0%, rgba(255,255,255,0) 100%, rgba(0,0,0,0.8141631652661064) 100%);
      z-index: 1;
    }
    #{$block}_title,
    #{$block}_subtitle,
    .ant-rate {
      z-index: 5;
    }
    .ant-rate {
      font-size: 12px;
    }
  }
  &--image {
    min-width: 200px;
    margin-right: 20px;
    overflow: hidden;
    #{$block}_image {
      margin-bottom: 15px;
      border-radius: 10px;
    }
    #{$block}_title {
      margin-bottom: 10px;
    }
    .ant-rate {
      font-size: 12px;
    }
  }
  &_categories {
    display: none;
  }
  &_title,
  &_subtitle {
    position: relative;
  }
  &_title {
    font-weight: bolder;
    position: relative;
  }
  &_subtitle {
     opacity: 0.7;
  }
  &_image {
    width: 100%;
  }
  &_actions {
    width: 100%;
    margin-top: 10px;
  }
  &_button {
    font-weight: bolder;
    letter-spacing: 1px;
    &.add {
      margin: 0;
      box-sizing: border-box;
      background-color: rgba($color: #fff, $alpha: 0.5);
      backdrop-filter: blur(2px);
    }
  }
}

.category-list {
  position: relative;
  display: flex;
  > li {
    font-size: .8em;
    list-style: none;
    padding: 5px 15px;
    border-radius: 5px;
    font-weight: bolder;
    text-transform: uppercase;
    background-color: rgba($color: #000000, $alpha: .5);
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
}
</style>
