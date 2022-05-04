<template>
  <div class="t px-4" :id="section_id">
    <h1 class="text mb-3">Contact</h1>
    <div style="height: 90vw; width: 100%">
      <l-map
        v-if="showMap"
        :zoom="zoom"
        :center="center"
        :options="mapOptions"
        style="height: 100%; z-index: 1"
        @update:center="centerUpdate"
        @update:zoom="zoomUpdate"
      >
        <l-tile-layer :url="url" :attribution="attribution" />
        <l-marker :lat-lng="markerLocation" />
      </l-map>
    </div>
    <h5 class="mt-2 text">Café Flordi - Sint-Salvatorstraat 7, 9000 Gent</h5>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import L, { LatLng, latLng } from "leaflet";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default Vue.extend({
  name: "ContactSection",
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  props: { section_id: { type: String } },
  data() {
    let zoom = 16;
    let center: LatLng = latLng(51.06448892948631, 3.729019813756584);
    return {
      zoom: zoom,
      currentZoom: zoom,
      center: center,
      currentCenter: center,
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      markerLocation: center,
      mapOptions: {
        zoomSnap: 0.5,
      },
      showMap: true,
    };
  },
  methods: {
    zoomUpdate(zoom: number) {
      this.currentZoom = zoom;
    },
    centerUpdate(center: LatLng) {
      this.currentCenter = center;
    },
  },
});
</script>

<style scoped></style>
