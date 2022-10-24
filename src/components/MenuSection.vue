<template>
  <div :id="section_id" class="t px-4" style="min-height: 25vh">
    <img
      style="width: 30vw; max-width: 200px; margin-bottom: 10px"
      src="@/assets/images/title_menu.png"
    />
    <p class="content">
      <ElusiveBeer></ElusiveBeer>

      <br />
      <b>Local breweries</b>
      <br />
      We promote and support local small-scaled breweries. Try out the new ones
      or enjoy the old Belgian recipes, it's up to you!
      <br />
      <br />
      <b>Vegan menu</b>
      <br />
      We work together with local organic and biodynamic farmers who are working
      hard on the fields to provide amazing organic vegetables for all of us.
      Real food, with deep colors. Our menu is plant based and evolves with the
      seasons. We follow the rhythm of nature and that of small-scaled farmers.
      Good food for body, soul and mind.
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ElusiveBeer from "@/components/ElusiveBeer.vue";

export default Vue.extend({
  name: "MenuSection",
  props: {
    section_id: { type: String },
  },
  components: {
    ElusiveBeer,
  },
  data() {
    return { preBeer: false };
  },
  methods: {
    hi() {
      this.$data.preBeer = !this.$data.preBeer;
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.t {
  margin-bottom: 10vh;
}

.content {
  text-align: left;
}
</style>
