<template>
  <div>
    <b-container fluid class="section-1">
      <b-row>
        <b-col cols="12">
          <b-container>
            <h1 class="display-4 font-weight-bold text-shadow">Móveis Planejados</h1>
            <p class="text-shadow">
              De maneira facilitada<br>
              De alta qualidade e sofisticação<br>
              De acordo com o seu desejo
            </p>
            <p>
              <b-link to="/como-funciona">
                <button type="button" class="button-link">Descubra mais</button>
              </b-link>
            </p>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="section-2">
      <b-row>
        <b-col cols="12" md="6" class="align-self-center">
          <p>O <span class="highlighted-words">negócio lucrativo para você profissional</span> que trabalha com projetos de móveis planejados.</p>
          <p>A <span class="highlighted-words">solução completa para você cliente</span> que precisa de móveis planejados a altura de suas expectativas.</p>
        </b-col>
        <b-col cols="12" md="6">
          <b-img src="~/assets/images/dois-projetos.webp" class="img-fluid" alt="WePlan" />
        </b-col>
      </b-row>      
    </b-container>
    <b-container class="section-3">
      <b-row>
        <b-col cols="12" md="4" class="align-self-center">
          teste
        </b-col>
        <b-col cols="12" md="4" class="align-self-center">
          teste
        </b-col>
        <b-col cols="12" md="4" class="align-self-center">
          teste
        </b-col>
      </b-row>      
    </b-container>
  </div>
</template>
<script>
export default {
  name: 'IndexPage',
}
</script>
<style scoped>
.section-1 {
  background-image: url("~/assets/images/projeto-weplan.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 8rem;
  padding-bottom: 8rem;
  color: #fff;
  font-size: 1.1rem;
}

.section-2 {
  padding-top: 2rem;
  padding-bottom: 2rem;
  color: #4a148c;
  font-size: 1.2rem;
}
</style>
