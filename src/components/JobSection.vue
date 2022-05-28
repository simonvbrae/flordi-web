<template>
  <div :id="section_id" class="t px-4">
    <h1>Join Us</h1>

    Our cooperative dream is growing faster than a speeding bullet. Do you:
    <ul>
      <li>want to contribute your energy in a local sustainable network?</li>
      <li>
        want to be part of our community, that makes the world a better place?
      </li>
      <li>Do you have great ideas that should come alive?</li>
    </ul>

    Well then if you want to join us, you can!
    <br />
    We are looking for:
    <ul>
      <li>Students & flexi's in the café</li>
      <li>Permanent employee in the café</li>
      <li>Volunteers</li>
      <li>Social entrepreneurs</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "JobSection",
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
</style>
