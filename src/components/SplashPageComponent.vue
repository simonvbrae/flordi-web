<template>
  <div
    :class="{ loader: true, fillParent: true }"
    :style="{ ...backgroundImage, ...fadeOnScroll }"
  >
    <div
      :class="{
        miniLoader: true,
        fadein: true,
        // fadeout: scrollStateBiggerOne,
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
    fadeOnScroll: function () {
      return {opacity: `${100-Math.pow(1.1, this.scrollState/2)}%`, display: Math.pow(1.1,this.scrollState/2)>=112 ? "none" : ""};
    },

    imagePath() {
      return splash;
      // return `@/assets/images/splash.png`;
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
};
</script>

<style>
.fillParent {
  position: "absolute";
  top: "0";
  left: "0";
  height: "100%";
  width: "100%";
}

.loader {
  background-color: #63ab97;
  bottom: 0;
  color: white;
  display: block;
  font-size: 32px;
  left: 0;
  overflow: hidden;
  padding-top: 10vh;
  position: fixed;
  right: 0;
  text-align: center;
  top: 0;
  opacity: 100;
}

.miniLoader {
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  text-align: center;
  top: 0;
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
