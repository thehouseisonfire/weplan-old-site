<template>
  <BCol v-if="!consent" cols="10" class="banner">
    <BRow>
      <BCol cols="12" lg="9" class="my-auto">
        <p class="banner-message my-auto">
          Usamos cookies para personalizar conteúdos e melhorar a sua experiência.
        </p>
      </BCol>
      <BCol cols="12" lg="3">
        <button type="button" @click="changeConsent" class="button-link banner-button">Ok,
          entendi</button>
      </BCol>
    </BRow>
  </BCol>
</template>

<script setup>

import { useNuxtApp } from '#app';
const nuxtApp = useNuxtApp()

const consent = useCookie(
  'consent',
  {
    default: () => false,
  }
)

function changeConsent() {
  consent.value = true
  initTracking()
}

if (consent.value == true) {
  initTracking()
}

function initTracking() {
  const gtm = useGtm()
  if (gtm) {
    gtm.enable()
  }
  useGtag().grantConsent() // Google Tag Manager
  nuxtApp.$fb.enable()   // Meta Pixel
  // window.clarity('consent') // Microsoft Clarity (heatmaps)
}

</script>

<style scoped>
.banner-message {
  font-weight: 600;
}

.banner-button {
  padding: 1em;
}

@media only screen and (max-width: 991px) {
  .banner-button {
    margin-top: 1em;
  }
}

.banner {
  background-color: #000000b3;
  backdrop-filter: blur(5px);
  position: fixed;
  margin: 0 auto;
  bottom: 3%;
  left: 0;
  right: 0;
  padding: 20px;
  text-align: center;
  z-index: 1;
  color: white;
  border-radius: 15px;
}
</style>
