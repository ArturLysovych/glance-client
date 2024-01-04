<template>
    <div class="container">
        <div class="w-full h-[calc(100vh-86px)] flex flex-col items-center justify-center gap-[28px]">
            <h2 class="text-h1 font-roboto font-medium text-black">Order completed</h2>
            <img class="h-[244px]" src="../assets/images/orderDone/completedOrder.svg" alt="">
            <div class="">
                <p class="text-h2 font-semibold text-black text-center">Delivery is expected on <span class="text-h1 text-purple font-bold">??.?? - ??.??</span></p>
                <p class="text-h2 font-semibold text-black text-center">Wait for a call in <span class="text-h1 text-purple font-bold">2 - 3 hours</span></p>
            </div>
            <p class="text-[#454545] text-h3 font-normal">Lorem ipsum dolor sit amet.</p>
            <router-link to="/">
              <button class="w-[267px] h-[49px] bg-navy text-whiteSmoke text-h2 font-h2 rounded-[8px]">Choose a category</button>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OrderDoneView',
});
</script>