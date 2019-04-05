<template>
  <v-data-table :headers="headers" :items="denormalizedTransactions">
    <template v-slot:items="props">
      <td>{{ props.item.transactionId }}</td>
      <td>{{ props.item.transactionDate }}</td>
      <td>{{ props.item.accountId }}</td>
      <td>{{ props.item.account }}</td>
      <td>{{ props.item.debit }}</td>
      <td>{{ props.item.credit }}</td>
    </template>
  </v-data-table>
</template>
<script>
export default {
  data() {
    return {
      headers: [
        { text: "Transaction Id", value: "transactionId", sortable: false },
        { text: "Date", value: "transactionDate" },
        { text: "Account Id", value: "accountId" },
        { text: "Account", value: "account" },
        { text: "Debit", value: "debit" },
        { text: "Credit", value: "credit" }
      ]
    };
  },
  computed: {
    denormalizedTransactions() {
      let dts = [];
      this.$store.state.transactions.forEach(t => {
        t.journalEntries.forEach(je => {
          let dt = {};
          dt.transactionId = t.transactionId;
          dt.transactionDate = t.transactionDate;
          dt.accountId = je.accountId;
          dt.account = je.account;
          dt.debit = je.debit;
          dt.credit = je.credit;
          dts.push(dt);
        });
      });

      return dts;
    }
  }
};
</script>
