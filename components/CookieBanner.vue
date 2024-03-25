<template>
  <BCol v-if="!consent.accepted" cols="10" class="banner">
    <BRow>
      <BCol cols="12" lg="8" class="my-auto">
        <p class="banner-message my-auto">
          Usamos cookies para personalizar conteúdos e melhorar a sua experiência.
          Para mais informações, confira nosso
          <NuxtLink href="/termos-de-uso" class="text-white">termos de uso</NuxtLink> e <NuxtLink
            href="/aviso-de-privacidade" class="text-white">aviso de
            privacidade</NuxtLink>.
        </p>
      </BCol>
      <BCol cols="12" lg="4" class="px-0 m-auto">
        <button type="button" @click="modal = true"
          class="bg-white text-black button-link banner-button mx-3">Configurar</button>
        <button type="button" @click="accept()" class="button-link banner-button">Aceitar</button>
      </BCol>
    </BRow>
  </BCol>

  <BModal v-model="modal" hideFooter hideHeader centered hideBackdrop :noFade="consent.accepted" @cancel="modal = false"
    style="backdrop-filter: blur(5px); background-color: #000000b3;">
    <p class="mt-1 mb-0 fw-bold text-center fs-3">
      Configurações de cookies
    </p>
    <!-- <p class="my-0 text-center"> -->
    <!--   Você pode escolher quais cookies quer aceitar -->
    <!-- </p> -->
    <!-- Mandatory -->
    <BRow class="mx-1 mt-4">
      <BCol cols="10" class="my-auto">
        <p class="fs-4 font-normal mb-0">
          Cookies obrigatórios
        </p>
        <p>
          São cookies para garantir o funcionamento adequado do site.
        </p>
      </BCol>
      <BCol cols="2" class="my-auto">
        <label class="switch">
          <input type="checkbox" checked disabled>
          <span class="slider round" style="background-color: grey;"></span>
        </label>
      </BCol>
    </BRow>

    <!-- Marketing -->
    <BRow class="mx-1">
      <BCol cols="10" class="my-auto">
        <p class="fs-4 font-normal mb-0">
          Cookies de estatísticas
        </p>
        <p>
          São usados para coletar informações para exibir conteúdos específicos para um navegador em particular ao criar
          diferentes grupos-alvo.
        </p>
      </BCol>
      <BCol cols="2" class="my-auto">
        <label class="switch">
          <input type="checkbox" v-model="consent.marketing" checked>
          <span class="slider round"></span>
        </label>
      </BCol>
    </BRow>

    <!-- Analytics -->
    <BRow class="mx-1">
      <BCol cols="10" class="my-auto">
        <p class="fs-4 font-normal mb-0">
          Cookies de marketing
        </p>
        <p>
          São usados para coletar informações para exibir publicidade ou conteúdos específicos para um navegador em
          particular ao criar diferentes grupos-alvo.
        </p>
      </BCol>
      <BCol cols="2" class="my-auto">
        <label class="switch">
          <input type="checkbox" v-model="consent.analytics" checked>
          <span class="slider round"></span>
        </label>
      </BCol>
    </BRow>

    <div class="mt-0" style="position: relative;">
      <button type="button" @click="accept()" class="button-link banner-button mt-0"
        style="float: right; margin-right: 8px;">Aceitar</button>
    </div>
  </BModal>

</template>

<script setup lang="ts">

import { useNuxtApp } from '#app';
const nuxtApp = useNuxtApp()
const { initialize, gtag } = useGtag() // Google Analytics

const modal = ref(false)

onMounted(() => {
  watchEffect(() => {
    // if (modal.value) document.body.style.position = 'fixed'
    // else document.body.style.position = 'static'
    // window.onscroll = function() {
    //   window.scrollTo(scrollPosition[0], scrollPosition[1]);
    // };
  });
})

const consent = useCookie(
  'consent',
  {
    default: () => {
      return {
        accepted: false,
        marketing: true,
        analytics: true,
      }
    },
  }
)

// if page was changed and permission already given
if (consent.value.accepted) checkAllowed()

function accept() {
  modal.value = false
  consent.value.accepted = true
  checkAllowed()
}

function checkAllowed() {
  if (consent.value.marketing || consent.value.analytics) initialize() // GA
  if (consent.value.marketing && consent.value.analytics) initializeAll()
  if (consent.value.marketing) initMarketing()
  if (consent.value.analytics) initAnalytics()
}

// separate to minimize calls (mostly because of GA) (might not change much, depends on the library)
function initializeAll() {

  // Google Analytics
  gtag('consent', 'update', {
    ad_user_data: 'granted',
    ad_personalization: 'granted',
    ad_storage: 'granted',
    analytics_storage: 'granted'
  })

  // Google Tag Manager
  const gtm = useGtm()
  if (gtm) gtm.enable()

  // Meta Pixel
  nuxtApp.$fb.enable()

  // Microsoft Clarity (heatmaps)
  // window.clarity('consent')
}

function initAnalytics() {

  gtag('consent', 'update', {
    analytics_storage: 'granted'
  })
  // window.clarity('consent')
}

function initMarketing() {

  const gtm = useGtm()
  if (gtm) gtm.enable()

  gtag('consent', 'update', {
    ad_user_data: 'granted',
    ad_personalization: 'granted',
    ad_storage: 'granted',
  })

  nuxtApp.$fb.enable()
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

.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 30px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .17s;
  transition: .17s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 22px;
  width: 22px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .17s;
  transition: .17s;
}

input:checked+.slider {
  background-color: #000000;
}

input:focus+.slider {
  box-shadow: 0 0 1px #000000;
}

input:checked+.slider:before {
  -webkit-transform: translateX(20px);
  -ms-transform: translateX(20px);
  transform: translateX(20px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 25px;
}

.slider.round:before {
  border-radius: 50%;
}

.font-normal {
  font-weight: 500;
}
</style>
