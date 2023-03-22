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
          <p>Todo <span class="highlighted-words">processo</span> desde o projeto até a montagem foi <span class="highlighted-words">pensado por nós para ser o mais simples, eficiente e qualificado</span> do país.</p>
        </b-col>
        <b-col md="1"></b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col md="1"></b-col>
        <b-col cols="12" sm="6" md="2" class="mb-2">
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
        <b-col cols="12" sm="6" md="2" class="mb-2">
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
        <b-col cols="12" sm="6" md="2" class="mb-2">
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
        <b-col cols="12" sm="6" md="2" class="mb-2">
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
        <b-col cols="12" sm="6" md="2" class="mb-2">
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

.card-text {
  align-self: center !important;
  padding-top: 0;
  font-weight: 300;
  color: white;
}

.button-link {
  font-size: 2vw;
}

.button-link:hover,
.button-link:active,
.button-link:focus {
  text-decoration: none;
  color: #4a148c;
}

@media only screen and (max-width: 576px) {
  .button-link {
    font-size: 3vw;
  }
}

@media only screen and (min-width: 992px) {
  .button-link {
    font-size: 1vw;
  }
}
</style>