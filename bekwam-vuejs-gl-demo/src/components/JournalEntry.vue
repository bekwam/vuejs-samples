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
      <v-text-field single-line outline v-model="memo"></v-text-field>
    </v-flex>
    <v-flex xs12 mr-1>
      <v-text-field single-line outline v-model="debit" @change="updateDebit"></v-text-field>
    </v-flex>
    <v-flex xs12 mr-1>
      <v-text-field single-line outline v-model="credit" @change="updateCredit"></v-text-field>
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
      type: null,
      memo: null,
      debit: null,
      credit: null
    };
  },
  computed: {
    ...mapState(["accounts"])
  },
  methods: {
    removeJE(id) {
      this.$root.$emit("remove-je-event", id);
    },
    updateDebit() {
      this.$root.$emit("update-debits-event", {
        transactionId: this.id,
        amount: this.debit
      });
    },
    updateCredit() {
      this.$root.$emit("update-credits-event", {
        transactionId: this.id,
        amount: this.credit
      });
    }
  }
};
</script>
