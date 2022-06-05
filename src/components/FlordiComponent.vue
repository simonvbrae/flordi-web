<template>
  <div>
    <hr />
    <EventsSection section_id="events"></EventsSection>
    <hr />
    <AboutSection section_id="mission"></AboutSection>
    <hr />
    <MenuSection section_id="menu"></MenuSection>
    <hr />
    <StudioSection section_id="studio"></StudioSection>
    <hr />
    <JobSection section_id="jobs"></JobSection>
    <hr />
    <InfoSection section_id="contact"></InfoSection>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import EventsSection from "@/components/EventsSection.vue";
import InfoSection from "@/components/InfoSection.vue";
import MenuSection from "@/components/MenuSection.vue";
import JobSection from "@/components/JobSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import StudioSection from "@/components/StudioSection.vue";

export default Vue.extend({
  name: "FlordiView",
  components: {
    InfoSection,
    EventsSection,
    MenuSection,
    JobSection,
    AboutSection,
    StudioSection,
  },
});
</script>

<style></style>
