<template>
  <div class="cart_total">
    <h3 class="cart_total_text">
      Total
    </h3>
    <p class="cart_total_value">
      {{ total }}
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
.cart_total {
  color: red;
  &_text,
  &_value {
    color: red;
  }
}
</style>
