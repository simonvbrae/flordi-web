<template>
  <div class="container">
    <scrollactive class="container">
      <div class="row">
        <div class="col-sm-3">
          <a href="#home" class="scrollactive-item margin">Home</a>
        </div>
        <div class="col-sm-3">
          <a href="#about-us" class="scrollactive-item margin">About Us</a>
        </div>
        <div class="col-sm-3">
          <a href="#portfolio" class="scrollactive-item margin">Portfolio</a>
        </div>
        <div class="col-sm-3">
          <a href="#contact" class="scrollactive-item margin">Contact</a>
        </div>
      </div>
    </scrollactive>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "MainMenuComponent",
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex; /* or inline-flex */
}
.margin {
  margin-right: 6px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
