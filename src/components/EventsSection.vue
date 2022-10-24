<template>
  <div
    ref="widthRefElement"
    :id="section_id"
    class="t px-4 mx-100"
    style="min-height: 25vh"
  >
    <img
      style="width: 30vw; max-width: 200px; margin-bottom: 10px"
      src="@/assets/images/title_events.png"
    />
    <p class="blockText">
      Before the café opens, we're already organising jam sessions!
    </p>
    <div class="embed-responsive embed-responsive-16by9 z-depth-1">
      <iframe
        class="embed-responsive-item .hoverable"
        src="https://www.youtube.com/embed/FDmPGy4IkFE"
        allowfullscreen
        :style="{ height: videoHeight + 'px', width: '100%' }"
      ></iframe>
    </div>

    <v-container class="event-container">
      <v-row v-for="e in events" :key="e.title">
        <EventCard
          :title="e.title"
          :month="e.month"
          :day="e.day"
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
    const events = [
      {
        title: "Flordi werkweekend",
        month: 10,
        day: 24,
        startHour: "12:00-19:00",
        endHour: "19:00",
        URL: "facebook.com",
      },
      {
        title: "Flordi werkweekend",
        month: 10,
        day: 24,
        startHour: "12:00-19:00",
        endHour: "19:00",
        URL: "facebook.com",
      },
      {
        title: "Flordi werkweekend",
        month: 10,
        day: 24,
        startHour: "12:00-19:00",
        endHour: "19:00",
        URL: "facebook.com",
      },
      {
        title: "Flordi werkweekend",
        month: 10,
        day: 24,
        startHour: "12:00-19:00",
        endHour: "19:00",
        URL: "facebook.com",
      },
      {
        title: "Flordi werkweekend",
        month: 10,
        day: 24,
        startHour: "12:00-19:00",
        endHour: "19:00",
        URL: "facebook.com",
      },
      {
        title: "Flordi werkweekend",
        month: 10,
        day: 24,
        startHour: "12:00-19:00",
        endHour: "19:00",
        URL: "facebook.com",
      },
      {
        title: "Flordi werkweekend",
        month: 10,
        day: 24,
        startHour: "12:00-19:00",
        endHour: "19:00",
        URL: "facebook.com",
      },
      {
        title: "Flordi werkweekend",
        month: 10,
        day: 24,
        startHour: "12:00-19:00",
        endHour: "19:00",
        URL: "facebook.com",
      },
    ];
    return {
      clientWidth: 0,
      events: events,
    };
  },
  computed: {
    videoHeight(): number {
      return (this.$data.clientWidth * 9) / 16;
    },
  },
  mounted() {
    this.$data.clientWidth = (
      this.$refs["widthRefElement"] as HTMLElement
    ).clientWidth;

    window.addEventListener("resize", () => {
      this.$data.clientWidth = (
        this.$refs["widthRefElement"] as HTMLElement
      ).clientWidth;
    });
  },
});
</script>

<style scoped>
.scrollbar {
  color: aquamarine;
  fill-opacity: 50%;
}
.event-container {
  max-height: 100px;
  overflow: auto;
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
