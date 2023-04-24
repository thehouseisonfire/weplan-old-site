<template>
  <div>
    <b-container fluid class="section-1">
      <b-row>
        <b-col class="img-profissional-interiores img-height-1000px img-background text-block" cols="4">
          <b-link to="#profissional-interiores">
            <h2>Sou profissional de interiores</h2>
          </b-link>
        </b-col>
        <b-col class="img-montador img-height-1000px img-background text-block" cols="4">
          <b-link to="#montador">
            <h2>Sou montador</h2>
          </b-link>
        </b-col>
        <b-col class="img-fornecedor img-height-1000px img-background text-block" cols="4">
          <b-link to="#fornecedor">
            <h2>Sou fornecedor</h2>
          </b-link>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="section-2">
      <b-row>
        <b-col cols="12" class="align-self-center text-center">
          <h2 class="section-title">Oportunidades no setor</h2>
          <p class="section-subtitle">
            “A <span class="highlighted-words-yellow">alta demanda de reformas e compra de móveis planejados</span> desde 2021 fez com que o setor de marcenaria <span class="highlighted-words-yellow">alcançasse 14,7% de crescimento</span> em relação a anos anteriores.”<br />
            - Valor Globo, 2022
          </p>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid class="section-3">
      <b-row>
        <b-col id="img-mercado" class="img-background text-block" cols="12" md="4">
          <div>
            <h2>R$ 62,6 bi</h2>
            <p>
              Potencial de compra<br />
              por ano de móveis planejados<br />
              <span class="source">Fonte: Móveis de Valor (2023)</span>
            </p>
          </div>
        </b-col>
        <b-col id="img-quantidade-arquitetos" class="img-background text-block" cols="12" md="4">
          <div>
            <h2>216 mil</h2>
            <p>
              Arquitetos ativos no Brasil<br />
              <span class="source">Fonte: CAU-BR e CREA-SP (2023)</span>
            </p>
          </div>
        </b-col>
        <b-col id="img-quantidade-designers" class="img-background text-block" cols="12" md="4">
          <div>
            <h2>55 mil</h2>
            <p>
              Designers de interiores ativos<br />
              no Brasil<br />
              <span class="source">Fonte: CAU-BR e CREA-SP (2023)</span>
            </p>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid class="section-4">
      <b-row>
        <b-col cols="12" class="align-self-center text-center">
          <h2 class="section-title">Aqui na WePlan já temos resultados consolidados</h2>
          <p>
            <span class="weplan-result">+ de <span class="highlighted">R$ 1.2 milhões</span></span><br />
            <span class="weplan-result-description">distribuído aos parceiros da WePlan</span><br />
            - Até Abril de 2023
          </p>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid class="section-5">
      <b-row>
        <b-container fluid>
          <b-row id="profissional-interiores" class="inverted-colors">
            <b-col class="img-profissional-interiores img-height-600px img-background text-block" cols="12" md="6">
              <div>
                <h2>Sou profissional de interiores</h2>
                <span class="button-link d-md-none">Quero ser parceiro</span>
              </div>
            </b-col>
            <b-col cols="12" md="6" class="align-self-center text-center d-none d-md-block">
              <span class="button-link">Quero ser parceiro</span>
            </b-col>
          </b-row>
          <b-row id="montador">
            <b-col cols="12" md="6" class="align-self-center text-center d-none d-md-block">
              <span class="button-link">Quero ser parceiro</span>
            </b-col>
            <b-col class="img-montador img-height-600px img-background text-block" cols="12" md="6">
              <div>
                <h2>Sou montador</h2>
                <span class="button-link d-md-none">Quero ser parceiro</span>
              </div>
            </b-col>
          </b-row>
          <b-row id="fornecedor" class="inverted-colors">
            <b-col class="img-fornecedor img-height-600px img-background text-block" cols="12" md="6">
              <div>
                <h2>Sou fornecedor</h2>
                <span class="button-link d-md-none">Quero ser parceiro</span>
              </div>
            </b-col>
            <b-col cols="12" md="6" class="align-self-center text-center d-none d-md-block">
              <span class="button-link">Quero ser parceiro</span>
            </b-col>
          </b-row>
        </b-container>
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

.section-2,
.section-4 {
  padding-top: 5rem;
  padding-bottom: 5rem;
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
  background-image: url('~/assets/images/profissional-interiores.jpg');
}

.img-montador {
  background-image: url('~/assets/images/montador.jpg');
}

.img-fornecedor {
  background-image: url('~/assets/images/fornecedor.jpg');
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
</style>
