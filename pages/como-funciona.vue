<template>
  <div>
    <b-container fluid class="section-1">
      <b-row>
        <b-col cols="12">
          <b-container>
            <h1 class="page-title text-shadow-purple">Como funciona</h1>
            <p class="text-shadow-purple">
              Entregamos o acesso a móveis planejados com facilidade, respeito e alta qualidade.<br>
              Conectamos todos os pontos do processo entre indústria, profissional e clientes para desenvolver nosso trabalho de forma rápida e transparente.
            </p>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid class="section-2">
      <b-row>
        <b-col md="1"></b-col>
        <b-col cols="12" md="10">
          <p>Todo <span class="highlighted-words-yellow">processo</span> desde o projeto até a montagem foi <span class="highlighted-words-yellow">pensado por nós para ser o mais simples, eficiente e qualificado</span> do país.</p>
        </b-col>
        <b-col md="1"></b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col md="1"></b-col>
        <b-col cols="12" sm="6" md="2" class="mb-2 mx-auto">
          <div class="card">
            <div class="card-header">
              1
            </div>
            <div class="card-body">
              <b-img src="~/assets/animated-icons/reuniao-cliente-profisisional.gif" class="img-fluid" alt="Reunião entre cliente e profissional"></b-img>
              <p class="card-text">
                Contato inicial entre profissional credenciado e cliente
              </p>
            </div>
          </div>
        </b-col>
        <b-col cols="12" sm="6" md="2" class="mb-2 mx-auto">
          <div class="card">
            <div class="card-header">
              2
            </div>
            <div class="card-body">
              <b-img src="~/assets/animated-icons/projetando.gif" class="img-fluid" alt="Profissional projetando por meio da plataforma da WePlan"></b-img>
              <p class="card-text">
                Profissional credenciado inicia o projeto e utiliza toda a plataforma de controle da WePlan
              </p>
            </div>
          </div>
        </b-col>
        <b-col cols="12" sm="6" md="2" class="mb-2 mx-auto">
          <div class="card">
            <div class="card-header">
              3
            </div>
            <div class="card-body">
              <b-img src="~/assets/animated-icons/software-direto-industria.gif" class="img-fluid" alt="Software conectado diretamente a indústria"></b-img>
              <p class="card-text">
                Levamos o projeto através do software promob direto a indústria ideal para a finalidade
              </p>
            </div>
          </div>
        </b-col>
        <b-col cols="12" sm="6" md="2" class="mb-2 mx-auto">
          <div class="card">
            <div class="card-header">
              4
            </div>
            <div class="card-body">
              <b-img src="~/assets/animated-icons/producao-transporte.gif" class="img-fluid" alt="Produção e transporte"></b-img>
              <p class="card-text">
                Indústria produz e despacha os móveis
              </p>
            </div>
          </div>
        </b-col>
        <b-col cols="12" sm="6" md="2" class="mb-2 mx-auto">
          <div class="card">
            <div class="card-header">
              5
            </div>
            <div class="card-body">
              <b-img src="~/assets/animated-icons/montagem.gif" class="img-fluid" alt="Montagem"></b-img>
              <p class="card-text">
                A montagem é feita no local
              </p>
            </div>
          </div>
        </b-col>
        <b-col md="1"></b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col md="1"></b-col>
        <b-col cols="12" sm="6" md="5">
          <b-link to="/para-voce" class="button-link btn-block">
            Quero entender como comprar móveis para mim ou minha empresa
          </b-link>
        </b-col>
        <b-col cols="12" sm="6" md="5">
          <b-link to="/seja-um-parceiro" class="button-link btn-block">
            Quero entender como ser um parceiro da WePlan
          </b-link>
        </b-col>
        <b-col md="1"></b-col>
      </b-row>
    </b-container>
    <b-container id="vantagens-weplan" fluid class="section-3">
      <b-row class="mb-5">
        <b-col cols="12" class="align-self-center text-center">
          <h2 class="section-title">Vantagens da WePlan</h2>
          <span>Nós tornamos o processo mais enxuto e preciso. Desta forma, apresentamos inúmeras vantagens em comparação ao processo tradicional de venda de móveis planejados.</span>
        </b-col>
      </b-row>
      <b-row>
        <b-container>
          <b-row id="velocidade" class="subsection">
            <b-col cols="12" md="6" class="align-self-center text-md-right text-sm-center">
              <h3 class="section-subtitle">Velocidade</h3>
              <p>O seu projeto de móveis planejados será confeccionado em <span class="highlighted-words-yellow">indústrias parceiras experientes e consolidadas</span> do mercado que <span class="highlighted-words-yellow">prezam pelo prazo</span>.</p>
            </b-col>
            <b-col cols="12" md="6" class="text-center">
              <b-img src="~/assets/images/vantagem-velocidade.webp" class="img-fluid img-shadow" alt="Uma das vantagens da WePlan é a velocidade" />
            </b-col>
          </b-row>
          <b-row id="qualidade" class="my-3">
            <b-col md="6" class="text-center d-none d-md-block">
              <b-img src="~/assets/images/vantagem-qualidade.webp" class="img-fluid img-shadow" alt="Uma das vantagens da WePlan é a qualidade" />
            </b-col>
            <b-col cols="12" md="6" class="align-self-center text-md-left text-sm-center">
              <h3 class="section-subtitle">Qualidade</h3>
              <p>Nossos <span class="highlighted-words-yellow">móveis planejados são reconhecidos pelo nível de qualidade em que são fabricados</span> e isso é ponto primordial para nós e nossos parceiros.</p>
            </b-col>
            <b-col md="6" class="text-center d-md-none">
              <b-img src="~/assets/images/vantagem-qualidade.webp" class="img-fluid img-shadow" alt="Uma das vantagens da WePlan é a qualidade" />
            </b-col>
          </b-row>
          <b-row id="facilidade" class="subsection">
            <b-col cols="12" md="6" class="align-self-center text-md-right text-sm-center">
              <h3 class="section-subtitle">Facilidade</h3>
              <p><span class="highlighted-words-yellow">Acabar com a burocracia</span> para projetar e executar móveis planejados é uma dor do mercado, nós acabamos com isso <span class="highlighted-words-yellow">através das conexões entre cliente, profissional e indústria</span>.</p>
            </b-col>
            <b-col cols="12" md="6" class="text-center">
              <b-img src="~/assets/images/vantagem-facilidade.webp" class="img-fluid img-shadow" alt="Uma das vantagens da WePlan é a facilidade" />
            </b-col>
          </b-row>
        </b-container>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: 'ComoFuncionaPage',
}
</script>
<style scoped>
.section-1 {
  background-image: url("~/assets/images/equipe-reuniao-weplan.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  color: #fff;
  font-size: 1.1rem;
}

.section-2 {
  padding-top: 5rem;
  padding-bottom: 5rem;
  color: #4a148c;
  font-size: 1.5rem;
  text-align: center;
  background-color: #ffcd35;
}

.section-3 {
  padding-top: 5rem;
  padding-bottom: 5rem;
  color: #4a148c;
}

.subsection {
  background-color: #efeff0;
  border-radius: 10px;
  padding: 2rem;
}

.card {
  align-self: center !important;
  font-size: 1rem;
  background-color: #240051;
  border: #240051;
  height: 100%;
}

.card-header {
  align-self: center !important;
  font-size: 2rem;
  font-weight: 700;
  padding-bottom: 0;
  padding-top: 1.25rem;
  color: #ffc821;
}

.card-body {
  align-self: center !important;
  padding: 0 1.25rem 1.25rem;
}

.card-body img {
  width: 100%;
  max-width: 250px;
}

.card-text {
  align-self: center !important;
  padding-top: 0;
  font-weight: 300;
  color: white;
}

.button-link {
  font-size: 2vw;
  margin-bottom: 5px;
  background-color: #4a148c;
  color: #fff;
}

.button-link:hover,
.button-link:active,
.button-link:focus {
  background-color: #240051;
  text-decoration: none;
}

@media only screen and (max-width: 576px) {
  .button-link {
    font-size: 4.5vw;
  }
}

@media only screen and (min-width: 992px) {
  .button-link {
    font-size: 1vw;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1200px) {
  .card-text {
    font-size: 1vw;
  }
}

#vantagens-weplan p {
  font-size: 1.1rem;
}
</style>