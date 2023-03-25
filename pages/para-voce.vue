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
      <b-row>
        <b-col>
          <iframe class="embed-responsive embed-responsive-16by9 img-shadow" width="560" height="315" src="https://www.youtube.com/embed/5W-mI24LkQk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
  background-color: #ffcd35;
  padding-top: 5rem;
  padding-bottom: 5rem;
  margin-top: 5rem;
  color: #4a148c;
  font-size: 1.1rem;
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