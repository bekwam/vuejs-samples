<template>
  <div id="app" class="container mt-2">
    <person-list/>
    <hr>
    <person-details/>
  </div>
</template>

<script>
import PersonList from "./components/PersonList.vue";
import PersonDetails from "./components/PersonDetails.vue";

import "bootstrap/dist/css/bootstrap.css";

import store from "./store";

export default {
  name: "app",
  store,
  components: {
    "person-list": PersonList,
    "person-details": PersonDetails
  }
};
</script>
