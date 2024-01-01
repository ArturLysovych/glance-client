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
        v-for="product of filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IProduct from '@/interfaces/index'
import ProductItemCatalog from '@/components/ProductItemCatalog.vue'

const products = [
  { id: 1, type: 'Smartphones' , name: 'Apple IPhone 13 128GB', info: 'Screen: 6.7"/1080x2388\nNumber of cores: 8\nPower supply power: 20 W', image: 'iphone13.png', price: 750, oldPrice: 800, inStock: true },
  { id: 2, type: 'Smartphones' , name: 'Apple IPhone 12 128GB', info: 'Screen: 6.7"/1080x2388\nNumber of cores: 8\nPower supply power: 20 W', image: 'iphone12.png', price: 650, oldPrice: 729, inStock: false },
  { id: 3, type: 'Smartphones' , name: 'Apple IPhone 13 64GB', info: 'Screen: 6.7"/1080x2388\nNumber of cores: 8\nPower supply power: 20 W', image: 'iphone13.png', price: 750, oldPrice: 800, inStock: true },
  { id: 4, type: 'Laptops', name: 'Dell XPS 13', info: 'Processor: Intel Core i7\nRAM: 16GB\nStorage: 512GB SSD\nDisplay: 13.4" 4K UHD', image: 'dell_xps_13.png', price: 1200, oldPrice: 1300, inStock: true },
  { id: 5, type: 'Laptops', name: 'MacBook Air', info: 'Processor: Apple M1\nRAM: 8GB\nStorage: 256GB SSD\nDisplay: 13.3" Retina', image: 'macbook_air.png', price: 999, oldPrice: 1099, inStock: true },
];

export default defineComponent({
  name: 'CatalogView',
  data() {
    return {
      products,
    };
  },
  components: {
    ProductItemCatalog
  },
  computed: {
    filteredProducts() {
      const categoryName = this.$route.params.categoryName;
      const categoryNameLower = Array.isArray(categoryName) ? categoryName[0].toLowerCase() : categoryName.toLowerCase();
      
      return (this.$data as { products: IProduct[] }).products.filter(product => product.type.toLowerCase() === categoryNameLower);
    },
  },
})

</script>
