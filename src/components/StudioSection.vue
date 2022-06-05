<template>
  <div :id="section_id" class="t px-4" style="min-height: 25vh">
    <img
      style="width: 30vw; max-width: 200px; margin-bottom: 10px"
      src="@/assets/images/title_studio.png"
    />
    <p class="content">
      We want the stage to be occupied and crazy ideas being tried out.
      Therefore, we are building two 6x5 rehearsal studios, in the building next
      to the café. We provide a place for you to rehearse and try out with your
      band. Looking for such a place? Contact us and we'll show you around!
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "StudioSection",
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
