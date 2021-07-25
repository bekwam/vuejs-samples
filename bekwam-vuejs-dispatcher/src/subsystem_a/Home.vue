<template>
  <base-layout>
    <h1 class="title">Page A</h1>
    <div class="buttons">
      <router-link :to="{ name: 'dispatcher' }" v-slot="{ navigate }">
        <button class="button" @click="navigate">Return</button>
      </router-link>
    </div>
  </base-layout>
</template>

<script>
import BaseLayout from "../subsystem_commons/BaseLayout.vue";

export default {
  name: "a.Home",
  components: { BaseLayout }
}
</script>

<style scoped>

</style>