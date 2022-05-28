<template>
  <div></div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "EventCard",
  props: {
    title: { type: String },
    date: { type: String },
    startHour: { type: String },
    endHour: { type: String },
    url: { type: String },
  },
  data() {
    return {
      events: [
        {
          title: "Flordi werkweekend",
          date: "4/04",
          startHour: "12:00-19:00",
          endHour: "19:00",
          URL: "facebook.com",
        },
      ],
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.scrollbar {
  color: aquamarine;
  fill-opacity: 50%;
}

.title {
  fill-opacity: 50%;
  background-color: blue;
}

.date {
  fill-opacity: 50%;
  background-color: red;
}
.t {
  margin-bottom: 10vh;
}
</style>
