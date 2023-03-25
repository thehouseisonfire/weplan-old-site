<template>
  <div>
    <b-container fluid class="section-1">
      <b-row>
        <b-col cols="12">
          <b-container>
            <h1 class="page-title text-shadow-purple">Para você</h1>
            <p class="text-shadow-purple">
              Seja para sua casa ou sua empresa, a WePlan produz e entrega a
              melhor solução em móveis planejados com otimização de espaços,
              design moderno e alta qualidade de material, isso para que todas
              as suas expectativas e necessidades sejam atendidas facilmente.
            </p>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
    <b-container id="desenvolver-meu-projeto" class="section-2">
      <b-row>
        <b-col cols="12" md="6" class="text-center d-none d-md-block">
          <b-img
            src="~/assets/images/nao-tenho-projeto.webp"
            class="img-fluid img-shadow"
            alt="WePlan"
          />
        </b-col>
        <b-col cols="12" md="6" class="align-self-center">
          <b-container fluid>
            <b-row>
              <h3 class="section-subtitle">Preciso desenvolver meu projeto</h3>
              <p>
                Conte com a
                <span class="highlighted-words-yellow"
                  >melhor rede de profissionais especialistas</span
                >
                em transcrever seu sonho para um projeto.
              </p>
              <p>
                <span class="highlighted-words-yellow"
                  >Conectado a WePlan, o projeto desenvolvido se tornará
                  realidade.</span
                >
              </p>
            </b-row>
            <b-row class="mb-3 d-none d-md-block">
              <a
                href="https://materiais.weplan.com.br/pagina-cliente-final-prof"
                class="button-link btn-block text-center"
                target="_blank"
              >
                Quero me conectar a um profissional para realizar meu projeto
              </a>
            </b-row>
          </b-container>
        </b-col>
        <b-col cols="12" md="6" class="text-center d-md-none">
          <b-img
            src="~/assets/images/nao-tenho-projeto.webp"
            class="img-fluid img-shadow"
            alt="WePlan"
          />
        </b-col>
        <b-col class="mt-3 d-md-none">
          <a
            href="https://materiais.weplan.com.br/pagina-cliente-final-prof"
            class="button-link btn-block text-center"
            target="_blank"
          >
            Quero me conectar a um profissional para realizar meu projeto
          </a>
        </b-col>
      </b-row>
    </b-container>
    <b-container id="executar-meu-projeto-com-weplan" class="section-3">
      <b-row>
        <b-col cols="12" md="6" class="align-self-center">
          <b-container fluid>
            <b-row>
              <h3 class="section-subtitle">
                Já tenho o projeto. A WePlan pode me atender?
              </h3>
              <p>
                <span class="highlighted-words-yellow"
                  >Acreditamos fortemente na colaboração</span
                >. Por meio do seu projeto
                <span class="highlighted-words-yellow"
                  >podemos desenvolver a melhor solução</span
                >
                para o seu ambiente.
              </p>
            </b-row>
            <b-row class="mb-3 d-none d-md-block">
              <a
                href="https://materiais.weplan.com.br/pagina-cliente-final"
                class="button-link btn-block text-center"
                target="_blank"
              >
                Quero realizar meu projeto com a WePlan
              </a>
            </b-row>
          </b-container>
        </b-col>
        <b-col cols="12" md="6" class="text-center">
          <b-img
            src="~/assets/images/ja-tenho-projeto.webp"
            class="img-fluid img-shadow"
            alt="WePlan"
          />
        </b-col>
        <b-col class="mt-3 d-md-none">
          <a
            href="https://materiais.weplan.com.br/pagina-cliente-final"
            class="button-link btn-block text-center"
            target="_blank"
          >
            Quero realizar meu projeto com a WePlan
          </a>
        </b-col>
      </b-row>
    </b-container>
    <b-container id="case-nexen" fluid class="section-4">
      <b-row class="mb-5">
        <b-col cols="12" class="align-self-center text-center">
          <h2 class="section-title">Case de sucesso</h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" md="6" class="mb-4">
          <iframe class="embed-responsive embed-responsive-16by9 mx-auto img-shadow" width="560" height="315" src="https://www.youtube.com/embed/5W-mI24LkQk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </b-col>
        <b-col cols="12" md="6">
          "A <a href="https://nexen.com.br/" target="_blank" class="highlighted-words-yellow">Nexen Energia Solar</a> é uma empresa fundada em 2018, no Sul do Brasil, que tem o propósito de levar energia limpa para todos.<br />
          <span class="highlighted-words-yellow">Eles vieram até a WePlan com uma necessidade</span>: precisavam de móveis planejados. Para isso, <span class="highlighted-words-yellow">conectamos a Arquiteta Talita Dal Santo</span>, que fez toda a gestão da obra, desde o mobiliário solto, o mobiliário planejado, a decoração até a iluminação. <span class="highlighted-words-yellow">Foi uma verdadeira entrega completa</span>.<br />
          <span class="highlighted-words-yellow">Os principais diferenciais foram o prazo extremamente curto</span> para executar o projeto, que conseguimos cumprir por conta de nossa conexão direta com a indústria, <span class="highlighted-words-yellow">e a entrega da solução completa</span>. Acompanhamos todos os processos para garantir a efetividade e assertividade no projeto."<br />
          <b>- Ismael dos Santos, Head de Vendas da WePlan.</b>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: 'ParaVocePage',
}
</script>
<style scoped>
.section-1 {
  background-image: url('~/assets/images/reuniao-com-cliente.webp');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  color: #fff;
  font-size: 1.1rem;
}

.section-2 {
  padding-top: 5rem;
  padding-bottom: 5rem;
  color: #4a148c;
  font-size: 1.1rem;
}

.section-3 {
  background-color: #efeff0;
  border-radius: 10px;
  padding: 5rem;
  color: #4a148c;
  font-size: 1.1rem;
}

.section-4 {
  background-color: #fdce3f;
  padding-top: 5rem;
  padding-bottom: 5rem;
  margin-top: 5rem;
  color: #4a148c;
  font-size: 1.1rem;
}

#case-nexen .embed-responsive {
  max-width: 558px;
}

@media only screen and (max-width: 576px) {
  .section-3 {
    border-radius: 0;
    padding: 5rem 1rem;
  }

  .section-4 {
    margin-top: inherit;
  }
}
</style>