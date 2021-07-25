<template>
  <base-layout>
    <h1 class="title">Landing</h1>
    <aside class="menu">
      <p class="menu-label">
        Pages
      </p>
      <ul class="menu-list">
        <router-link v-for="k in keys" :key="k" :to="{
          name: 'dispatcher',
          params: {
            key: k
          },
          query: {
            mode: 'manual'
          }}">
          {{ k }}
        </router-link>
      </ul>
    </aside>
  </base-layout>
</template>

<script>
import BaseLayout from "@/subsystem_commons/BaseLayout.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "Landing.vue",
  components: { BaseLayout },
  computed: { ...mapState(["keys"]) },
  methods: { ...mapActions(["fetchKeys"]) },
  mounted() {
    this.fetchKeys();
  }
}
</script>

<style scoped>

</style>