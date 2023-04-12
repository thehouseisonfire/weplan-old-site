<template>
  <div>
    <b-container fluid class="section-1 img-background">
      <b-row>
        <b-col cols="12">
          <b-container>
            <h1 class="page-title text-shadow">Como funciona</h1>
            <p class="text-shadow">
              Entregamos o acesso a móveis planejados com facilidade, respeito e
              alta qualidade.<br />
              Conectamos todos os pontos do processo entre indústria,
              profissional e clientes para desenvolver nosso trabalho de forma
              rápida e transparente.
            </p>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid class="section-2">
      <b-row>
        <b-col md="1"></b-col>
        <b-col cols="12" md="10">
          <p>
            Todo <span class="highlighted-words-yellow">processo</span> desde o
            projeto até a montagem foi
            <span class="highlighted-words-yellow"
              >pensado por nós para ser o mais simples, eficiente e
              qualificado</span
            >
            do país.
          </p>
        </b-col>
        <b-col md="1"></b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col md="1"></b-col>
        <b-col cols="12" sm="6" md="2" class="mb-5 mx-auto">
          <div class="card img-shadow">
            <div class="card-header">1</div>
            <div class="card-body">
              <b-img
                src="~/assets/animated-icons/reuniao-cliente-profisisional.gif"
                class="img-fluid"
                alt="Reunião entre cliente e profissional"
              ></b-img>
              <p class="card-text">
                Contato inicial entre profissional, credenciado e cliente
              </p>
            </div>
          </div>
        </b-col>
        <b-col cols="12" sm="6" md="2" class="mb-5 mx-auto">
          <div class="card img-shadow">
            <div class="card-header">2</div>
            <div class="card-body">
              <b-img
                src="~/assets/animated-icons/projetando.gif"
                class="img-fluid"
                alt="Profissional projetando por meio da plataforma da WePlan"
              ></b-img>
              <p class="card-text">
                Profissional credenciado inicia o projeto e utiliza toda a
                plataforma de controle da WePlan
              </p>
            </div>
          </div>
        </b-col>
        <b-col cols="12" sm="6" md="2" class="mb-5 mx-auto">
          <div class="card img-shadow">
            <div class="card-header">3</div>
            <div class="card-body">
              <b-img
                src="~/assets/animated-icons/software-direto-industria.gif"
                class="img-fluid"
                alt="Software conectado diretamente a indústria"
              ></b-img>
              <p class="card-text">
                Levamos o projeto através do software promob direto a indústria
                ideal para a finalidade
              </p>
            </div>
          </div>
        </b-col>
        <b-col cols="12" sm="6" md="2" class="mb-5 mx-auto">
          <div class="card img-shadow">
            <div class="card-header">4</div>
            <div class="card-body">
              <b-img
                src="~/assets/animated-icons/producao-transporte.gif"
                class="img-fluid"
                alt="Produção e transporte"
              ></b-img>
              <p class="card-text">A indústria produz e despacha os móveis</p>
            </div>
          </div>
        </b-col>
        <b-col cols="12" sm="6" md="2" class="mb-5 mx-auto">
          <div class="card img-shadow">
            <div class="card-header">5</div>
            <div class="card-body">
              <b-img
                src="~/assets/animated-icons/montagem.gif"
                class="img-fluid"
                alt="Montagem"
              ></b-img>
              <p class="card-text">A montagem é feita no local</p>
            </div>
          </div>
        </b-col>
        <b-col md="1"></b-col>
      </b-row>
    </b-container>
    <b-container fluid class="section-3">
      <b-row>
        <b-col id="img-1" class="img-fluid img-background" cols="12" md="6">
          <b-link to="/para-voce">
            <h2 class="text-center text-shadow">Quero comprar móveis planejados</h2>
          </b-link>
        </b-col>
        <b-col id="img-2" class="img-fluid img-background" cols="12" md="6">
          <b-link to="/seja-nosso-parceiro">
            <h2 class="text-center text-shadow">Quero ser um parceiro da WePlan</h2>
          </b-link>
        </b-col>
      </b-row>
    </b-container>
    <b-container id="vantagens-weplan" fluid class="section-4">
      <b-row class="mb-5">
        <b-col cols="12" class="align-self-center text-center">
          <h2 class="section-title">Vantagens da WePlan</h2>
          <span
            >Nós tornamos o processo mais enxuto e preciso. Desta forma,
            apresentamos inúmeras vantagens em comparação ao processo
            tradicional de venda de móveis planejados.</span
          >
        </b-col>
      </b-row>
      <b-row>
        <b-container>
          <b-row id="velocidade" class="subsection">
            <b-col cols="12" md="6" class="align-self-center text-md-right">
              <h3 class="section-subtitle">Velocidade</h3>
              <p>
                O seu projeto de móveis planejados será confeccionado em
                <span class="highlighted-words-yellow"
                  >indústrias parceiras experientes e consolidadas</span
                >
                do mercado que
                <span class="highlighted-words-yellow">prezam pelo prazo</span>.
              </p>
            </b-col>
            <b-col cols="12" md="6" class="text-center">
              <b-img
                src="~/assets/images/vantagem-velocidade.webp"
                class="img-fluid img-shadow"
                alt="Uma das vantagens da WePlan é a velocidade"
              />
            </b-col>
          </b-row>
          <b-row id="qualidade" class="my-3">
            <b-col md="6" class="text-center d-none d-md-block">
              <b-img
                src="~/assets/images/vantagem-qualidade.webp"
                class="img-fluid img-shadow"
                alt="Uma das vantagens da WePlan é a qualidade"
              />
            </b-col>
            <b-col cols="12" md="6" class="align-self-center text-md-left">
              <h3 class="section-subtitle">Qualidade</h3>
              <p>
                Nossos
                <span class="highlighted-words-yellow"
                  >móveis planejados são reconhecidos pelo nível de qualidade em
                  que são fabricados</span
                >
                e isso é ponto primordial para nós e nossos parceiros.
              </p>
            </b-col>
            <b-col md="6" class="text-center d-md-none">
              <b-img
                src="~/assets/images/vantagem-qualidade.webp"
                class="img-fluid img-shadow"
                alt="Uma das vantagens da WePlan é a qualidade"
              />
            </b-col>
          </b-row>
          <b-row id="facilidade" class="subsection">
            <b-col cols="12" md="6" class="align-self-center text-md-right">
              <h3 class="section-subtitle">Facilidade</h3>
              <p>
                <span class="highlighted-words-yellow"
                  >Acabar com a burocracia</span
                >
                para projetar e executar móveis planejados é uma dor do mercado,
                nós acabamos com isso
                <span class="highlighted-words-yellow"
                  >através das conexões entre cliente, profissional e
                  indústria</span
                >.
              </p>
            </b-col>
            <b-col cols="12" md="6" class="text-center">
              <b-img
                src="~/assets/images/vantagem-facilidade.webp"
                class="img-fluid img-shadow"
                alt="Uma das vantagens da WePlan é a facilidade"
              />
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
  background-image: url('~/assets/images/equipe-reuniao-weplan.jpg');
  text-align: center;
  color: #fff;
  font-size: 1.1rem;
}

