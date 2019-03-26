<template>
  <v-navigation-drawer app>
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">General Ledger</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-divider></v-divider>
    <v-list dense class="pt-0">
      <v-list-tile @click="routeToHome">
        <v-list-tile-content>
          <v-list-tile-title>GL</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="routeToTransactionEntry">
        <v-list-tile-content>
          <v-list-tile-title>Transaction Entry</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">System</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-divider></v-divider>
    <v-list dense class="pt-0">
      <v-list-tile @click="routeToChartOfAccounts">
        <v-list-tile-content>
          <v-list-tile-title>Chart of Accounts</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  methods: {
    routeToHome() {
      this.$router.push("/");
    },
    routeToTransactionEntry() {
      this.$router.push("transactionEntry");
    },
    routeToChartOfAccounts() {
      this.$router.push("chartOfAccounts");
    }
  }
};
</script>