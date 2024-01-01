<template>
    <div class="h-[395px] w-[144px] flex flex-col items-center justify-between">
      <img class="h-[158px] w-[114px]" :src="require(`../assets/images/home/discounts/${product.image}`)" alt="">
      <div class="flex justify-center items-center gap-[6px] ">
        <div class="w-[12px] h-[12px] rounded-full border border-silver"></div>
        <div class="w-[12px] h-[12px] rounded-full bg-navy"></div>
        <div class="w-[12px] h-[12px] rounded-full border border-silver"></div>
      </div>
      <h2 class="font-roboto text-h2 font-h2">{{ product.name }}</h2>
      <div class="w-full flex justify-between items-end">
        <h3 class="font roboto text-h2 font-semibold">{{ product.price }}$</h3>
        <h4 class="font-roboto text-h3 font-h6 line-through">{{ product.oldPrice }}$</h4>
      </div>
      <div class="w-[131px] flex justify-between items-center">
        <h3 v-if="product.inStock" class="text-[#169B00] font-roboto text-h3 font-light">In stock</h3>
        <h3 v-else class="text-red-500 font-roboto text-h3 font-light">Out of stock</h3>
        <button class="shadow-xl w-[35px] h-[32px] rounded-[4px] flex items-center justify-center"><img src="../assets/images/home/heart.svg" alt=""></button>
      </div>
      <button class="bg-navy w-[131px] h-[44px] rounded-[8px] font-roboto font-medium text-h3 text-whiteSmoke">Add to cart</button>
    </div>
</template>
  
<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
  