<template>
  <div id="app" class="container mt-2">
    <person-list/>
    <person-details-popup/>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";

import store from "./store";

import PersonList from "./components/PersonList.vue";
import PersonDetails from "./components/PersonDetails.vue";

export default {
  name: "app",
  store,
  components: {
    "person-list": PersonList,
    "person-details-popup": PersonDetails
  }
};
</script>
