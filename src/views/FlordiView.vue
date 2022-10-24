<template>
  <div class="parent" :style="backgroundImage">
    <SplashPageComponent
      class="front"
      :class="{ invisible: hideSplashImage }"
      :scrollState="scrollState"
      t
    ></SplashPageComponent>
    <div>
      <VScrollActive
        active-class="active"
        :offset="scrollActiveOffset"
        :duration="800"
        bezier-easing-value=".5,0,.35,1"
        class="sticky"
        :class="{ menuWithBg: menuHasBackground }"
        style="margin-top: -5px; margin-bottom: -10px"
      >
        <v-container
          fluid
          class="flex-nowrap"
          justify="center"
          style="margin-top: 0"
        >
          <v-row no-gutters>
            <v-col cols="2" xs="3">
              <a href="#">
                <img class="logo" src="@/assets/images/logo_small2.png" />
              </a>
            </v-col>
            <v-col cols="10" xs="9">
              <v-row no-gutters menu-row>
                <v-col cols="4">
                  <a
                    class="menuitem text"
                    href="#events"
                    data-scroll-active="events"
                    ><img
                      style="width: 10vw"
                      src="@/assets/images/title_events.png"
                  /></a>
                </v-col>
                <v-col cols="4">
                  <a
                    class="menuitem text"
                    href="#about"
                    data-scroll-active="mission"
                    ><img
                      style="width: 10vw"
                      src="@/assets/images/title_about.png"
                  /></a>
                </v-col>
                <v-col cols="4">
                  <a
                    class="menuitem text"
                    href="#menu"
                    data-scroll-active="menu"
                  >
                    <img
                      style="width: 8vw"
                      src="@/assets/images/title_menu.png"
                  /></a>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col cols="4">
                  <a
                    class="menuitem text"
                    href="#studio"
                    data-scroll-active="studio"
                    ><img
                      style="width: 10vw"
                      src="@/assets/images/title_studio.png"
                  /></a>
                </v-col>
                <v-col cols="4">
                  <a
                    class="menuitem text"
                    href="#jobs"
                    data-scroll-active="jobs"
                    ><img
                      style="width: 10vw"
                      src="@/assets/images/title_jobs.png"
                  /></a>
                </v-col>
                <v-col cols="4">
                  <a
                    class="menuitem text"
                    href="#contact"
                    data-scroll-active="contact"
                    ><img
                      style="width: 12vw"
                      src="@/assets/images/title_contact.png"
                  /></a>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </VScrollActive>
    </div>
    <div class="contentDiv">
      <img
        style="
          width: 30vw;
          max-width: 200px;
          opacity: 80;
          fill-opacity: 0;
          display: block;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 25px;
          margin-top: 25px;
        "
        src="@/assets/images/flordi_banner.png"
      />
      <p class="text slogan" style="height: 100%">
        A soft and warm breeze blows us towards a space where connection,
        authenticity and ethical creative entrepreneurship are paramount.
        <br />
        Get in on the act, bounce with us!
      </p>
      <hr class="topHr" />
      <FlordiComponent class="text"></FlordiComponent>
      <FlordiFooter></FlordiFooter>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import FlordiComponent from "@/components/FlordiComponent.vue";
import FlordiFooter from "@/components/FlordiFooter.vue";
import VScrollActive from "v-scroll-active";
import SplashPageComponent from "@/components/SplashPageComponent.vue";

export default Vue.extend({
  name: "FlordiView",
  components: {
    FlordiComponent,
    VScrollActive,
    SplashPageComponent,
    FlordiFooter,
  },
  data() {
    return {
      hideSplashImage: false,
      menuHasBackground: false,
      scrollState: 0,
      scrollDistance: 100,
      windowHeight: 0,
    };
  },
  computed: {
    scrollActiveOffset() {
      let calcWidth = (document.body.clientWidth / 100) * 15;
      return Math.min(calcWidth, 145);
    },
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
  methods: {},
  mounted() {
    this.$data.windowHeight = window.innerHeight;

    window.onscroll = () => {
      if (
        document.body.scrollTop > this.$data.windowHeight ||
        document.documentElement.scrollTop > this.$data.windowHeight
      ) {
        this.$data.hideSplashImage = true;
        this.$data.menuHasBackground = true;
      }
    };
    window.addEventListener("resize", () => {
      this.$data.windowHeight = window.innerHeight;
    });
  },
});
</script>

<style scoped>
.banner {
  text-align: center;
  text-decoration: none;
  color: lightgrey;
  font-family: "Comic Sans", "Comic Sans Regular", "Comic Grande",
    "Comic Sans Unicode";
  font-weight: bold;
  font-size: 20vw;
}

.slogan {
  color: white;
  font-size: max(2vw, var(--bs-body-font-size));
  font-style: Italic;
}

.front {
  pointer-events: none;
  z-index: 100;
}

.invisible {
  display: none;
}
</style>
