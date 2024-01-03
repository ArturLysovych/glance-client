<template>
    <div class="h-[271px] w-[calc(100%+5px)] flex items-start justify-between px-[16px] py-[24px]">
        <div class="w-[101px] h-[159px] flex flex-col gap-[12px]">
          <img class="w-[101px]" :src="require(`../assets/images/home/discounts/${product.image}`)" alt="">
          <div class="flex justify-center items-center gap-[6px] ">
            <div class="w-[12px] h-[12px] rounded-full border border-silver"></div>
            <div class="w-[12px] h-[12px] rounded-full bg-navy"></div>
            <div class="w-[12px] h-[12px] rounded-full border border-silver"></div>
          </div>
        </div>
        <div class="w-[223px] h-full font-roboto flex flex-col justify-between items-start">
          <h2 class="text-h1 font-h1 text-black">{{ product.name }}</h2>
          <p class="text-h3 font-h3 text-[#454545]">{{ product.info }}</p>
          <div class="w-full flex justify-between font-roboto">
            <h3 v-if="product.inStock" class="text-[#169B00] text-h3 font-light">In stock</h3>
            <h3 v-else class="text-red-500 text-h3 font-light">Out of stock</h3>
            
            <h3 class="text-h4 font-semibold">{{ product.price }}$</h3>
          </div>
          <div class="flex justify-center items-center gap-[20px]">
            <button class="shadow-xl w-[47px] h-[44px] rounded-[4px] flex items-center justify-center"><img src="../assets/images/home/heart.svg" alt=""></button>
            <button class="bg-navy w-[143px] h-[44px] rounded-[8px] font-roboto font-medium text-h3 text-whiteSmoke"
            @click="addToCart"
            >Add to cart</button>
          </div>
        </div>
      </div>
</template>
  
<script lang="ts">
import { PropType } from 'vue'
import IProduct from '@/interfaces/index'

export default {
  props: {
    product: {
      type: Object as PropType<IProduct>,
      required: true
    }
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.product);
    }
  },
  computed: {
    filteredProducts() {
      const categoryName = this.$route.params.categoryName;
      const categoryNameLower = Array.isArray(categoryName) ? categoryName[0].toLowerCase() : categoryName.toLowerCase();
      
      return (this.$data as { products: IProduct[] }).products.filter(product => product.type.toLowerCase() === categoryNameLower);
    },
  },
};
</script>
  