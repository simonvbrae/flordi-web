<template>
  <div :id="item_id" class="t px-4" style="min-height: 25vh">
    <h1 style="color: rgb(250, 210, 001); font-weight: bold">
      {{ item_title }}
    </h1>
    <p class="content">{{ content }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "MainPageItem",
  props: {
    item_title: { type: String },
    content: { type: String },
    item_id: { type: String },
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
