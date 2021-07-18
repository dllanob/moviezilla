<template>
  <a-carousel autoplay class="carousel" effect="fade">
    <card-item />
    <card-item />
    <card-item />
    <card-item />
  </a-carousel>
</template>

<script>
export default {
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
