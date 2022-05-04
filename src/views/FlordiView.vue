<template>
  <div class="parent" :style="backgroundImage">
    <SplashPageComponent
      class="front"
      :scrollState="scrollState"
      t
    ></SplashPageComponent>
    <div>
      <VScrollActive
        active-class="active"
        :offset="45"
        :duration="800"
        bezier-easing-value=".5,0,.35,1"
        class="sticky"
      >
        <v-container class="flex-nowrap" justify="center">
          <v-row no-gutters>
            <v-col cols="2" xs="3">
              <img class="logo" src="@/assets/images/logo_small2.png" />
            </v-col>
            <v-col class="events" cols="2" xs="3">
              <a
                class="menuitem text"
                href="#events"
                data-scroll-active="events"
                >Events</a
              >
            </v-col>
            <v-col class="mission" cols="2" xs="3">
              <a
                class="menuitem text"
                href="#portfolio"
                data-scroll-active="portfolio"
              >
                Mission</a
              >
            </v-col>
            <v-col class="studios" cols="2" xs="3">
              <a
                class="menuitem text"
                href="#studios"
                data-scroll-active="studios"
                >Studio's</a
              >
            </v-col>
            <v-col class="contact" cols="2" xs="3">
              <a
                class="menuitem text"
                href="#contact"
                data-scroll-active="contact"
                >Contact</a
              >
            </v-col>
          </v-row>
        </v-container>
      </VScrollActive>
    </div>
    <div class="contentDiv">
      <div class="pt-2"></div>
      <img
        class="pt-5"
        style="width: 80vw; opacity: 80; fill-opacity: 0"
        src="@/assets/images/flordi_title.png"
      />
      <h5 class="mt-3 pb-5 slogan text">Een nieuw muziekcafé opening soon!</h5>
      <FlordiComponent></FlordiComponent>
    </div>
    <img style="width: 100vw" src="@/assets/images/mascots.png" />
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
    onItemChanged(event: any, currentItem: any, lastActiveItem: any) {
      console.log(event);
      console.log(currentItem);
      console.log(lastActiveItem);
      // here you have access to everything you need regarding that event
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
.banner {
  text-align: center;
  text-decoration: none;
  color: lightgrey;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: bold;
  font-size: 20vw;
}
.slogan {
  color: white;
  font-size: 4vw;
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
  /* margin-top: 20vh; */
}

.parent {
  overflow: auto;
}

.front {
  z-index: 100;
}

.logo {
  width: 10vw;
  padding: 4px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
}

.events {
  min-width: 18vw;
}
.mission {
  min-width: 18vw;
}
.studios {
  min-width: 18vw;
}
.contact {
  min-width: 18vw;
}

.menuitem {
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: lightgrey;
  /* font-size: 25px; */
  font-size: 3.7vw;
  display: block;
  padding: 1vh 2vw 1vh 2vw;
}

.menuitem:hover,
.menuitem:focus {
  color: white;
}

html {
  scroll-behavior: smooth;
}
</style>
