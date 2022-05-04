<template>
  <div>
    <v-container class="text">
      <v-row>
        <v-col md="6">
          <div>
            <strong>Flordi</strong><br />Muziek en danscafé.<br />
            Opening soon.
          </div>
          <div class="social">
            <a href="https://www.facebook.com/cafeflordi/" target="_blank"
              ><img src="@/assets/images/facebook-icon.png" class="image-40"
            /></a>
            <a href="https://www.instagram.com/cafeflordigent/" target="_blank"
              ><img src="@/assets/images/instagram-icon.png" class="image-40"
            /></a>
          </div>
          <p style="font-size: 10px">Van ons - Voor ons</p>
        </v-col>
      </v-row>
    </v-container>
    <img style="width: 100vw" src="@/assets/images/mascots.png" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "FlordiFooter",
  components: {},
});
</script>

<style>
.image-40 {
  width: 40px;
}
</style>
