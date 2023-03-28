<template>
  <div>
    <b-container fluid class="section-1">
      <b-row>
        <b-col cols="12">
          <b-container>
            <h1 class="page-title text-shadow-purple">Seja nosso parceiro</h1>
          </b-container>
        </b-col>
      </b-row>
      <b-row class="mt-5">
        <b-container>
          <b-row>
            <b-col cols="12" md="4" class="mb-2">
              <b-link href="#sou-profissional-interiores">
                <button type="button" class="button-link btn-block">Sou profissional de interiores</button>
              </b-link>
            </b-col>
            <b-col cols="12" md="4" class="mb-2">
              <b-link href="#sou-montador">
                <button type="button" class="button-link btn-block">Sou montador</button>
              </b-link>
            </b-col>
            <b-col cols="12" md="4" class="mb-2">
              <b-link href="#sou-fornecedor">
                <button type="button" class="button-link btn-block">Sou fornecedor</button>
              </b-link>
            </b-col>
          </b-row>
        </b-container>
      </b-row>
    </b-container>
    
  </div>
</template>
<script>
export default {
  name: 'SejaNossoParceiroPage',
}
</script>
<style scoped>
.section-1 {
  background-image: url('~/assets/images/discutindo-projeto.webp');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  color: #fff;
}
</style>
