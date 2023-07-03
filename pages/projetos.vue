<template>
  <div>
    <b-container fluid class="section-1 img-background">
      <b-row class="background-title">
        <b-col cols="12">
          <b-container>
            <h1 class="page-title">Especialistas em projetos</h1>
            <p class="page-subtitle"></p>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid class="section-2">
      <b-row class="mt-5 pt-5" v-if="loading">
        <b-col cols="12" md="6" lg="4" class="mt-5 projects-loader" v-for="loader in Array(9).keys()" :key="loader">
          <b-skeleton-img card-img="top" aspect="3:2"></b-skeleton-img>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: 'ProjetosPage',
}
</script>
<style scoped>
.section-1 {
  background-image: url('~/assets/images/arquitetura.webp');
}
</style>
