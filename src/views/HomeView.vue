<template>
  <div class="container">
    <div class="w-[865px] h-[149px] flex justify-between items-center mt-[40px]">
      <img class="w-[275px] h-[149px] cursor-pointer" v-for="i of 3" :key="i" src="../assets/images/home/banner.svg" alt="">
    </div>
    <div class="h-[214px] w-full flex flex-col justify-between mt-[40px]">
      <div class="w-full flex flex-col justify-start px-base">
        <h2 class="text-h1 font-roboto text-black font-h1">Catalog</h2>
        <div class="w-auto h-[163px] mt-[28px] flex items-center justify-start gap-[16px] custom-scrollbar">
          <div class="h-[163px] w-[98px] flex flex-col justify-center items-center gap-[16px]"
            v-for="category of categories" :key="category.id"
          >
            <router-link :to="{ name: 'catalog', params: { categoryName: category.name } }">
              <div class="h-[128px] w-[98px] bg-[#D2D7FA] rounded-lg flex items-center justify-center">
                <img class="scale-[.6]" :src="require(`../assets/images/home/category/${category.image}`)" alt="">
              </div>
            </router-link> 
            <h3 class="text-h3 font-roboto font-h4 text-[#000000]">{{ category.name }}</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex flex-col justify-start mt-[40px]">
      <h2 class="text-h1 font-roboto text-black font-h1 px-base">Discounts</h2>
      <div class="w-auto h-[435px] mt-[28px] flex items-center justify-start gap-[32px] py-[20px] border-y border-silver px-base custom-scrollbar">
        <ProductItemHome
          v-for="product of discountedProducts"
          :key="product.id"
          :product="product"
          @add-to-cart="addToCart"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProductItemHome from '@/components/ProductItemHome.vue';
import { categories, discountedProducts } from '@/constants/home.constants';
import IProduct from '@/interfaces';

export default defineComponent({
  name: 'HomeView',
  components: {
    ProductItemHome,
  },
  methods: {
    addToCart(product: IProduct) {
      this.$emit('add-to-cart', product);
    }
  },
  data() {
    return {
      categories,
      discountedProducts
    };
  },
})
</script>
