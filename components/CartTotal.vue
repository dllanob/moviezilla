<template>
  <div class="cart_total">
    <h3 class="cart_total_text">
      Total
    </h3>
    <p class="cart_total_value">
      {{ total }}.00€
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      total: 'cart/total'
    })
  }
}
</script>

<style lang="scss">
@import "~assets/styles/init/variables";

.cart_total {
  display: flex;
  justify-content: space-between;
  &_text {
    font-size: 1.4em;
    color: $dark-grey;
    font-weight: bolder;
  }
  &_text,
  &_value {
    margin: 0;
    font-size: 1.4em;
    color: $dark-grey;
  }
}
</style>
