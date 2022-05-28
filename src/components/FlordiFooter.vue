<template>
  <div>
    <v-container class="text">
      <v-row>
        <v-col md="12">
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
            <a href="mailto:info@flordi.be" target="_blank"
              ><svg
                class="svg-icon"
                width="40"
                height="40"
                aria-hidden="true"
                role="img"
                focusable="false"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20,4H4C2.895,4,2,4.895,2,6v12c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2V6C22,4.895,21.105,4,20,4z M20,8.236l-8,4.882 L4,8.236V6h16V8.236z"
                ></path></svg
            ></a>
          </div>
          <p style="font-size: 10px">Idee? Laat het ons weten!</p>
        </v-col>
      </v-row>
    </v-container>
    <img style="width: 100%" src="@/assets/images/mascots.png" />
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
