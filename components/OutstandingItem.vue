<template>
  <section class="outstanding-item">
    <div class="outstanding-item_banner">
      <img src="~assets/images/outstanding.jpg" alt="banner image">
    </div>
    <div class="outstanding-item_description">
      <h2 class="outstanding-item_description_title">
        The beauty and the beast
      </h2>
      <a-rate :default-value="2" />
      <categories-list />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ullam. Ipsum maiores esse veritatis molestias quas, dicta corporis praesentiga, soluta, asperiores laborum necessitatibus magni doloremque facere velit ea voluptatem quia. Perferendis consectetur...</p>
      <nuxt-link to="/movie/detail">
        Check more
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
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
