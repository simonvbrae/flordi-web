<template>
  <div class="parent" :style="backgroundImage">
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
              <a href="/">
                <img class="logo" src="@/assets/images/logo_small2.png" />
              </a>
            </v-col>
            <v-col cols="10" xs="9">
              <v-row no-gutters menu-row>
                <v-col cols="1"> </v-col>
                <v-col cols="6">
                  <a class="menuitem" href="/" data-scroll-active="mission"
                    ><img
                      style="width: min(317px, 30vw)"
                      src="@/assets/images/flordi_banner.png"
                  /></a>
                </v-col>
                <v-col cols="5"> </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </VScrollActive>
    </div>
    <div class="contentDiv">
      <hr class="topHr" />
      <pdf src="Grunling_vacancy_en.pdf"></pdf>
      <FlordiFooter></FlordiFooter>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import FlordiFooter from "@/components/FlordiFooter.vue";
import VScrollActive from "v-scroll-active";
import pdf from "vue-pdf";

export default Vue.extend({
  name: "FlordiView",
  components: {
    VScrollActive,
    FlordiFooter,
    pdf,
  },
  data() {
    return {
      menuHasBackground: true,
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
  methods: {},
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

.menuitem {
  font-size: min(40px, 3.7vw);
  width: 36vw;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: rgb(250, 210, 001);
  display: block;
}
</style>
