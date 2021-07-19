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
      <cart-total />
    </a-drawer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

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
    openCart () {
      this.visible = !this.visible
    },
    onClose () {
      this.visible = false
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
      .ant-drawer-body {
        display: flex;
        flex-direction: column;
        height: 92%;
        justify-content: space-between;
      }
    }
  }
}
</style>
