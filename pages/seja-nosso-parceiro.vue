<template>
  <div>
    <b-container fluid class="section-1">
      <b-row>
        <b-col id="img-profissional-interiores" class="img-background text-block" cols="4">
          <b-link to="#profissional-interiores">
            <h2 class="text-center text-shadow">Sou profissional de interiores</h2>
          </b-link>
        </b-col>
        <b-col id="img-montador" class="img-background text-block" cols="4">
          <b-link to="#montador">
            <h2 class="text-center text-shadow">Sou montador</h2>
          </b-link>
        </b-col>
        <b-col id="img-fornecedor" class="img-background text-block" cols="4">
          <b-link to="#fornecedor">
            <h2 class="text-center text-shadow">Sou fornecedor</h2>
          </b-link>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid class="section-2">
      <b-row>
        <b-col id="img-mercado" class="img-background text-block" cols="12" md="4">
          <div>
            <h2 class="text-shadow">R$ 62,6 bi</h2>
            <p class="text-shadow">
              Potencial de compra<br />
              por ano de móveis planejados<br />
              <span class="source">Fonte: Móveis de Valor (2023)</span>
            </p>
          </div>
        </b-col>
        <b-col id="img-quantidade-arquitetos" class="img-background text-block" cols="12" md="4">
          <div>
            <h2 class="text-shadow">216 mil</h2>
            <p class="text-shadow">
              Arquitetos ativos no Brasil<br />
              <span class="source">Fonte: CAU-BR e CREA-SP (2023)</span>
            </p>
          </div>
        </b-col>
        <b-col id="img-quantidade-designers" class="img-background text-block" cols="12" md="4">
          <div>
            <h2 class="text-shadow">55 mil</h2>
            <p class="text-shadow">
              Designers de interiores ativos<br />
              no Brasil<br />
              <span class="source">Fonte: CAU-BR e CREA-SP (2023)</span>
            </p>
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
  padding: 0;
}

.section-2 {
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  padding: 0;
}

.source {
  font-size: 1rem;
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

#img-profissional-interiores {
  background-image: url('~/assets/images/profissional-interiores.jpg');
  height: 1000px;
}

#img-montador {
  background-image: url('~/assets/images/montador.jpg');
  height: 1000px;
}

#img-fornecedor {
  background-image: url('~/assets/images/fornecedor.jpg');
  height: 1000px;
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
