<template>
  <div>
    <b-container fluid class="section-1 img-background">
      <b-row class="background-title">
        <b-col cols="12">
          <b-container>
            <h1 class="page-title">Móveis Planejados</h1>
            <p class="page-subtitle">
              Móveis planejados direto da indústria.<br />
              Do projeto até a montagem.
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
    <b-container fluid class="section-2 section-spacing section-background-light-color">
      <b-row class="mb-5">
        <b-col cols="12" class="align-self-center text-center">
          <h2 class="section-title">Clientes que confiam na WePlan</h2>
        </b-col>
      </b-row>
      <b-row>
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
}
</script>
<style scoped>
.section-1 {
  background-image: url('~/assets/images/environments/cozinha-moderna.jpg');
}
</style>
