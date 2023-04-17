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
    <b-container id="nosso-processo" fluid class="section-2">
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
                src="~/assets/images/animated-icons/reuniao-cliente-profisisional.gif"
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
                src="~/assets/images/animated-icons/projetando.gif"
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
                src="~/assets/images/animated-icons/software-direto-industria.gif"
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
                src="~/assets/images/animated-icons/producao-transporte.gif"
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
                src="~/assets/images/animated-icons/montagem.gif"
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
    <b-container id="vantagens-weplan" fluid class="section-3">
      <b-row class="mb-5">
        <b-col cols="12" class="align-self-center text-center">
          <h2 class="section-title">Vantagens da WePlan</h2>
          <span
            >Nós tornamos o processo mais enxuto e preciso. Há muitas vantagens em pertencer ao nosso ecossistema.</span
          >
        </b-col>
      </b-row>
      <b-row>
        <b-container fluid>
          <b-row id="velocidade" class="inverted-colors">
            <b-col cols="12" md="6" class="align-self-center text-md-right">
              <h3 class="section-subtitle mt-5 mx-5">Velocidade</h3>
              <p class="mb-5 mx-5">
                O seu projeto de móveis planejados será confeccionado em
                <span class="highlighted-words-yellow"
                  >indústrias parceiras experientes e consolidadas</span
                >
                do mercado que
                <span class="highlighted-words-yellow">prezam pelo prazo</span>.
              </p>
            </b-col>
            <b-col id="img-vantagem-velocidade" class="img-fluid img-background" cols="12" md="6">
            </b-col>
          </b-row>
          <b-row id="qualidade">
            <b-col id="img-vantagem-qualidade" class="img-fluid img-background d-none d-md-block" cols="12" md="6">
            </b-col>
            <b-col cols="12" md="6" class="align-self-center text-md-left">
              <h3 class="section-subtitle mt-5 mx-5">Qualidade</h3>
              <p class="mb-5 mx-5">
                Nossos
                <span class="highlighted-words-yellow"
                  >móveis planejados são reconhecidos pelo nível de qualidade em
                  que são fabricados</span
                >
                e isso é ponto primordial para nós e nossos parceiros.
              </p>
            </b-col>
            <b-col id="img-vantagem-qualidade" class="img-fluid img-background d-md-none" cols="12" md="6">
            </b-col>
          </b-row>
          <b-row id="facilidade" class="inverted-colors">
            <b-col cols="12" md="6" class="align-self-center text-md-right">
              <h3 class="section-subtitle mt-5 mx-5">Facilidade</h3>
              <p class="mb-5 mx-5">
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
            <b-col id="img-vantagem-facilidade" class="img-fluid img-background" cols="12" md="6">
            </b-col>
          </b-row>
        </b-container>
      </b-row>
    </b-container>
    <b-container fluid class="section-4">
      <b-row>
        <b-col id="img-comprar-moveis" class="img-background text-block" cols="12" md="6">
          <b-link to="/para-voce">
            <h2 class="text-shadow">Quero comprar móveis planejados</h2>
          </b-link>
        </b-col>
        <b-col id="img-ser-parceiro" class="img-background text-block" cols="12" md="6">
          <b-link to="/seja-nosso-parceiro">
            <h2 class="text-shadow">Quero ser um parceiro da WePlan</h2>
          </b-link>
        </b-col>
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

.section-2 {
  color: #1c1c1c;
  font-size: 1.5rem;
  text-align: center;
  background-color: #efeff0;
  padding-top: 8rem;
  padding-bottom: 8rem;
}

.section-3 {
  font-size: 1.5rem;
  padding-top: 8rem;
}

#img-comprar-moveis {
  background-image: url('~/assets/images/environments/sala-jantar-cozinha.jpg');
  height: 1000px;
}

#img-ser-parceiro {
  background-image: url('~/assets/images/seja-nosso-parceiro.jpg');
  height: 1000px;
}

#img-vantagem-velocidade {
  background-image: url('~/assets/images/vantagem-velocidade.jpg');
  height: 600px;
}

#img-vantagem-qualidade {
  background-image: url('~/assets/images/vantagem-qualidade.jpg');
  height: 600px;
}

#img-vantagem-facilidade {
  background-image: url('~/assets/images/vantagem-facilidade.jpg');
  height: 600px;
}
</style>
