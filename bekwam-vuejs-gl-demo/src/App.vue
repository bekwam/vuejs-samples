<template>
  <v-app>
    <Navigation/>
    <v-toolbar app>{{ $route.meta.displayName }}</v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Navigation from "./components/Navigation";

export default {
  name: "App",
  components: {
    HelloWorld,
    Navigation
  }
};
</script>
