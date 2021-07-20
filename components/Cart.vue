<template>
  <div class="cart">
    <a-button class="cart_button" type="primary" @click="openCart">
      Cart ({{ items.length }})
      <a-icon type="shopping-cart" />
    </a-button>
    <a-drawer
      title="Cart"
      class="cart_drawer"
      placement="right"
      :closable="true"
      :visible="visible"
      :destroy-on-close="true"
      width="400"
      @close="onClose"
    >
      <cart-list />
      <hr>
      <a-button v-if="items.length > 0" class="cart_delete" type="link" @click="clearCartItems">
        Clear cart
        <a-icon type="delete" />
      </a-button>
      <cart-total />
    </a-drawer>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  data () {
    return {
      visible: false
    }
  },
  computed: {
    ...mapGetters({
      items: 'cart/items'
    })
  },
  methods: {
    ...mapMutations({
      clearCart: 'cart/CLEAR_CART',
      clearTotal: 'cart/CLEAR_TOTAL'
    }),
    openCart () {
      this.visible = !this.visible
    },
    onClose () {
      this.visible = false
    },
    clearCartItems () {
      this.clearCart()
      this.clearTotal()
      this.visible = false
      this.$message.success('Now the cart is empty')
    }
  }
}
</script>

<style lang="scss">
.cart {
  &_button {
    width: 15vw;
    right: 20px;
    bottom: 20px;
    position: fixed;
    @media only screen and (max-width: 767px) {
      width: 90%;
      z-index: 100;
    }
  }
  &_drawer {
    padding: 20px;
    &.ant-drawer-right {
      right: 20px;
    }
    &.ant-drawer-open {
      .ant-drawer-content-wrapper {
        transform: none !important;
      }
    }
    .ant-drawer-content-wrapper {
      width: 30vw !important; // important to overide library styles
      height: 95vh;
      border-radius: 5px;
      overflow: hidden;
      transform: translateX(110%) !important; // important to overide library styles
      @media only screen and (max-width: 767px) {
         width: 80vw !important; // important to overide library styles
      }
      .ant-drawer-title {
        font-weight: bolder;
        font-size: 1.4em;
      }
      .ant-drawer-body {
        display: flex;
        flex-direction: column;
        height: 92%;
        justify-content: space-between;
      }
    }
  }
  &_delete {
    color: red;
    &:hover {
      color: darken($color: red, $amount: 20)
    }
  }
}
</style>
