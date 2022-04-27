<template>
  <div>
    <h1><a :id="item_id"></a>{{ item_title }}</h1>
    <p>{{ content }}</p>
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
<style scoped></style>
