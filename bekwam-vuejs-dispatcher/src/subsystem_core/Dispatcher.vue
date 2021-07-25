<template>
    <base-layout>
      <h1 class="title" v-if="loading">Loading</h1>
      <h1 class="title" v-else>Loaded</h1>
      <progress class="progress" v-if="loading"></progress>
      <div class="buttons">
        <button class="button" @click="next" :disabled="mode == 'auto' || loading">Continue</button>
      </div>
    </base-layout>
</template>

<script>
import BaseLayout from "@/subsystem_commons/BaseLayout.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "Dispatcher",
  props: {
    mode: {
      type: String,
      default: "auto"
    }
  },
  data() {
    return {
      loading: false
    }
  },
  components: { BaseLayout },
  computed: {
    ...mapState(["config"])
  },
  methods: {
    ...mapActions(["fetchConfig"]),
    async next() {
      await this.$router.push({name: this.config.subsystemName + ".home"});
    }
  },
  async mounted() {
    try {
        this.loading = true;
        await this.fetchConfig(this.$route.params.key);
        if( this.mode == "auto" ) {
          await this.next();
        }
    } catch(e) {
      await this.$router.push({ name: "keyNotFound" });
    } finally {
      this.loading = false
    }
  }
}
</script>
