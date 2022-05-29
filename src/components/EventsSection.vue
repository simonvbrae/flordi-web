<template>
  <div :id="section_id" class="t px-4 mx-100">
    <h1 class="text mb-3">Events</h1>
    <p class="text">An eager stage awaits you... in café Flordi</p>
    <v-container>
      <v-row v-for="e in events" :key="e.title">
        <EventCard
          :title="e.title"
          :date="e.date"
          :startHour="e.startHour"
          :endHour="e.endHour"
          :url="e.URL"
        />
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import EventCard from "@/components/EventCard.vue";

export default Vue.extend({
  name: "EventsSection",
  props: {
    section_id: { type: String },
  },
  components: {
    EventCard,
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
