<template>
  <div class="parent" :style="backgroundImage">
    <SplashPageComponent
      class="front"
      :class="{ invisible: splashImageIsHidden }"
      :scrollState="scrollState"
      t
    ></SplashPageComponent>
    <div>
      <VScrollActive
        @scroll="onScroll"
        active-class="active"
        :offset="scrollActiveOffset"
        :duration="800"
        bezier-easing-value=".5,0,.35,1"
        class="sticky"
        :class="{ menuWithBg: menuHasBackground }"
      >
        <v-container fluid class="flex-nowrap" justify="center">
          <v-row no-gutters>
            <v-col cols="2" xs="3">
              <img class="logo" src="@/assets/images/logo_small2.png" />
            </v-col>
            <v-col cols="10" xs="9">
              <v-row no-gutters menu-row>
                <v-col cols="4">
                  <a
                    class="menuitem text"
                    href="#events"
                    data-scroll-active="events"
                    >Events</a
                  >
                </v-col>
                <v-col cols="4">
                  <a
                    class="menuitem text"
                    href="#about"
                    data-scroll-active="about"
                    >About</a
                  >
                </v-col>
                <v-col cols="4">
                  <a
                    class="menuitem text"
                    href="#menu"
                    data-scroll-active="menu"
                  >
                    Menu</a
                  >
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col cols="4">
                  <a
                    class="menuitem text"
                    href="#studio"
                    data-scroll-active="studio"
                    >Studio</a
                  >
                </v-col>
                <v-col cols="4">
                  <a
                    class="menuitem text"
                    href="#jobs"
                    data-scroll-active="jobs"
                    >Join Us</a
                  >
                </v-col>
                <v-col cols="4">
                  <a
                    class="menuitem text"
                    href="#contact"
                    data-scroll-active="contact"
                    >Contact</a
                  >
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
          width: 50vw;
          opacity: 80;
          fill-opacity: 0;
          display: block;
          margin-left: auto;
          margin-right: auto;
        "
        src="@/assets/images/flordi_title.png"
      />
      <p class="text slogan" style="height: 100%; font-size: ">
        A soft and warm breeze that blows us towards a space where connection,
        authenticity and ethical creative entrepreneurship are paramount. Get in
        on the act, bounce with us!
        <br />
        - Flordi -
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
      splashImageIsHidden: false,
      menuHasBackground: false,
      scrollState: 0,
      scrollDistance: 100,
      windowHeight: 0,
    };
  },
  computed: {
    scrollActiveOffset() {
      let calcWidth = (document.body.clientWidth / 100) * 17;
      console.log(calcWidth);
      return calcWidth < 155 ? calcWidth : 155;
    },
    backgroundImage() {
      return {
        //rgb(0,95,217)
        //rgb(93,149,179)
        //rgb(5,79,171)
        //rgb(25,136,91)
        //(rgb(45,217,89)
        //rgb(23,75,130)
        //(rgb(23,75,130)
        //(rgb(239,237,236)
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
    handleKeyboardScroll(e: any) {
      // Prevent keyboard scroll
      let scrollKeys = [32, 33, 34, 35, 37, 38, 39, 40];
      if (scrollKeys.includes(e.keyCode)) {
        e.preventDefault();
        this.updateScrollState(3);
      }
    },
    handleNonKeyboardScroll(e: any) {
      // Prevent keyboard scroll and update scrollState
      if (e.type == "wheel") {
        if (e.wheelDelta < 0) {
          if (!this.updateScrollState(3)) {
            e.preventDefault();
          }
        }
      }
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
  },
  created() {
    for (let i of this.getListeners()) {
      // window.addEventListener(i[0], i[1], i[2]);
    }
  },
  destroyed() {
    for (let i of this.getListeners()) {
      // window.removeEventListener(i[0], i[1], i[2]);
    }
  },
  mounted() {
    this.$data.windowHeight = window.innerHeight;

    window.onscroll = (e) => {
      if (
        document.body.scrollTop > this.$data.windowHeight ||
        document.documentElement.scrollTop > this.$data.windowHeight
      ) {
        this.$data.menuHasBackground = true;
        this.$data.splashImageIsHidden = true;
      }
    };
    window.addEventListener("resize", () => {
      this.$data.windowHeight = window.innerHeight;
    });
  },
});
</script>

<style scoped>
.menuWithBg {
  background-color: rgba(23, 87, 157, 0.8);
}
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
}

.sticky {
  /* z-index: 10; */
  position: fixed;
  /* top: 1; */
  bottom: 1;
  width: 100%;
}

.contentDiv {
  margin: auto;
  justify-content: center;
  padding-top: min(15vw, 160px);
  max-width: 992px;
  align-content: center;
  align-self: center;
  align-items: center;
}

.parent {
  overflow: auto;
}

.front {
  pointer-events: none;
  z-index: 100;
}

.logo {
  width: min(10vw, 105px);
  padding: 4px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
}

.menuitem {
  font-size: min(40px, 3.7vw);
  width: 18vw;

  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: lightgrey;
  display: block;
}

.menuitem:hover,
.menuitem:focus {
  color: white;
}

.active {
  color: white;
}

.topHr {
  border: 10px solid rgb(45, 217, 89);
  border-radius: 5px;
  opacity: 0;
}

.invisible {
  display: none;
}

html {
  scroll-behavior: smooth;
}
</style>
