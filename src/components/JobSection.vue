<template>
  <div :id="section_id" class="t px-4" style="min-height: 25vh">
    <h1 style="color: rgb(250, 210, 001); font-weight: bold">Join Us</h1>
    <div style="text-align: center">
      <div style="display: inline-block; text-align: left">
        Our cooperative dream is growing faster than a speeding bullet. Do you:
        <ul>
          <li>
            want to contribute your energy in a local sustainable network?
          </li>
          <li>
            want to be part of our community, that makes the world a better
            place?
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
    </div>
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

.content {
  align-items: center;
  text-align: left;
  width: 60%;
}

ul {
  position: relative;
  list-style: none;
}

li::before {
  content: "➔";
  position: absolute;
  left: 0;
}
</style>
