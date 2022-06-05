<template>
  <div>
    <a
      @click.prevent="hideBeer"
      @mouseover="hideBeer"
      :class="{ rightAlign: rightAlign }"
    >
      <img
        class="logo"
        src="@/assets/images/elusive_beer.png"
        style="width: 80px; height: 80px"
      />
    </a>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ElusiveBeer",
  data() {
    return { rightAlign: false };
  },
  methods: {
    hideBeer() {
      console.log(this.$data.rightAlign);
      this.$data.rightAlign = !this.$data.rightAlign;
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rightAlign {
  float: right;
}
</style>
