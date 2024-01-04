<template>
  <div class="container">
    <div class="w-full h-[calc(100vh-275px)] font-roboto flex flex-col justify-between items-center pt-[32px] pb-[49px] px-[34px]">
      <h2 class="text-h1 font-semibold text-black">Error 404</h2>
      <img class="h-[297px]" src="../assets/images/err/not-found-ill.svg" alt="">
      <h3 class="text-h2 font-normal text-[#454545] text-center">Reload the page or check your internet connection</h3>
      <button class="bg-navy w-[267px] h-[49px] text-whiteSmoke flex justify-center items-center gap-[16px] rounded-[8px]"
        @click="reloadPage"
      >Reload <img src="../assets/images/err/reload.svg" alt=""></button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NotFoundView',
  methods: {
    reloadPage() {
      window.location.reload();
    }
  }
})
</script>
  