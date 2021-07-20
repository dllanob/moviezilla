<template>
  <nav class="menu">
    <logo class="menu_logo" />
    <h3 class="menu_title">
      Category
    </h3>
    <ul class="menu_nav">
      <li>
        <nuxt-link to="/home/movies">
          <a-icon type="video-camera" />
          <span>
            Movies
          </span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/home/tv-shows">
          <a-icon type="desktop" />
          <span>
            TV Shows
          </span>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import "~assets/styles/init/variables";

.menu {
  width: 15%;
  padding: 0 30px;
  position: relative;
  border-right: 1px solid $dark-grey;
  @media only screen and (max-width: 1200px) {
    width: 20%;
  }
  @media only screen and (max-width: 767px) {
    width: 100%;
    border-right: none;
  }
  &_logo {
    width: 100%;
    display: block;
    margin-bottom: 50px;
    @media only screen and (max-width: 767px) {
      width: 25%;
      display: block;
      margin: 0 auto 30px;
    }
  }
  &_title,
  &_nav {
    @media only screen and (max-width: 767px) {
      text-align: center;
    }
  }
  &_title {
    font-size: .8em;
    margin-bottom: 30px;
    font-weight: bolder;
    letter-spacing: .2em;
    text-transform: uppercase;
  }
  &_nav {
    padding: 0;
    font-size: 1em;
    @media only screen and (max-width: 767px) {
      display: flex;
      margin-bottom: 30px;
      justify-content: space-around;
    }
    > li {
      list-style: none;
      margin-bottom: 20px;
      padding-bottom: 15px;
      @media only screen and (max-width: 767px) {
        position: relative;
      }
      a {
        text-decoration: none;
      }
      .nuxt-link-active {
        font-weight: bolder;
        &:after {
          content: '';
          right: 0;
          width: 3px;
          height: 25px;
          position: absolute;
          background-color: $accent-color;
          @media only screen and (max-width: 767px) {
            width: 100%;
            height: 2px;
            bottom: 0;
            margin: 0 auto;
          }
        }
        * {
          color: $accent-color;
        }
      }
      .anticon {
        margin-right: 10px;
      }
    }
  }
}
</style>
