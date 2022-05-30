<template>
  <div :id="section_id" class="t px-4" style="min-height: 25vh">
    <h1 class="text mb-3" style="color: rgb(250, 210, 001); font-weight: bold">
      Contact
    </h1>
    <div style="text-align: center">
      <div style="display: inline-block; text-align: left">
        <b>Hello there!</b>
        <ul>
          <li>Do you want to play on stage?</li>
          <li>Is there a project you'd like to propose?</li>
          <li>Other questions & suggestions?</li>
        </ul>
        Come visit the café and make it happen or
        <a
          href="mailto:info@flordi.be"
          target="_blank"
          style="color: rgb(217, 217, 217)"
          >send us an email</a
        >.
        <br />
        <br />
      </div>
    </div>
    <div
      class="mapDiv"
      style="height: max(320px, 30vw); width: max(320px, 30vw)"
    >
      <l-map
        v-if="showMap"
        :zoom="zoom"
        :center="center"
        :options="mapOptions"
        style="height: 100%; z-index: 0"
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
  name: "InfoSection",
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

<style scoped>
.t {
  margin-bottom: 10vh;
}

.mapDiv {
  align-self: center;
  margin: auto;
}

.content {
  text-align: left;
}
ul {
  position: relative;
  list-style: none;
}

li::before {
  content: "➔";
  position: absolute;
  left: 0;
}
</style>
