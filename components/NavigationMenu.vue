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
  width: 20%;
  padding: 0 30px;
  position: relative;
  border-right: 1px solid $dark-grey;
  &_logo {
    width: 160px;
    display: block;
    margin-bottom: 50px;
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
    > li {
      list-style: none;
      margin-bottom: 20px;
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
