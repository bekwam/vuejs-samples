import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    nextTransactionId: 2,
    transactions: [
      {
        transactionId: 1,
        transactionDate: "2019-03-21",
        journalEntries: [
          {
            journalEntryId: 900,
            accountId: 500,
            account: "Office expense",
            debit: 17.5,
            credit: null,
            memo: "OFFICE SUPPLIES"
          },
          {
            journalEntryId: 901,
            accountId: 100,
            account: "Cash",
            debit: null,
            credit: 17.5,
            memo: "OFFICE SUPPLIES"
          }
        ]
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
    accountTypes: ["Asset", "Revenue", "Liability", "Expense", "Equity"]
  },
  mutations: {
    DELETE_ACCOUNT(state, id) {
      state.accounts = state.accounts.filter(
        account => account.accountId != id
      );
    },
    ADD_ACCOUNT(state, account) {
      state.accounts.push(account);
      state.accounts.sort((a, b) => b.accountId - a.accountId);
    },
    UPDATE_ACCOUNT(state, account) {
      let index = state.accounts.findIndex(
        a => a.accountId == account.accountId
      );
      if (index != -1) {
        Vue.set(state.accounts, index, account);
      }
    },
    ADD_TRANSACTION(state, transaction) {
      let id = state.nextTransactionId++;
      transaction.transactionId = id;
      state.transactions.push(transaction);
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
    },
    addTransaction(context, transaction) {
      context.commit("ADD_TRANSACTION", transaction);
    }
  }
});
