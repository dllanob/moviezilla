<template>
  <nuxt-link to="movie/detail" class="card card--banner">
    <img src="~assets/images/movie.jpg" class="card_image" alt="">
    <h3 class="card_title">
      The avengers: Ultimate figth
    </h3>
    <ul class="category-list">
      <li>Action</li>
      <li>Drama</li>
      <li>Humor</li>
    </ul>
    <div class="card_actions">
      <nuxt-link to="/home/movies">
        <a-button class="card_button" type="primary">
          Details
          <a-icon type="right" />
        </a-button>
      </nuxt-link>
      <a-button class="card_button add">
        <a-icon type="shopping-cart" />
      </a-button>
    </div>
  </nuxt-link>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import "~assets/styles/init/variables";

.card {
  $block: ".card";
  width: 100%;
  height: 100%;
  position: relative;
  display: flex !important; // important for overide library styles
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  &:hover {
     #{$block}_image {
        transform: scale(1.2);
        transition: transform 20s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        -webkit-transform: transform 20s cubic-bezier(0.25, 0.45, 0.45, 0.95);
     }
  }
  &--banner {
    padding: 50px;
  }
  &_image {
    top: 0;
    left: 0;
    width: 100%;
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
  &_title {
    font-size: 2em;
    position: relative;
    margin-bottom: 10px;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 1);
  }
  &_button {
    padding: 15px 35px;
    letter-spacing: 1px;
    margin-top: 20px;
    margin-right: 10px;
    text-transform: none;
    &.add {
      margin: 0;
      padding: 10px;
      font-size: 1.6em;
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
