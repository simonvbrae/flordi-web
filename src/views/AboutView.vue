<template>
  <div class="about">
    <h1>This is an about page</h1>
    <MainMenuComponent></MainMenuComponent>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MainMenuComponent from "@/components/MainMenuComponent.vue"; // @ is an alias to /src

export default Vue.extend({
  name: "MainView",
  components: {
    MainMenuComponent,
  },
});
</script>
