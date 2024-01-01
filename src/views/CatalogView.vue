<template>
  <div class="container flex flex-col justify-between">
    <h2 class="w-full font-roboto text-h3 font-h3 flex items-center justify-start gap-[4px] mt-[20px] px-base">
      <router-link class="text-[#ABABAB]" to="/">
        Home
      </router-link>/
      <p class="text-[#454545]">{{ $route.params.categoryName }}</p>
    </h2>
    <h3 class="w-full flex items-center justify-start gap-[20px] mt-[32px] px-base">
      <router-link class="flex flex-col items-center gap-[8px]" to="/">
        <img src="../assets/images/catalog/back.svg" alt="">
      </router-link>
      <p class="font-roboto text-h1 font-h1 text-black">{{ $route.params.categoryName }}</p>
    </h3>
    <div class="w-full flex justify-between items-center mt-[32px] px-base">
      <span class="flex justify-center items-center gap-[8px] cursor-pointer font-roboto text-h3 font-h3 text-[#454545]"><img src="../assets/images/catalog/filter.svg" alt="">by popularity</span>
      <span class="flex justify-center items-center gap-[8px] cursor-pointer font-roboto text-h3 font-h3 text-[#454545]"><img src="../assets/images/catalog/sort.svg" alt="">sorting</span>
    </div>

    <div class="w-full mt-[24px] border-y border-silver">
      <div v-if="filteredProducts.length === 0" class="h-[calc(100vh-494.5px)] text-center my-4">
        <p class="font-roboto text-h3 font-h3 text-silver">No products available in this category.</p>
      </div>
      <ProductItemCatalog
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
        @add-to-cart="addToCart"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import IProduct from '@/interfaces/index'
import ProductItemCatalog from '@/components/ProductItemCatalog.vue'

export default defineComponent({
  name: 'CatalogView',
  props: {
    products: {
      type: Array as PropType<IProduct[]>,
      required: true
    }
  },
  methods: {
    addToCart(product: IProduct) {
      this.$emit('add-to-cart', product);
    }
  },
  components: {
    ProductItemCatalog
  },
  computed: {
    filteredProducts() {
      const categoryName = this.$route.params.categoryName;
      const categoryNameLower = Array.isArray(categoryName) ? categoryName[0].toLowerCase() : categoryName.toLowerCase();
      
      return this.products.filter(product => product.type.toLowerCase() === categoryNameLower);
    }
  },
})

</script>
