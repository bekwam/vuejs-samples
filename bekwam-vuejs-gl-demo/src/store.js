import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nextAccountId: 1,
    transactions: [
      {
        journalEntryId: 900,
        transactionId: 100,
        transactionDate: "2019-03-21 12:00:00",
        accountId: 500,
        account: "Office expense",
        debit: 0,
        credit: 17.5
      },
      {
        journalEntryId: 901,
        transactionId: 100,
        transactionDate: "2019-03-21 12:00:00",
        accountId: 100,
        account: "Cash",
        debit: 17.5,
        credit: 0
      }
    ],
    accounts: [
      {
        accountId: 100,
        name: "Cash",
        type: "Asset"
      },
      {
        accountId: 110,
        name: "Accounts receivable",
        type: "Asset"
      },
      {
        accountId: 300,
        name: "Vue.js consulting services sales",
        type: "Revenue"
      },
      {
        accountId: 500,
        name: "Office expense",
        type: "Expense"
      }
    ],
    accountTypes: ["Asset", "Revenue", "Expense"]
  },
  mutations: {
    DELETE_ACCOUNT(state, id) {
      state.accounts = state.accounts.filter(
        account => account.accountId != id
      );
    },
    ADD_ACCOUNT(state, account) {
      account.accountId = state.nextAccountId++;
      state.accounts.push(account);
    },
    UPDATE_ACCOUNT(state, account) {
      var store_a = state.accounts.find(a => a.accountId == account.accountId);
      if (store_a != null) {
        store_a.accountName = account.name;
        store_a.accountType = account.type;
      }
    }
  },
  actions: {
    deleteAccount(context, id) {
      context.commit("DELETE_ACCOUNT", id);
    },
    addAccount(context, account) {
      context.commit("ADD_ACCOUNT", account);
    },
    updateAccount(context, account) {
      context.commit("UPDATE_ACCOUNT", account);
    }
  }
});
