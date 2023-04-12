<template>
  <div>
    <b-container fluid class="section-1 img-background">
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
    <b-container fluid class="section-2">
      <b-row>
        <b-col
          cols="12"
          md="6"
          class="align-self-center text-center text-md-left"
        >
          <p class="mx-5 my-5">
            O
            <b-link to="/seja-nosso-parceiro" class="highlighted-words-yellow"
              >negócio lucrativo para você profissional</b-link
            >
            que trabalha com projetos de móveis planejados.<br />
            A
            <b-link to="/para-voce" class="highlighted-words-yellow"
              >solução completa para você cliente</b-link
            >
            que precisa de móveis planejados a altura de suas expectativas.
          </p>
        </b-col>
        <b-col id="img-1" class="img-fluid img-background" cols="12" md="3">
        </b-col>
        <b-col id="img-2" class="img-fluid img-background" cols="12" md="3">
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid class="section-3">
      <b-row>
        <b-col id="img-3" class="img-fluid img-background d-none d-md-block" cols="12" md="6">
        </b-col>
        <b-col
          cols="12"
          md="6"
          class="align-self-center text-center text-md-left"
        >
          <p class="mx-5 my-5">
            <span class="highlighted-words-yellow"
              >Entregamos o acesso a móveis planejados</span
            >
            com facilidade, respeito e alta qualidade.<br />
            <span class="highlighted-words-yellow"
              >Conectamos todos os pontos do processo entre indústria,
              profissional e clientes</span
            >
            para desenvolver nosso trabalho de forma rápida e transparente.
          </p>
        </b-col>
        <b-col id="img-3" class="img-fluid img-background d-md-none" cols="12" md="6">
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid class="section-4">
      <b-row class="mb-5">
        <b-col cols="12" class="align-self-center text-center">
          <h2 class="section-title">Case de sucesso</h2>
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
    <b-container id="nps" fluid class="section-5">
      <b-row>
        <b-col cols="12" md="6" class="align-self-center">
          <h3 class="section-subtitle mx-5">A WePlan encanta seus clientes</h3>
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
  background-image: url('~/assets/images/projeto-weplan.jpg');
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
}

.section-2,
.section-3 {
  color: #000;
  font-size: 1.5rem;
}

.section-4,
.section-5 {
  padding-top: 8rem;
  padding-bottom: 8rem;
}

.section-4 {
  background-color: #0009;
  font-size: 1.1rem;
  color: #fff;
}

.section-5 {
  background-color: #efeff0;
  font-size: 1.1rem;
  color: #000;
}

.section-title,
.section-4 .highlighted-words-yellow {
  color: #fff;
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

#img-1 {
  background-image: url('~/assets/images/environments/sala-reuniao.jpg');
  height: 600px;
}

#img-2 {
  background-image: url('~/assets/images/environments/cozinha.jpg');
  height: 600px;
}

#img-3 {
  background-image: url('~/assets/images/environments/escritorio.jpg');
  height: 600px;
}
</style>
