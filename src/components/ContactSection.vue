<template>
  <div :id="section_id" style="height: 500px; width: 100%">
    <l-map
      v-if="showMap"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      style="height: 80%"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
      <l-tile-layer :url="url" :attribution="attribution" />
      <l-marker :lat-lng="withTooltip">
        <l-tooltip :options="{ permanent: true, interactive: true }">
          <div @click="innerClick">
            I am a tooltip
            <p v-show="showParagraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi.
              Donec finibus semper metus id malesuada.
            </p>
          </div>
        </l-tooltip>
      </l-marker>
    </l-map>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import L, { LatLng, latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from "vue2-leaflet";

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
    // LPopup,
    LTooltip,
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
      withTooltip: latLng(51.06448892948631, 3.729019813756584),
      showParagraph: false,
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
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    innerClick() {
      alert("Click!");
    },
  },
});
</script>
