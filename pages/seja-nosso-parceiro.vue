<template>
  <div>
    <b-container fluid class="section-1">
      <b-row>
        <b-col id="img-profissional-interiores" class="img-fluid img-background" cols="4">
          <b-link to="#profissional-interiores">
            <h2 class="text-center text-shadow">Sou profissional de interiores</h2>
          </b-link>
        </b-col>
        <b-col id="img-montador" class="img-fluid img-background" cols="4">
          <b-link to="#montador">
            <h2 class="text-center text-shadow">Sou montador</h2>
          </b-link>
        </b-col>
        <b-col id="img-fornecedor" class="img-fluid img-background" cols="4">
          <b-link to="#fornecedor">
            <h2 class="text-center text-shadow">Sou fornecedor</h2>
          </b-link>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid class="section-2">
      <b-row>
        <b-col id="img-mercado" class="img-fluid img-background" cols="12" md="4">
          <h2 class="text-center text-shadow">R$ 62,6 bi</h2>
          <p>
            Potencial de compra<br />
            por ano de móveis planejados<br />
            <span class="source">Fonte: Móveis de Valor (2023)</span>
          </p>
        </b-col>
        <b-col id="img-quantidade-arquitetos" class="img-fluid img-background" cols="12" md="4">
          <h2 class="text-center text-shadow">216 mil</h2>
          <p>
            Arquitetos ativos no Brasil<br />
            <span class="source">Fonte: CAU-BR e CREA-SP (2023)</span>
          </p>
        </b-col>
        <b-col id="img-quantidade-designers" class="img-fluid img-background" cols="12" md="4">
          <h2 class="text-center text-shadow">55 mil</h2>
          <p>
            Designers de interiores ativos<br />
            no Brasil<br />
            <span class="source">Fonte: CAU-BR e CREA-SP (2023)</span>
          </p>
        </b-col>
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
  padding: 0;
}

.section-1 .row div {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #fff;
  font-size: 2rem;
  padding: 0;
}

.section-1 .row div a h2 {
  font-size: 3vw;
  color: #fff;
  background-color: #1c1c1c66;
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 150px;
  width: 100%;
}

.section-1 .row div a:hover h2,
.section-1 .row div a:active h2,
.section-1 .row div a:focus h2 {
  background-color: #1c1c1ccc;
}

.section-1 a {
  text-decoration: none;
  background-color: #1c1c1c33;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.section-1 .row div a:hover,
.section-1 .row div a:active,
.section-1 .row div a:focus {
  background-color: #1c1c1c99;
}

.section-2 {
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
}

.subsection {
  border-radius: 10px;
  padding: 7rem 2rem;
  color: #fff;
  font-size: 3.5vw;
}

.subsection.news {
  background-image: url('~/assets/images/feira-moveis.webp');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.card {
  border-radius: 50%;
}

.card-body img {
  max-width: 150px;
}

.card-text .source {
  font-size: 0.7rem;
}

#img-profissional-interiores {
  background-image: url('~/assets/images/profissional-interiores.jpg');
  height: 1000px;
}

#img-montador {
  background-image: url('~/assets/images/montador.jpg');
  height: 1000px;
}

#img-fornecedor {
  background-image: url('~/assets/images/fornecedor.jpg');
  height: 1000px;
}

#img-mercado {
  background-image: url('~/assets/images/profissional-interiores.jpg');
  height: 600px;
}

#img-quantidade-arquitetos {
  background-image: url('~/assets/images/arquitetura.jpg');
  height: 600px;
}

#img-quantidade-designers {
  background-image: url('~/assets/images/design-interiores.jpg');
  height: 600px;
}

@media only screen and (max-width: 576px) {
  .subsection {
    border-radius: 0;
    padding: 5rem 1rem;
    font-size: 5vw;
  }
  
  #img-profissional-interiores,
  #img-montador,
  #img-fornecedor {
    height: 500px;
  }
}

@media only screen and (min-width: 992px) {
  .subsection {
    font-size: 2.5vw;
  }
}
</style>
