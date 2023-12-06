<template>
  <div>
    <BContainer fluid class="section-1 img-background">
      <BRow class="background-title">
        <BCol cols="12">
          <BContainer>
            <h1 class="page-title">Especialistas em projetos</h1>
            <p class="page-subtitle"></p>
          </BContainer>
        </BCol>
      </BRow>
    </BContainer>
    <BContainer fluid class="section-2">
      <BRow class="mt-5 pt-5" v-if="loading">
        <BCol cols="12" md="6" lg="4" class="mt-5 projects-loader" v-for="loader in Array(9).keys()" :key="loader">
          <BSkeletonImg card-img="top" aspect="3:2"></BSkeletonImg>
        </BCol>
      </BRow>
    </BContainer>
    <CookieBanner />
  </div>
</template>
<script setup>
</script>
<style scoped>
.section-1 {
  background-image: url('/images/arquitetura.webp');
}
</style>
