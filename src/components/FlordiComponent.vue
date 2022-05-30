<template>
  <div>
    <hr />
    <EventsSection section_id="events"></EventsSection>
    <hr />
    <MainPageItem
      item_title="About"
      item_id="about"
      content="Just like the Flordi flowers shop did previously, Flordi café spreads colour and joy in the neighbourhood. 
      A new generation came and transformed the flower store into a music café, 
      giving both upcoming and established local artists a place to perform and grow their musical network. 
      Flordi café means sharing the joy of life, to dance, eat and drink together."
      ><a id="mission"></a><a id="mission"></a
    ></MainPageItem>
    <hr />
    <MenuSection section_id="menu"></MenuSection>
    <hr />
    <MainPageItem
      item_title="Studio"
      item_id="studio"
      content="We want our stage to be occupied with crazy ideas being tried out. Therefore, we are building two rehearsal studios of 6 x 5 m right next to the café. We provide a place for you to rehearse and try out. Looking for such a place with your band? Contact us and we'll show you the place!"
      ><a id="studio"></a
    ></MainPageItem>
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
import MainPageItem from "@/components/MainPageItem.vue";

export default Vue.extend({
  name: "FlordiView",
  components: {
    MainPageItem,
    InfoSection,
    EventsSection,
    MenuSection,
    JobSection,
  },
});
</script>

<style></style>
