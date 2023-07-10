<template>
  <div>
    <b-container fluid class="section-1 img-background">
      <b-row class="background-title">
        <b-col cols="12">
          <b-container>
            <h1 class="page-title">Móveis Planejados</h1>
            <p class="page-subtitle">
              Com qualidade e sofisticação direto da indústria.<br />
              Processo gerenciado do projeto até a montagem.
            </p>
            <p class="mt-4">
              <b-link to="/como-funciona" class="button-link">
                Descubra mais
              </b-link>
            </p>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid class="section-2 section-spacing section-background-light-color carousel-container">
      <b-row class="mb-5">
        <b-col cols="12" class="align-self-center text-center">
          <h2 class="section-title">Quem confia na WePlan</h2>
        </b-col>
      </b-row>
      <b-row v-show="step == 1">
        <b-col cols="12" md="6" class="mb-4">
          <iframe
            class="embed-responsive embed-responsive-16by9 mx-auto img-shadow"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/QmiMFgIs6iw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </b-col>
        <b-col cols="12" md="6">
          "A
          <a
            href="https://nexen.com.br/"
            target="_blank"
            class="highlighted-words-yellow"
            >Nexen Energia Solar</a
          >
          é uma empresa fundada em 2018, no Sul do Brasil, que tem o propósito
          de levar energia limpa para todos.<br />
          <span class="highlighted-words-yellow"
            >Eles vieram até a WePlan com uma necessidade</span
          >: precisavam de móveis planejados. Para isso,
          <span class="highlighted-words-yellow"
            >conectamos a Arquiteta Talita Dal Santo</span
          >, que fez toda a gestão da obra, desde o mobiliário solto, o
          mobiliário planejado, a decoração até a iluminação.
          <span class="highlighted-words-yellow"
            >Foi uma verdadeira entrega completa</span
          >.<br />
          <span class="highlighted-words-yellow"
            >Os principais diferenciais foram o prazo extremamente curto</span
          >
          para executar o projeto, que conseguimos cumprir por conta de nossa
          conexão direta com a indústria,
          <span class="highlighted-words-yellow"
            >e a entrega da solução completa</span
          >. Acompanhamos todos os processos para garantir a efetividade e
          assertividade no projeto."<br />
          <b>- Ismael dos Santos, Head de Vendas da WePlan.</b>
        </b-col>
      </b-row>
      <b-row v-show="step == 2">
        <b-col cols="12" md="6" class="mb-4">
          <iframe
            class="embed-responsive embed-responsive-16by9 mx-auto img-shadow"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/55YKDHmWdwY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </b-col>
        <b-col cols="12" md="6">
          "A <a
            href="https://www.instagram.com/northininvestments/"
            target="_blank"
            class="highlighted-words-yellow"
          >Northin Investiments</a> é uma consultoria de investimentos de alta performance, alicerçada no atendimento humanizado, personalizado e tecnológico.<br />
          <span class="highlighted-words-yellow">Juntamente com nosso parceiro <a
            href="https://www.instagram.com/weplan.guilherme/"
            target="_blank"
            class="highlighted-words-yellow"
          >Guilherme Zarpelon</a> fizemos a gestão completa da obra</span>, desde o projeto até a finalização.<br />
          O cuidado com cada detalhe, o cumprimento de prazos e a entrega com qualidade nos destacam e fazem com que nossos clientes, tanto para projetos residenciais como corporativos confiem em nosso trabalho".<br />
          <b>- Ismael dos Santos, Head de Vendas da WePlan.</b>
        </b-col>
      </b-row>
      <b-button class="carousel-button previous" @click="previousStep()"><b-img
          src="~/assets/images/icons/arrow-right.svg"
          width="20px"
          height="20px"
          alt="Próximo"
        /></b-button>
      <b-button class="carousel-button next" @click="nextStep()"><b-img
          src="~/assets/images/icons/arrow-left.svg"
          width="20px"
          height="20px"
          alt="Anterior"
        /></b-button>
    </b-container>
    <b-container id="nps" fluid class="section-3 section-spacing">
      <b-row>
        <b-col cols="12" md="6" class="align-self-center">
          <h3 class="section-title mx-5">A WePlan encanta seus clientes</h3>
          <p class="mx-5">
            Todos os nossos atendimentos são avaliados para garantir que estamos
            prestando o melhor serviço e entregando as melhores soluções.
            Estamos sempre atentos aos feedbacks que recebemos de nossos
            parceiros e clientes.
          </p>
          <p class="mx-5">
            Para isso,
            <a
              href="https://nps.weplan.com.br/"
              target="_blank"
              class="highlighted-words-yellow"
              >utilizamos uma das metodologias mais avançadas do mercado: o Net
              Promoter Score (NPS)</a
            >.
          </p>
          <p class="mx-5">
            Atualmente,
            <span class="highlighted-words-yellow"
              >nosso padrão de atendimento está na Zona de Encantamento</span
            >. Para uma empresa entrar na Zona de Encantamento o NPS precisa
            estar entre 91 e 100.
            <span class="highlighted-words-yellow"
              >O NPS atual da WePlan é 93</span
            >.
          </p>
        </b-col>
        <b-col cols="12" md="6" class="text-center">
          <b-img
            src="~/assets/images/nps.png"
            class="img-fluid"
            width="225px"
            height="400px"
            alt="Net Promoter Score da WePlan"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      step: 1,
      lastStep: 2,
    }
  },
  methods: {
    nextStep () {
      this.step === this.lastStep ? this.step = 1 : this.step++;
      console.log(this.step);
    },
    previousStep () {
      this.step === 1 ? this.step = this.lastStep : this.step--;
      console.log(this.step);
    },
  },
}
</script>
<style scoped>
.section-1 {
  background-image: url('~/assets/images/environments/sala-jantar.webp');
}
</style>
