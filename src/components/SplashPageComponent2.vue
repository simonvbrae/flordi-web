<template>
  <div
    :class="{ loader: true, fillParent: true }"
    :style="{ ...backgroundImage, ...fadeValue }"
  >
    <div
      :class="{
        miniLoader: true,
        fadein: true,
        fillParent: true,
      }"
      :style="poster"
    ></div>
  </div>
</template>

<script lang="js">
import splash from "@/assets/images/splash.png";

export default {
  name: "SplashPageComponent",
  props: {
    scrollState: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    fadeValue: function () {
      return {opacity: `${100-this.scrollTransformation(this.scrollState)}%`, display: this.scrollTransformation(this.scrollState)>=100 ? "none" : ""};
    },
    // computed property that auto-updates when the prop changes
    poster() {
      return {
        background: `url(${require("@/assets/images/splash.png")}) no-repeat center center fixed`,
        webkitBackgroundSize: "contain",
        mozBackgroundSize: "contain",
        oBackgroundSize: "contain",
        backgroundSize: "contain",
      };
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
  methods: {
    scrollTransformation() {
      return this.scrollState;
    }
  }
};
</script>

<style>
.fillParent {
  /* position: "absolute"; */
  /* top: 0;
  left: 0; */
  height: 100%;
  width: 100%;
}

.loader {
  background-color: #63ab97;
  color: white;
  width: 100vw;
  height: 100vh;
  /* display: block;
  position: fixed; */
  font-size: 32px;
  /* bottom: 0;
  left: 0;
  right: 0;
  top: 0; */
  /* overflow: hidden; */
  /* padding-top: 10vh; */
  text-align: center;
  opacity: 100;
}

.miniLoader {
  width: 100vw;
  height: 100vh;
  /* bottom: 0;
  left: 0;
  right: 0;
  top: 0; */
  /* position: fixed; */
  text-align: center;
}

.fadeout {
  animation: fadeout 2s forwards;
}

.fadein {
  animation: fadeIn 2s;
  -webkit-animation: fadeIn 2s;
  -moz-animation: fadeIn 2s;
  -o-animation: fadeIn 2s;
  -ms-animation: fadeIn 2s;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-ms-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
