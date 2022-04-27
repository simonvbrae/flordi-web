<template>
  <div class="parent" :style="backgroundImage">
    <SplashPageComponent
      class="front"
      :scrollState="scrollState"
      t
    ></SplashPageComponent>
    <div>
      <VScrollActive class="sticky">
        <v-container fluid justify="center">
          <v-row no-gutters>
            <v-col cols="3" xs="3" style="background-color: grey">
              <a class="menuitem" href="#events" data-scroll-active="events"
                >Events</a
              >
            </v-col>
            <v-col cols="3" xs="3" style="background-color: grey">
              <a
                class="menuitem"
                href="#portfolio"
                data-scroll-active="portfolio"
              >
                Portfolio</a
              >
            </v-col>
            <v-col cols="3" xs="3" style="background-color: grey">
              <a class="menuitem" href="#studios" data-scroll-active="studios"
                >Studio's</a
              >
            </v-col>
            <v-col cols="3" xs="3" style="background-color: grey">
              <a class="menuitem" href="#contact" data-scroll-active="contact"
                >Contact</a
              >
            </v-col>
          </v-row>
        </v-container>
      </VScrollActive>
    </div>
    <div class="contentDiv">
      <FlordiComponent></FlordiComponent>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import FlordiComponent from "@/components/FlordiComponent.vue";
import VScrollActive from "v-scroll-active";
import SplashPageComponent from "@/components/SplashPageComponent.vue";

export default Vue.extend({
  name: "FlordiView",
  components: {
    FlordiComponent,
    VScrollActive,
    SplashPageComponent,
  },
  data() {
    return {
      scrollState: 0,
      scrollDistance: 100,
    };
  },
  computed: {
    backgroundImage() {
      return {
        background: `url(${require("@/assets/images/background.png")}) no-repeat center center fixed`,
        webkitBackgroundSize: "cover",
        mozBackgroundSize: "cover",
        oBackgroundSize: "cover",
        backgroundSize: "cover",
      };
    },
  },
  methods: {
    updateScrollState(v: number): boolean {
      if (
        this.scrollState + v < 0 ||
        this.scrollState + v > this.$data.scrollDistance
      ) {
        return true;
      }
      this.scrollState += v;
      return false;
    },
    getListeners() {
      const listeners: Array<[string, any, Record<string, unknown>?]> = [
        ["keydown", this.handleKeyboardScroll],
        [
          "touchmove",
          this.handleNonKeyboardScroll,
          {
            passive: false,
          },
        ],
        [
          "wheel",
          this.handleNonKeyboardScroll,
          {
            passive: false,
          },
        ],
      ];
      return listeners;
    },
    handleKeyboardScroll(e: any) {
      // Prevent keyboard scroll
      let scrollKeys = [32, 33, 34, 35, 37, 38, 39, 40];
      if (scrollKeys.includes(e.keyCode)) {
        e.preventDefault();
        this.updateScrollState(1);
      }
    },
    handleNonKeyboardScroll(e: any) {
      // Prevent keyboard scroll and update scrollState
      if (e.type == "wheel") {
        if (e.wheelDelta < 0) {
          if (!this.updateScrollState(1)) {
            e.preventDefault();
          }
        }
        // else {
        //   e.preventDefault();
        //   this.updateScrollState(-1);
        // }
      }
    },
  },
  created() {
    for (let i of this.getListeners()) {
      window.addEventListener(i[0], i[1], i[2]);
    }
  },
  destroyed() {
    for (let i of this.getListeners()) {
      window.removeEventListener(i[0], i[1], i[2]);
    }
  },
});
</script>

<style scoped>
.menuitem {
  text-decoration: none;
  color: lightgrey;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: bold;
  font-size: 3vw;
}

.menuitem:hover,
.menuitem:focus {
  /* font-weight: 901; */
  color: white;
  /* text-decoration: underline; */
}

.sticky {
  position: fixed;
  top: 1;
  width: 100%;
}
.active {
  color: white;
}

.contentDiv {
  margin-top: 5vh;
}

.parent {
  overflow: auto;
}

.front {
  z-index: 100;
}

html {
  scroll-behavior: smooth;
}
</style>
