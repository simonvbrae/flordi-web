<template>
  <v-card class="event-card">
    <v-layout row>
      <!-- <img :src="item.pic" /> -->
      <v-layout
        column
        justify-space-between
        style="padding: 0.8em 1.3em; max-width: 390px"
      >
        <div>
          <h1 class="name">{{ title }}</h1>
          <h3 class="date">{{ day + "/" + month }}</h3>
        </div>
        <div>
          <!-- <p class="desc">{{ item.desc }}</p> -->
          <!-- <div class="location">
                <v-icon v-if="item.address">location_on</v-icon>
                {{ item.address }}
              </div> -->
        </div>
        <div class="date-ribbon">
          <h2>{{ month }}</h2>
          <h1>{{ day }}</h1>
        </div>
      </v-layout>
    </v-layout>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "EventCard",
  props: {
    title: { type: String },
    month: { type: String },
    day: { type: String },
    year: { type: String },
    startHour: { type: String },
    endHour: { type: String },
    url: { type: String },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.eventcardbox {
  max-height: 100px;
}

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
