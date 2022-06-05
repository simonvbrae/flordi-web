<template>
  <div :id="section_id" class="t px-4" style="min-height: 25vh">
    <img
      style="width: 30vw; max-width: 200px; margin-bottom: 10px"
      src="@/assets/images/title_about.png"
    />
    <p class="content">
      Just like the Flordi flowers shop did previously, Flordi café spreads
      colour and joy in the neighbourhood. A new generation came and transformed
      the flower store into a music café, giving both upcoming and established
      local artists a place to perform and grow their musical network. Flordi
      café means sharing the joy of life, to dance, eat and drink together.
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AboutSection",
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
