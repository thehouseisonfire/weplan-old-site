<template>
  <div>
    <BContainer fluid class="section-1 img-background">
      <BRow class="background-title">
        <BCol cols="12">
          <BContainer>
            <h1 class="page-title">Móveis Planejados</h1>
            <p class="page-subtitle">
              Com qualidade e sofisticação direto da indústria.<br />
              Processo gerenciado do projeto até a montagem.
            </p>
            <p class="mt-4">
              <NuxtLink to="/como-funciona" class="button-link">
                Descubra mais
              </NuxtLink>
            </p>
          </BContainer>
        </BCol>
      </BRow>
    </BContainer>
    <BContainer fluid class="section-2 section-spacing section-background-light-color carousel-container">
      <BRow class="mb-5">
        <BCol cols="12" class="align-self-center text-center">
          <h2 class="section-title">Quem confia na WePlan</h2>
        </BCol>
      </BRow>
      <LazyVideoCarousel />
    </BContainer>
    <BContainer id="nps" fluid class="section-3 section-spacing">
      <BRow>
        <BCol cols="12" md="6" class="align-self-center">
          <h3 class="section-title mx-5">A WePlan encanta seus clientes</h3>
          <p class="mx-5">
            Todos os nossos atendimentos são avaliados para garantir que estamos
            prestando o melhor serviço e entregando as melhores soluções.
            Estamos sempre atentos aos feedbacks que recebemos de nossos
            parceiros e clientes.
          </p>
          <p class="mx-5">
            Para isso,
            <NuxtLink href="https://nps.weplan.com.br/" target="_blank" class="highlighted-words-yellow">utilizamos uma
              das
              metodologias mais avançadas do mercado: o Net
              Promoter Score (NPS)</NuxtLink>.
          </p>
          <p class="mx-5">
            Atualmente,
            <span class="highlighted-words-yellow">nosso padrão de atendimento está na Zona de Encantamento</span>. Para
            uma empresa entrar na Zona de Encantamento o NPS precisa
            estar entre 91 e 100.
            <span class="highlighted-words-yellow">O NPS atual da WePlan é 93</span>.
          </p>
        </BCol>
        <BCol cols="12" md="6" class="text-center">
          <NuxtImg src="/images/nps.webp" class="img-fluid" width="225px" height="400px"
            alt="Net Promoter Score da WePlan" />
        </BCol>
      </BRow>
    </BContainer>
    <CookieBanner />
  </div>
</template>

<style scoped>
.section-1 {
  background-image: url('/images/environments/sala-jantar.webp');
}
</style>