.section-2,
.section-4 {
  padding-top: 8rem;
  padding-bottom: 8rem;
}

.section-2 {
  color: #1c1c1c;
  font-size: 1.5rem;
  text-align: center;
  background-color: #efeff0;
}

.section-3 .row div {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #fff;
  font-size: 2rem;
  padding: 0;
}

.section-3 .row div a h2 {
  font-size: 2.5rem;
  color: #fff;
  background-color: #1c1c1c66;
  padding: 1.5rem;
}

.section-3 .row div a:hover h2,
.section-3 .row div a:active h2,
.section-3 .row div a:focus h2 {
  background-color: #1c1c1ccc;
}

.section-3 a {
  text-decoration: none;
  background-color: #1c1c1c33;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 2rem;
}

.section-3 .row div a:hover,
.section-3 .row div a:active,
.section-3 .row div a:focus {
  background-color: #1c1c1c99;
}

.subsection {
  background-color: #efeff0;
  border-radius: 10px;
  padding: 2rem;
}

.button-link {
  font-size: 2vw;
  margin-bottom: 5px;
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

#vantagens-weplan p {
  font-size: 1.1rem;
}

#img-1 {
  background-image: url('~/assets/images/environments/sala-jantar-cozinha.jpg');
  height: 1000px;
}

#img-2 {
  background-image: url('~/assets/images/seja-nosso-parceiro.jpg');
  height: 1000px;
}
</style>
