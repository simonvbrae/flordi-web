<template>
  <div>
    <SplashPageComponent :scrollState="scrollState" t></SplashPageComponent>
    <VScrollActive class="sticky">
      <v-container>
        <v-row no-gutters>
          <v-col cols="12" sm="4">
            <a href="#home" data-scroll-active="home">Home</a>
          </v-col>
          <v-col cols="12" sm="4">
            <a href="#about" data-scroll-active="about">About Us</a>
          </v-col>
          <v-col cols="12" sm="4">
            <a href="#portfolio" data-scroll-active="portfolio">Portfolio</a>
          </v-col>
        </v-row>
      </v-container>
    </VScrollActive>
    <div>
      <div :style="backgroundImage">
        <MainMenuComponent></MainMenuComponent>
        <h1><a id="home"></a>Home</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          condimentum, purus at malesuada tempus, tellus augue vulputate augue,
          vitae lacinia nunc velit in ligula. Ut lobortis eu odio eget interdum.
          Fusce at tempor lectus. Nullam ullamcorper vehicula placerat. Donec
          vel ex interdum, molestie urna imperdiet, commodo nunc. Phasellus
          porta, dolor sit amet bibendum lobortis, odio nulla pellentesque
          libero, non venenatis justo nisl eget lectus. Sed finibus, tortor ut
          cursus porta, dolor est dapibus eros, a fringilla nisi leo ut diam.
          Pellentesque purus enim, pellentesque a orci sit amet, condimentum
          interdum elit. Aenean et vehicula turpis. Curabitur at tincidunt
          dolor. Nunc eu dolor dapibus, lobortis lorem nec, accumsan libero. Nam
          sagittis lacus odio, sed gravida dolor laoreet eget. Praesent ut
          facilisis est. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Ut metus tortor, pharetra vel
          consequat eget, placerat sit amet lacus. Ut vel consectetur mauris.
          Curabitur ipsum nibh, fermentum et elit vitae, tristique sodales
          lectus. Duis finibus semper libero at aliquet. Aenean molestie egestas
          quam at pulvinar. Pellentesque magna orci, sollicitudin quis fermentum
          in, congue sed lectus. Nullam non diam neque. Aliquam interdum vitae
          erat at ullamcorper. Aenean venenatis erat ut diam ullamcorper
          placerat. Aliquam eget sem aliquam, finibus ipsum sit amet, gravida
          enim. Proin viverra blandit feugiat. Praesent sem urna, interdum non
          vestibulum id, sollicitudin in lectus. Mauris erat orci, dignissim et
          imperdiet nec, tristique non odio. Duis nec laoreet turpis. Quisque
          mattis, felis eget gravida faucibus, lorem nulla euismod turpis, et
          dignissim mi quam quis dui. Cras nec hendrerit mauris. Sed vitae elit
          scelerisque, mollis urna semper, posuere enim. Quisque scelerisque
          sapien sed facilisis pretium. Sed sed magna arcu. Mauris placerat erat
          id erat luctus mattis. Ut tempor eget lorem a euismod. Vivamus ac
          neque hendrerit, suscipit odio a, ultricies velit. Curabitur mattis in
          diam ut iaculis. Nulla ligula tortor, lobortis et ex a, tempus aliquet
          purus. Nullam gravida laoreet purus, vel euismod risus pretium et.
          Etiam congue in turpis eget laoreet. Praesent aliquet tincidunt velit
          vitae condimentum. Nam venenatis nunc non enim imperdiet, vel tempor
          neque auctor. Suspendisse ullamcorper tellus nibh, et suscipit risus
          gravida ut. Proin scelerisque odio a libero hendrerit blandit. Duis
          consectetur, nibh sed aliquam molestie, ante justo tincidunt urna,
          vitae ullamcorper felis dui non odio. Morbi laoreet dictum lectus, ac
          finibus quam dictum a. Sed porta pharetra lorem eget imperdiet. Aenean
          egestas non justo sit amet gravida. Cras auctor cursus tortor sed
          sollicitudin. Sed rhoncus dapibus lectus eget ultrices. Nullam semper,
          lorem et fermentum consequat, ipsum diam iaculis dui, quis auctor eros
          metus vitae velit. Nunc eget lacus faucibus, blandit erat vel,
          vehicula nisl. Mauris vel rhoncus dolor.
        </p>
        <h1><a id="about"></a>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          condimentum, purus at malesuada tempus, tellus augue vulputate augue,
          vitae lacinia nunc velit in ligula. Ut lobortis eu odio eget interdum.
          Fusce at tempor lectus. Nullam ullamcorper vehicula placerat. Donec
          vel ex interdum, molestie urna imperdiet, commodo nunc. Phasellus
          porta, dolor sit amet bibendum lobortis, odio nulla pellentesque
          libero, non venenatis justo nisl eget lectus. Sed finibus, tortor ut
          cursus porta, dolor est dapibus eros, a fringilla nisi leo ut diam.
          Pellentesque purus enim, pellentesque a orci sit amet, condimentum
          interdum elit. Aenean et vehicula turpis. Curabitur at tincidunt
          dolor. Nunc eu dolor dapibus, lobortis lorem nec, accumsan libero. Nam
          sagittis lacus odio, sed gravida dolor laoreet eget. Praesent ut
          facilisis est. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Ut metus tortor, pharetra vel
          consequat eget, placerat sit amet lacus. Ut vel consectetur mauris.
          Curabitur ipsum nibh, fermentum et elit vitae, tristique sodales
          lectus. Duis finibus semper libero at aliquet. Aenean molestie egestas
          quam at pulvinar. Pellentesque magna orci, sollicitudin quis fermentum
          in, congue sed lectus. Nullam non diam neque. Aliquam interdum vitae
          erat at ullamcorper. Aenean venenatis erat ut diam ullamcorper
          placerat. Aliquam eget sem aliquam, finibus ipsum sit amet, gravida
          enim. Proin viverra blandit feugiat. Praesent sem urna, interdum non
          vestibulum id, sollicitudin in lectus. Mauris erat orci, dignissim et
          imperdiet nec, tristique non odio. Duis nec laoreet turpis. Quisque
          mattis, felis eget gravida faucibus, lorem nulla euismod turpis, et
          dignissim mi quam quis dui. Cras nec hendrerit mauris. Sed vitae elit
          scelerisque, mollis urna semper, posuere enim. Quisque scelerisque
          sapien sed facilisis pretium. Sed sed magna arcu. Mauris placerat erat
          id erat luctus mattis. Ut tempor eget lorem a euismod. Vivamus ac
          neque hendrerit, suscipit odio a, ultricies velit. Curabitur mattis in
          diam ut iaculis. Nulla ligula tortor, lobortis et ex a, tempus aliquet
          purus. Nullam gravida laoreet purus, vel euismod risus pretium et.
          Etiam congue in turpis eget laoreet. Praesent aliquet tincidunt velit
          vitae condimentum. Nam venenatis nunc non enim imperdiet, vel tempor
          neque auctor. Suspendisse ullamcorper tellus nibh, et suscipit risus
          gravida ut. Proin scelerisque odio a libero hendrerit blandit. Duis
          consectetur, nibh sed aliquam molestie, ante justo tincidunt urna,
          vitae ullamcorper felis dui non odio. Morbi laoreet dictum lectus, ac
          finibus quam dictum a. Sed porta pharetra lorem eget imperdiet. Aenean
          egestas non justo sit amet gravida. Cras auctor cursus tortor sed
          sollicitudin. Sed rhoncus dapibus lectus eget ultrices. Nullam semper,
          lorem et fermentum consequat, ipsum diam iaculis dui, quis auctor eros
          metus vitae velit. Nunc eget lacus faucibus, blandit erat vel,
          vehicula nisl. Mauris vel rhoncus dolor.
        </p>
        <h1><a id="portfolio"></a>Portfolio</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          condimentum, purus at malesuada tempus, tellus augue vulputate augue,
          vitae lacinia nunc velit in ligula. Ut lobortis eu odio eget interdum.
          Fusce at tempor lectus. Nullam ullamcorper vehicula placerat. Donec
          vel ex interdum, molestie urna imperdiet, commodo nunc. Phasellus
          porta, dolor sit amet bibendum lobortis, odio nulla pellentesque
          libero, non venenatis justo nisl eget lectus. Sed finibus, tortor ut
          cursus porta, dolor est dapibus eros, a fringilla nisi leo ut diam.
          Pellentesque purus enim, pellentesque a orci sit amet, condimentum
          interdum elit. Aenean et vehicula turpis. Curabitur at tincidunt
          dolor. Nunc eu dolor dapibus, lobortis lorem nec, accumsan libero. Nam
          sagittis lacus odio, sed gravida dolor laoreet eget. Praesent ut
          facilisis est. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Ut metus tortor, pharetra vel
          consequat eget, placerat sit amet lacus. Ut vel consectetur mauris.
          Curabitur ipsum nibh, fermentum et elit vitae, tristique sodales
          lectus. Duis finibus semper libero at aliquet. Aenean molestie egestas
          quam at pulvinar. Pellentesque magna orci, sollicitudin quis fermentum
          in, congue sed lectus. Nullam non diam neque. Aliquam interdum vitae
          erat at ullamcorper. Aenean venenatis erat ut diam ullamcorper
          placerat. Aliquam eget sem aliquam, finibus ipsum sit amet, gravida
          enim. Proin viverra blandit feugiat. Praesent sem urna, interdum non
          vestibulum id, sollicitudin in lectus. Mauris erat orci, dignissim et
          imperdiet nec, tristique non odio. Duis nec laoreet turpis. Quisque
          mattis, felis eget gravida faucibus, lorem nulla euismod turpis, et
          dignissim mi quam quis dui. Cras nec hendrerit mauris. Sed vitae elit
          scelerisque, mollis urna semper, posuere enim. Quisque scelerisque
          sapien sed facilisis pretium. Sed sed magna arcu. Mauris placerat erat
          id erat luctus mattis. Ut tempor eget lorem a euismod. Vivamus ac
          neque hendrerit, suscipit odio a, ultricies velit. Curabitur mattis in
          diam ut iaculis. Nulla ligula tortor, lobortis et ex a, tempus aliquet
          purus. Nullam gravida laoreet purus, vel euismod risus pretium et.
          Etiam congue in turpis eget laoreet. Praesent aliquet tincidunt velit
          vitae condimentum. Nam venenatis nunc non enim imperdiet, vel tempor
          neque auctor. Suspendisse ullamcorper tellus nibh, et suscipit risus
          gravida ut. Proin scelerisque odio a libero hendrerit blandit. Duis
          consectetur, nibh sed aliquam molestie, ante justo tincidunt urna,
          vitae ullamcorper felis dui non odio. Morbi laoreet dictum lectus, ac
          finibus quam dictum a. Sed porta pharetra lorem eget imperdiet. Aenean
          egestas non justo sit amet gravida. Cras auctor cursus tortor sed
          sollicitudin. Sed rhoncus dapibus lectus eget ultrices. Nullam semper,
          lorem et fermentum consequat, ipsum diam iaculis dui, quis auctor eros
          metus vitae velit. Nunc eget lacus faucibus, blandit erat vel,
          vehicula nisl. Mauris vel rhoncus dolor.
        </p>
        <h1><a id="contact"></a>Contact</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          condimentum, purus at malesuada tempus, tellus augue vulputate augue,
          vitae lacinia nunc velit in ligula. Ut lobortis eu odio eget interdum.
          Fusce at tempor lectus. Nullam ullamcorper vehicula placerat. Donec
          vel ex interdum, molestie urna imperdiet, commodo nunc. Phasellus
          porta, dolor sit amet bibendum lobortis, odio nulla pellentesque
          libero, non venenatis justo nisl eget lectus. Sed finibus, tortor ut
          cursus porta, dolor est dapibus eros, a fringilla nisi leo ut diam.
          Pellentesque purus enim, pellentesque a orci sit amet, condimentum
          interdum elit. Aenean et vehicula turpis. Curabitur at tincidunt
          dolor. Nunc eu dolor dapibus, lobortis lorem nec, accumsan libero. Nam
          sagittis lacus odio, sed gravida dolor laoreet eget. Praesent ut
          facilisis est. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Ut metus tortor, pharetra vel
          consequat eget, placerat sit amet lacus. Ut vel consectetur mauris.
          Curabitur ipsum nibh, fermentum et elit vitae, tristique sodales
          lectus. Duis finibus semper libero at aliquet. Aenean molestie egestas
          quam at pulvinar. Pellentesque magna orci, sollicitudin quis fermentum
          in, congue sed lectus. Nullam non diam neque. Aliquam interdum vitae
          erat at ullamcorper. Aenean venenatis erat ut diam ullamcorper
          placerat. Aliquam eget sem aliquam, finibus ipsum sit amet, gravida
          enim. Proin viverra blandit feugiat. Praesent sem urna, interdum non
          vestibulum id, sollicitudin in lectus. Mauris erat orci, dignissim et
          imperdiet nec, tristique non odio. Duis nec laoreet turpis. Quisque
          mattis, felis eget gravida faucibus, lorem nulla euismod turpis, et
          dignissim mi quam quis dui. Cras nec hendrerit mauris. Sed vitae elit
          scelerisque, mollis urna semper, posuere enim. Quisque scelerisque
          sapien sed facilisis pretium. Sed sed magna arcu. Mauris placerat erat
          id erat luctus mattis. Ut tempor eget lorem a euismod. Vivamus ac
          neque hendrerit, suscipit odio a, ultricies velit. Curabitur mattis in
          diam ut iaculis. Nulla ligula tortor, lobortis et ex a, tempus aliquet
          purus. Nullam gravida laoreet purus, vel euismod risus pretium et.
          Etiam congue in turpis eget laoreet. Praesent aliquet tincidunt velit
          vitae condimentum. Nam venenatis nunc non enim imperdiet, vel tempor
          neque auctor. Suspendisse ullamcorper tellus nibh, et suscipit risus
          gravida ut. Proin scelerisque odio a libero hendrerit blandit. Duis
          consectetur, nibh sed aliquam molestie, ante justo tincidunt urna,
          vitae ullamcorper felis dui non odio. Morbi laoreet dictum lectus, ac
          finibus quam dictum a. Sed porta pharetra lorem eget imperdiet. Aenean
          egestas non justo sit amet gravida. Cras auctor cursus tortor sed
          sollicitudin. Sed rhoncus dapibus lectus eget ultrices. Nullam semper,
          lorem et fermentum consequat, ipsum diam iaculis dui, quis auctor eros
          metus vitae velit. Nunc eget lacus faucibus, blandit erat vel,
          vehicula nisl. Mauris vel rhoncus dolor.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MainMenuComponent from "@/components/MainMenuComponent.vue";
import SplashPageComponent from "@/components/SplashPageComponent.vue";
import VScrollActive from "v-scroll-active";

export default Vue.extend({
  name: "FlordiView",
  components: {
    MainMenuComponent,
    SplashPageComponent,
    VScrollActive,
  },
  data() {
    return {
      scrollState: 0,
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
    fillParent() {
      return {
        position: "absolute",
        top: "0",
        left: "0",
        height: "100%",
        width: "100%",
      };
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
  methods: {
    handleNavbarChange(id: any) {
      console.log("current active id is " + id);
    },
    onItemChanged(event: any, currentItem: any, lastActiveItem: any) {
      console.log(event);
    },

    updateScrollState(v: number): boolean {
      if (this.scrollState + v < 0 || this.scrollState + v > 100) {
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
});
</script>

<style>
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}

.active {
  color: red;
}

html {
  scroll-behavior: smooth;
}
</style>
