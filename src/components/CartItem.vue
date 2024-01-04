<template>
    <div class="w-[calc(100%+5px)] h-[181px] flex justify-between items-start gap-[24px] py-[24px] px-[16px]">
      <img class="w-[77px]" :src="require(`../assets/images/home/discounts/${cartItem.image}`)" alt="">
      <div class="w-[242px] h-full flex flex-col justify-between items-start">
        <div class="w-full flex justify-between items-start">
          <h2 class="font-roboto text-h2 font-normal text-black">{{ cartItem.name }}</h2>
          <input type="checkbox" name="" id="">
        </div>
        <div class="flex justify-start items-end gap-[8px] font-roboto">
          <h2 class="text-h1 font-medium">{{ cartItem.price }}$</h2>
          <h3 class="text-h3 line-through text-[#ABABAB]">{{ cartItem.oldPrice }}$</h3>
        </div>
        <div class="flex justify-between items-center gap-[30px]">
          <button class="shadow-xl w-[32px] h-[32px] rounded-[4px] flex items-center justify-center"><img src="../assets/images/home/heart.svg" alt=""></button>
          <button class="h-[32px] w-[32px] ml-[20px]"><img src="../assets/images/cart/remove.svg" alt=""></button>
          <div class="w-[99px] h-[32px] flex justify-between items-center py-[9px] px-[12px] border-2 border-purple rounded-[4px]">
            <button class="">-</button>
            <p class="font-roboto text-black text-h3 font-h3">1</p>
            <button class="">+</button>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import IProduct from '@/interfaces';

export default defineComponent({
  name: 'CartItem',
  props: {
    cartItem: {
      type: Object as PropType<IProduct>,
      required: true,
    },
  },
});
</script>
