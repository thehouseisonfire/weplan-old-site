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
              <b-link href="#sou-profissional-interiores" class="button-link btn-block">
                Sou profissional de interiores
              </b-link>
            </b-col>
            <b-col cols="12" md="4" class="mb-2">
              <b-link href="#sou-montador" class="button-link btn-block">
                Sou montador
              </b-link>
            </b-col>
            <b-col cols="12" md="4" class="mb-2">
              <b-link href="#sou-fornecedor" class="button-link btn-block">
                Sou fornecedor
              </b-link>
            </b-col>
          </b-row>
        </b-container>
      </b-row>
    </b-container>
    <b-container id="sobre-o-setor-moveis-planejados" fluid class="section-2">
      <b-row class="mb-5">
        <b-col cols="12" class="align-self-center text-center">
          <p>
            <span class="highlighted-words-yellow">Aqui vai um texto sobre o mercado de móveis planejados.</span>
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-container>
          <b-row class="subsection news">
            <b-col
              cols="12"
              class="align-self-center"
            >
              <p class="text-shadow-purple">
                A alta demanda de reformas e compra de móveis planejados desde 2021 fez com que o setor de marcenaria alcançasse 14,7% de crescimento em relação a anos anteriores, segundo a Valor Globo.
              </p>
            </b-col>
          </b-row>
        </b-container>
      </b-row>
      <b-row class="mt-5">
        <b-col cols="12" class="mb-4 text-center">
          <h2 class="section-title">Potencial de mercado</h2>
        </b-col>
        <b-col cols="12" md="3" class="mb-2 mx-auto">
          <div class="card">
            <div class="card-header">R$ 62,6 bi</div>
            <div class="card-body">
              <!-- <b-img
                src="~/assets/animated-icons/reuniao-cliente-profisisional.gif"
                class="img-fluid"
                alt="Reunião entre cliente e profissional"
              ></b-img> -->
              <p class="card-text">
                Potencial de compra<br />por ano de móveis planejados<br />
                <span class="source">Fonte: Móveis de Valor</span>
              </p>
            </div>
          </div>
        </b-col>
        <b-col cols="12" md="3" class="mb-2 mx-auto">
          <div class="card">
            <div class="card-header">216 mil</div>
            <div class="card-body">
              <!-- <b-img
                src="~/assets/animated-icons/reuniao-cliente-profisisional.gif"
                class="img-fluid"
                alt="Reunião entre cliente e profissional"
              ></b-img> -->
              <p class="card-text">
                Arquitetos ativos no Brasil (2023)<br />
                <span class="source">Fonte: CAU-BR e CREA-SP</span>
              </p>
            </div>
          </div>
        </b-col>
        <b-col cols="12" md="3" class="mb-2 mx-auto">
          <div class="card">
            <div class="card-header">55 mil</div>
            <div class="card-body">
              <!-- <b-img
                src="~/assets/animated-icons/reuniao-cliente-profisisional.gif"
                class="img-fluid"
                alt="Reunião entre cliente e profissional"
              ></b-img> -->
              <p class="card-text">
                Designers de interiores ativos<br /> no Brasil (2023)<br />
                <span class="source">Fonte: CAU-BR e CREA-SP</span>
              </p>
            </div>
          </div>
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
  background-image: url('~/assets/images/discutindo-projeto.webp');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  color: #fff;
}

.section-2 {
  padding-top: 5rem;
  padding-bottom: 5rem;
  color: #4a148c;
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

@media only screen and (max-width: 576px) {
  .subsection {
    border-radius: 0;
    padding: 5rem 1rem;
    font-size: 5vw;
  }
}

@media only screen and (min-width: 992px) {
  .subsection {
    font-size: 2.5vw;
  }
}
</style>
