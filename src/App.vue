<template>
  <app-header></app-header>
  <router-view></router-view>
</template>
<script>
import AppHeader from "./components/AppHeader.vue";
import { RouterView } from "vue-router";

export default {
  name: "App",
  components: {
    AppHeader,
  },
};
</script>
<style></style>
