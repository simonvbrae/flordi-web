<template>
  <div :id="section_id" class="t px-4" style="min-height: 25vh">
    <img
      style="width: 30vw; max-width: 200px; margin-bottom: 10px"
      src="@/assets/images/title_jobs.png"
    />
    <div style="text-align: center">
      <div style="display: inline-block; text-align: left">
        Our cooperative dream is growing faster than a speeding bullet. Do you:
        <ul>
          <li>
            Want to contribute your energy in a local sustainable network?
          </li>
          <li>
            Want to be part of our community, that makes the world a better
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
          <li>
            <a class="blockURL" target="_blank" :href="musicCafeManagerURL"
              >Bar Manager</a
            >
          </li>
          <li>
            <a class="blockURL" target="_blank" :href="kitchenManagerURL"
              >Vegan Cook & Kitchen Manager</a
            >
          </li>
          <li>
            <a class="blockURL" target="_blank" :href="projectCoordinatorURL"
              >Project Coordinator</a
            >
          </li>
          <li>
            IT enthousiasts:
            <a class="blockURL" href="https://github.com/simonvbrae/flordi-web"
              >our website is open source!</a
            >
          </li>
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
  data() {
    return {
      musicCafeManagerURL:
        "https://11.be/vacatures/verantwoordelijke-muziekcafe",
      kitchenManagerURL:
        "https://11.be/vacatures/vegan-kok-en-keukenverantwoordelijke",
      projectCoordinatorURL:
        "https://11.be/vacatures/projectcoordinator-sociale-onderneming",
    };
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
