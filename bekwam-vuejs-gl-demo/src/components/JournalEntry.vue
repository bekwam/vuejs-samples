<template>
  <v-layout row pa-1>
    <v-flex xs12 mr-1>
      <v-select :items="accounts" required v-model="type">
        <template
          slot="selection"
          slot-scope="data"
        >{{ data.item.accountId }} - {{ data.item.name }}</template>
        <template slot="item" slot-scope="data">{{ data.item.accountId }} - {{ data.item.name }}</template>
      </v-select>
    </v-flex>
    <v-flex xs12 mr-1>
      <v-text-field single-line outline></v-text-field>
    </v-flex>
    <v-flex xs12 mr-1>
      <v-text-field single-line outline></v-text-field>
    </v-flex>
    <v-flex xs12 mr-1>
      <v-text-field single-line outline></v-text-field>
    </v-flex>
    <v-flex xs12>
      <v-btn @click="removeJE(lineNo)">Remove</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["id"],
  data() {
    return {
      type: null
    };
  },
  computed: {
    ...mapState(["accounts"])
  },
  methods: {
    removeJE(id) {
      this.$root.$emit("remove-je-event", id);
    }
  }
};
</script>
