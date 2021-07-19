<template>
  <div class="home">
    <img src="~assets/images/intro-bg.jpg" class="home_background" alt="background image" draggable="false">
    <section class="home_content">
      <h2>Welcome to</h2>
      <logo />
      <nuxt-link to="/home/movies">
        <a-button type="primary">
          Enter
          <a-icon type="right" />
        </a-button>
      </nuxt-link>
    </section>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.home {
  height: 100vh;
  width: 100vw;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba($color: #000000, $alpha: 0.6);
    z-index: 10;
  }
  &_background {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
  }
  &_content {
    display: flex;
    flex-direction: column;
    text-align: center;
    z-index: 20;
    .ant-btn {
      width: 100%;
      margin-top: 50px;
    }
  }
}

</style>
