<template>
  <div>
    <BContainer fluid class="section-1">
      <BRow>
        <BCol
          class="img-profissional-interiores img-background text-block-with-background-img"
          cols="4"
        >
          <NuxtLink
            href="https://lp.weplan.com.br/seja-parceiro"
            role="button"
            class="text-decoration-none"
            target="_blank"
          >
            <h2>Sou profissional de interiores</h2>
          </NuxtLink>
        </BCol>
        <BCol class="img-montador img-background text-block-with-background-img" cols="4">
          <NuxtLink
            href="https://lp.weplan.com.br/form-seja-montador-parceiro"
            role="button"
            class="text-decoration-none"
            target="_blank"
          >
            <h2>Sou montador</h2>
          </NuxtLink>
        </BCol>
        <BCol class="img-fornecedor img-background text-block-with-background-img" cols="4">
          <NuxtLink
            href="https://lp.weplan.com.br/form-seja-fornecedor"
            role="button"
            class="text-decoration-none"
            target="_blank"
          >
            <h2>Sou fornecedor</h2>
          </NuxtLink>
        </BCol>
      </BRow>
    </BContainer>
    <BContainer fluid class="section-2 section-spacing">
      <BRow>
        <BCol cols="12" class="align-self-center text-center">
          <h2 class="section-title">Oportunidades no setor</h2>
          <p class="section-subtitle">
            “A
            <span class="highlighted-words-yellow"
              >alta demanda de reformas e compra de móveis planejados</span
            >
            desde 2021 fez com que o setor de marcenaria
            <span class="highlighted-words-yellow">alcançasse 14,7% de crescimento</span> em relação
            a anos anteriores.”<br />
            - Valor Globo, 2022
          </p>
        </BCol>
      </BRow>
    </BContainer>
    <BContainer fluid class="section-3">
      <BRow>
        <BCol
          id="img-mercado"
          class="img-background text-block-with-background-img"
          cols="12"
          md="4"
        >
          <div>
            <h2>R$ 62,6 bi</h2>
            <p>
              Potencial de compra<br />
              por ano de móveis planejados<br />
              <span class="source">Fonte: Móveis de Valor (2023)</span>
            </p>
          </div>
        </BCol>
        <BCol
          id="img-quantidade-arquitetos"
          class="img-background text-block-with-background-img"
          cols="12"
          md="4"
        >
          <div>
            <h2>216 mil</h2>
            <p>
              Arquitetos ativos no Brasil<br />
              <span class="source">Fonte: CAU-BR e CREA-SP (2023)</span>
            </p>
          </div>
        </BCol>
        <BCol
          id="img-quantidade-designers"
          class="img-background text-block-with-background-img"
          cols="12"
          md="4"
        >
          <div>
            <h2>55 mil</h2>
            <p>
              Designers de interiores ativos<br />
              no Brasil<br />
              <span class="source">Fonte: CAU-BR e CREA-SP (2023)</span>
            </p>
          </div>
        </BCol>
      </BRow>
    </BContainer>
    <BContainer fluid class="section-4 section-spacing">
      <BRow>
        <BCol cols="12" class="align-self-center text-center">
          <h2 class="section-title">Aqui na WePlan já temos resultados consolidados</h2>
          <p>
            <span class="weplan-result">+ de <span class="highlighted">R$ 1.2 milhões</span></span
            ><br />
            <span class="weplan-result-description">distribuído aos credenciados da WePlan</span
            ><br />
            - Até Abril de 2023
          </p>
        </BCol>
      </BRow>
    </BContainer>
    <BContainer fluid class="section-5 section-background-light-color">
      <BRow id="profissional-interiores" class="inverted-colors">
        <BCol
          class="img-profissional-interiores img-height-600px img-background text-block-with-background-img"
          cols="12"
          md="6"
        >
          <div>
            <h2>Sou profissional de interiores</h2>
            <span>
              <NuxtLink
                href="https://lp.weplan.com.br/seja-parceiro"
                target="_blank"
                class="button-link d-md-none text-decoration-none navbutton text-white m-auto"
              >
                Quero ser credenciado
              </NuxtLink>
            </span>
          </div>
        </BCol>
        <BCol cols="12" md="6" class="align-self-center text-center d-none d-md-block">
          <BButton href="https://lp.weplan.com.br/seja-parceiro" class="button-link" target="_blank"
            >Quero ser credenciado</BButton
          >
        </BCol>
      </BRow>
      <BRow id="montador">
        <BCol cols="12" md="6" class="align-self-center text-center d-none d-md-block">
          <BButton
            href="https://lp.weplan.com.br/form-seja-montador-parceiro"
            class="button-link"
            target="_blank"
            >Quero ser credenciado</BButton
          >
        </BCol>
        <BCol
          class="img-montador img-height-600px img-background text-block-with-background-img"
          cols="12"
          md="6"
        >
          <div>
            <h2>Sou montador</h2>
            <span>
              <NuxtLink
                href="https://lp.weplan.com.br/form-seja-montador-parceiro"
                target="_blank"
                class="button-link d-md-none text-decoration-none navbutton text-white m-auto"
              >
                Quero ser credenciado
              </NuxtLink>
            </span>
          </div>
        </BCol>
      </BRow>
      <BRow id="fornecedor" class="inverted-colors">
        <BCol
          class="img-fornecedor img-height-600px img-background text-block-with-background-img"
          cols="12"
          md="6"
        >
          <div>
            <h2>Sou fornecedor</h2>
            <span>
              <NuxtLink
                href="https://lp.weplan.com.br/form-seja-fornecedor"
                target="_blank"
                class="button-link d-md-none text-decoration-none navbutton text-white m-auto"
              >
                Quero ser credenciado
              </NuxtLink>
            </span>
          </div>
        </BCol>
        <BCol cols="12" md="6" class="align-self-center text-center d-none d-md-block">
          <BButton
            href="https://lp.weplan.com.br/form-seja-fornecedor"
            class="button-link"
            target="_blank"
            >Quero ser credenciado
          </BButton>
        </BCol>
      </BRow>
    </BContainer>
    <CookieBanner />
  </div>
