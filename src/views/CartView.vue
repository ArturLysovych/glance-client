<template>
  <div class="container">
    <h2 class="w-full font-roboto text-h3 font-h3 flex items-center justify-start gap-[4px] mt-[20px] px-base">
      <router-link class="text-[#ABABAB]" to="/">
        Home
      </router-link>/
      <p class="text-[#454545]">Cart</p>
    </h2>
    <h3 class="w-full flex items-center justify-start gap-[20px] mt-[32px] px-base">
      <router-link class="flex flex-col items-center gap-[8px]" to="/">
        <img src="../assets/images/catalog/back.svg" alt="">
      </router-link>
      <p class="font-roboto text-h1 font-h1 text-black">Cart</p>
    </h3>
    <div class="w-full flex justify-end items-center px-base" v-if="totalSum>0">
      <span>Choose All <input type="checkbox"></span>
     </div>
    <div class="w-full flex flex-col justify-center items-center mt-[20px]">
      <CartItem v-for="cartItem in cart" :key="cartItem.id" :cartItem="cartItem" />
    </div>
    <div class="w-full py-[25px] flex flex-col justify-between items-center border-y border-silver font-roboto" v-if="totalSum>0">
      <h3 class="text-[#454545] text-h4 font-medium">Totally</h3>
      <h2 class="text-black text-h4 font-semibold">{{ totalSum }}$</h2>
      <button class="w-[267px] h-[49px] bg-navy rounded-[8px] text-whiteSmoke font-roboto text-h2 font-medium">Order</button>
    </div>
    <div class="w-full h-[calc(100vh-401px)] py-[25px] flex flex-col justify-between items-center border-y border-silver font-roboto" v-else>
      <p class="text-h3 font-h3 text-silver">Empty cart</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import CartItem from '@/components/CartItem.vue';
import IProduct from '@/interfaces/index'

export default defineComponent({
  name: 'CartView',
  props: {
    cart: {
      type: Array as PropType<IProduct[]>,
      required: true
    }
  },
  components: {
    CartItem,
  },
  computed: {
    totalSum() {
      return this.cart.reduce((acc, product) => acc + product.price, 0);
    }
  },
})
</script>
