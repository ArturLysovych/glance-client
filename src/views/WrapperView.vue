<template>
  <div class="w-full flex items-center justify-center bg-[#222222]">
    <div class="container overflow-hidden shadow-white shadow-lg">
      <div class="h-[189px] w-[calc(100%+5px)] bg-whiteSmoke rounded-b-[8px] flex flex-col justify-end items-center px-[16px] py-[28px] gap-[24px] border border-b-silver">
        <img width="118" height="32" src="@/assets/images/header/glance.svg" alt="">
        <div class="w-full bg-[#DEDEDE] h-[47px] rounded-[8px] p-[16px] flex items-center justify-start gap-[17px]">
          <img class="cursor-pointer" height="16" width="16" src="@/assets/images/header/icon-search.svg" alt="">
          <input class="h-full w-full bg-transparent outline-none font-roboto text-h2 font-h2 text-[#454545]" type="text" placeholder="search">
        </div>
      </div>
      <router-view />
        <nav class="w-full h-[86px] border-t border-[#C1C1C1] flex justify-between items-center px-[30px]">
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
            <p class="font-roboto font-h3 text-h3 text-[#454545]">Cart</p>
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
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WrapperView'
})
</script>
