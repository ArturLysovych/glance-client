<template>
    <div>Logo</div>
    <router-view/>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/catalog">Catalog</router-link> |
      <router-link to="/cart">Cart</router-link> |
      <router-link to="/profile">Profile</router-link>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WrapperView'
})
</script>
