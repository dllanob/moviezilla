<template>
  <div class="content">
    <section class="content_main">
      <a-empty
        image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
        :image-style="{
          height: '60px',
        }"
      >
        <span slot="description"> Cooming soon </span>
        <nuxt-link to="/home/movies">
          <a-button type="primary">
            Enjoy movies
          </a-button>
        </nuxt-link>
      </a-empty>
    </section>
    <aside class="content_aside" />
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">

</style>
