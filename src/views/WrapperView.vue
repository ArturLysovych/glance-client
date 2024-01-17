<template>
  <div class="w-full flex items-center justify-center bg-[#222222]">
    <div class="container overflow-hidden">
      <div class="h-[189px] w-[calc(100%+5px)] bg-whiteSmoke rounded-b-[8px] flex flex-col justify-end items-center px-[16px] py-[28px] gap-[24px] border border-b-silver" v-if="!(href.endsWith('/ordering') || href.endsWith('/order-completed')) && !isLoading">
        <img width="118" height="32" src="@/assets/images/header/glance.svg" alt="">
        <div class="w-full bg-[#DEDEDE] h-[47px] rounded-[8px] p-[16px] flex items-center justify-start gap-[17px]">
          <img class="cursor-pointer" height="16" width="16" src="@/assets/images/header/icon-search.svg" alt="">
          <input v-model="searchTerm" class="h-full w-full bg-transparent outline-none font-roboto text-h2 font-h2 text-[#454545]" type="text" placeholder="search">
        </div>
      </div>
      <LoaderView v-if="isLoading" />
        <router-view v-if="!isLoading" :products="filteredProducts" :cart="cart" @add-to-cart="addToCart" @remove-from-cart="removeFromCart" :clearCart="clearCart" />
        <nav v-if="!isLoading" class="w-full h-[86px] border-t border-[#C1C1C1] flex justify-between items-center px-[30px]">
          <router-link class="flex flex-col items-center gap-[8px]" to="/">
            <img src="@/assets/images/nav/icon-home.svg" alt="">
            <p class="font-roboto font-h3 text-h3 text-[#454545]">Home</p>
          </router-link>
          <router-link class="flex flex-col items-center gap-[8px]" to="/">
            <img src="@/assets/images/nav/icon-catalog.svg" alt="">
            <p class="font-roboto font-h3 text-h3 text-[#454545]">Catalog</p>
          </router-link>
          <router-link class="flex flex-col items-center gap-[8px]" to="/cart">
            <img src="@/assets/images/nav/icon-basket.svg" alt="">
            <p class="font-roboto font-h3 text-h3 text-[#454545] relative">Cart
            <div class="h-[20px] w-[20px] bg-navy absolute text-whiteSmoke flex items-center justify-center top-[-35px] right-[-5px] rounded-full font-roboto text-[14px]">
              {{ cart.length }}
            </div>
            </p>
          </router-link>
          <router-link class="flex flex-col items-center gap-[8px]" to="/profile">
            <img src="@/assets/images/nav/icon-profile.svg" alt="">
            <p class="font-roboto font-h3 text-h3 text-[#454545]">Profile</p>
          </router-link>
        </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from 'vue';
import CatalogView from '@/views/CatalogView.vue';
import axios from 'axios';
import IProduct from '@/interfaces';
import LoaderView from './LoaderView.vue';

export default defineComponent({
  name: 'WrapperView',
  setup() {
    const products = ref<IProduct[]>([]);
    const cart = ref<IProduct[]>([]);
    const isLoading = ref(true);
    const href = ref(window.location.href);
    const searchTerm = ref('');

    const addToCart = (product: IProduct): void => {
      cart.value.push(product);
    };

    const removeFromCart = (index: number): void => {
      cart.value.splice(index, 1);
    };

    const clearCart = (): void => {
      cart.value = [];
    };

    const filteredProducts = computed(() =>
      products.value.filter(product =>
        product.name.toLowerCase().includes(searchTerm.value.toLowerCase())
      )
    );

    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://glance-server.onrender.com/products');
        products.value = response.data;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    onMounted(() => {
      fetchProducts();
      setTimeout(() => {
        isLoading.value = false;
      }, 2950);
    });

    return {
      products,
      cart,
      addToCart,
      removeFromCart,
      clearCart,
      isLoading,
      href,
      searchTerm,
      filteredProducts,
    };
  },
  components: {
    CatalogView,
    LoaderView,
  },
});
</script>
