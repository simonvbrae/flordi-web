<template>
  <div class="t px-4" :id="section_id">
    <v-container>
      <v-row v-for="e in events" :key="e.title">
        <v-col cols="3"> {{ e.title }} </v-col>
        <v-col cols="3"> {{ e.date }} </v-col>
        <v-col cols="3"> {{ e.hour }} </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "EventsSection",
  props: {
    section_id: { type: String },
  },
  data() {
    return {
      events: [
        { title: "Verjaardag Simon", date: "4/04", hour: "18:00" },
        { title: "Verjaardag Klaartje", date: "1/09", hour: "18:00" },
        { title: "Verjaardag Michelle", date: "22/04", hour: "18:00" },
        { title: "Verjaardag Judith", date: "21/10", hour: "18:00" },
        { title: "Verjaardag Janine", date: "21/11", hour: "18:00" },
        { title: "Verjaardag Bram", date: "5/08", hour: "18:00" },
        { title: "Verjaardag Iris", date: "2/08", hour: "18:00" },
        { title: "Verjaardag Marie", date: "4/03", hour: "18:00" },
        { title: "Verjaardag Casper", date: "4/04", hour: "18:00" },
        { title: "Verjaardag Casper", date: "3/07", hour: "18:00" },
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
