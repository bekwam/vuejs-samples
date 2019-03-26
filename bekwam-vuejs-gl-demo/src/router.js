import Vue from "vue";
import Router from "vue-router";
import GeneralLedger from "./views/GeneralLedger.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "generalLedger",
      meta: {
        displayName: "General Ledger"
      },
      component: GeneralLedger
    },
    {
      path: "/transactionEntry",
      name: "transactionEntry",
      meta: {
        displayName: "Transaction Entry"
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/TransactionEntry.vue")
    },
    {
      path: "/chartOfAccounts",
      name: "chartOfAccounts",
      meta: {
        displayName: "Chart Of Accounts"
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/ChartOfAccounts.vue")
    }
  ]
});
