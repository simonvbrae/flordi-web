<template>
  <div :id="section_id" class="t px-4" style="min-height: 25vh">
    <h1 style="color: rgb(250, 210, 001); font-weight: bold">Menu</h1>
    <p class="content">
      <b>Vegan menu</b>
      <br />
      We work together with local organic and biodynamic farmers who are working
      hard on their fields to provide with amazing organic vegetables for us.
      Real food, with deep colors. Our menu is plant based and evolves with the
      seasons. We follow the rhythm of nature and that of small-scaled farmers.
      Good food for body, soul and mind.
      <br />
      <br />
      <b>Local breweries</b>
      <br />
      We promote and support local small-scaled breweries. Try out the new ones
      our enjoy the old Belgian recipes, it's up to you!
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "MenuSection",
  props: {
    section_id: { type: String },
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