</template>
<style>
body {
  overflow-x: hidden;
}
</style>
<style scoped>
.section-1 {
  padding: 0;
}

.navbutton {
  background-color: black !important;
}

.navbutton:hover,
.navbutton:active,
.navbutton:focus,
.navbutton .nuxt-link-active {
  background-color: #2b2b2b !important;
}

.section-3 {
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700 !important;
  text-align: center;
  padding: 0;
}

.source {
  font-size: 1rem;
}

.weplan-result {
  font-size: 3.5rem;
  font-weight: 800 !important;
}

.weplan-result .highlighted {
  text-decoration: underline #d8a200 7px;
  text-decoration-skip-ink: none;
}

.weplan-result-description {
  font-size: 1.5rem;
  font-weight: 500 !important;
}

.button-link {
  font-size: 3rem;
  display: block;
  margin-left: 2rem;
  margin-right: 2rem;
}

.button-link.d-md-none {
  font-size: 1.5rem;
}

.img-profissional-interiores {
  background-image: url('/images/profissional-interiores.webp');
  height: 1000px;
}

.img-montador {
  background-image: url('/images/montador.webp');
  height: 1000px;
}

.img-fornecedor {
  background-image: url('/images/fornecedor.webp');
  height: 1000px;
}

#img-mercado {
  background-image: url('/images/cores.webp');
  height: 600px;
}

#img-quantidade-arquitetos {
  background-image: url('/images/arquitetura.webp');
  height: 600px;
}

#img-quantidade-designers {
  background-image: url('/images/design-interiores.webp');
  height: 600px;
}
</style>
