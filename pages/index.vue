<template>
  <div>
    <b-container fluid class="section-1">
      <b-row>
        <b-col cols="12" class="background-title">
          <b-container>
            <h1 class="page-title text-shadow">Móveis Planejados</h1>
            <p class="text-shadow">
              De maneira facilitada<br />
              De alta qualidade e sofisticação<br />
              De acordo com o seu desejo
            </p>
            <p>
              <b-link to="/como-funciona">
                <button type="button" class="button-link">Descubra mais</button>
              </b-link>
            </p>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="section-2">
      <b-row>
        <b-col
          cols="12"
          md="6"
          class="align-self-center text-center text-md-left"
        >
          <p>
            O
            <b-link to="/seja-nosso-parceiro" class="highlighted-words-yellow"
              >negócio lucrativo para você profissional</b-link
            >
            que trabalha com projetos de móveis planejados.
          </p>
          <p>
            A
            <b-link to="/para-voce" class="highlighted-words-yellow"
              >solução completa para você cliente</b-link
            >
            que precisa de móveis planejados a altura de suas expectativas.
          </p>
        </b-col>
        <b-col cols="12" md="6">
          <b-img
            src="~/assets/images/dois-projetos.webp"
            class="img-fluid"
            alt="WePlan"
          />
        </b-col>
      </b-row>
    </b-container>
    <b-container id="nps" class="section-5">
      <b-row>
        <b-col cols="12" md="6" class="align-self-center">
          <h3 class="section-subtitle">A WePlan encanta seus clientes ✨</h3>
          <p>
            Todos os nossos atendimentos são avaliados para garantir que estamos
            prestando o melhor serviço e entregando as melhores soluções.
            Estamos sempre atentos aos feedbacks que recebemos de nossos
            parceiros e clientes.
          </p>
          <p>
            Para isso,
            <a
              href="https://nps.weplan.com.br/"
              target="_blank"
              class="highlighted-words-yellow"
              >utilizamos uma das metodologias mais avançadas do mercado: o Net
              Promoter Score (NPS)</a
            >.
          </p>
          <p>
            Atualmente,
            <span class="highlighted-words-yellow"
              >nosso padrão de atendimento está na Zona de Encantamento</span
            >. Para uma empresa entrar na Zona de Encantamento o NPS precisa
            estar entre 91 e 100.
            <span class="highlighted-words-yellow"
              >O NPS atual da WePlan é 93</span
            >
            💜
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
  background-image: url('~/assets/images/projeto-weplan.webp');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
}

.section-2 {
  padding-top: 5rem;
  padding-bottom: 5rem;
  color: #000;
  font-size: 1.5rem;
}

.section-5 {
  padding-top: 5rem;
  padding-bottom: 5rem;
  color: #000;
  font-size: 1.1rem;
}

span.team-member-name {
  font-weight: 800 !important;
  font-size: 1.2rem;
}

span.team-member-position {
  font-weight: 600 !important;
  font-size: 1rem;
}

span.team-member-description {
  font-size: 0.8rem;
}

.team-member-link {
  text-decoration: none;
  font-weight: 700 !important;
  font-size: 0.8rem;
  background-color: #4a148c;
  border-radius: 5px;
  border: 0;
  padding: 1rem;
  color: #fff;
}

.team-member-link:hover,
.team-member-link:active,
.team-member-link:focus {
  background-color: #240051;
}
</style>
