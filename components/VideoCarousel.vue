<template>
  <BRow v-show="step == 1" class="p-0">
    <BCol cols="12" md="6" class="mb-4 p-0">
      <div class="carousel-container">
        <div class="video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/QmiMFgIs6iw"
            title="Nexen Energia Solar"
            frameborder="0"
            loading="lazy"
            allow="
              accelerometer;
              autoplay;
              clipboard-write;
              encrypted-media;
              gyroscope;
              picture-in-picture;
              web-share;
            "
            allowfullscreen
          ></iframe>
        </div>
        <button class="carousel-button left" @click="nextStep()">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE1LjQxLDE2LjU4TDEwLjgzLDEyTDE1LjQxLDcuNDFMMTQsNkw4LDEyTDE0LDE4TDE1LjQxLDE2LjU4WiIgLz48L3N2Zz4="
            width="20px"
            height="20px"
            alt="Próximo"
            class="my-auto"
          />
        </button>
        <button class="carousel-button right" @click="prevStep()">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTguNTksMTYuNThMMTMuMTcsMTJMOC41OSw3LjQxTDEwLDZMMTYsMTJMMTAsMThMOC41OSwxNi41OFoiIC8+PC9zdmc+"
            width="20px"
            height="20px"
            alt="Anterior"
            class="my-auto"
          />
        </button>
      </div>
    </BCol>
    <BCol cols="12" md="6">
      "A
      <a href="https://nexen.com.br/" target="_blank" class="highlighted-words-yellow"
        >Nexen Energia Solar</a
      >
      é uma empresa fundada em 2018, no Sul do Brasil, que tem o propósito de levar energia limpa
      para todos.<br />
      <span class="highlighted-words-yellow">Eles vieram até a Weplan com uma necessidade</span>:
      precisavam de móveis planejados. Para isso,
      <span class="highlighted-words-yellow">conectamos a Arquiteta Talita Dal Santo</span>, que fez
      toda a gestão da obra, desde o mobiliário solto, o mobiliário planejado, a decoração até a
      iluminação.
      <span class="highlighted-words-yellow">Foi uma verdadeira entrega completa</span>.<br />
      <span class="highlighted-words-yellow"
        >Os principais diferenciais foram o prazo extremamente curto</span
      >
      para executar o projeto, que conseguimos cumprir por conta de nossa conexão direta com a
      indústria,
      <span class="highlighted-words-yellow">e a entrega da solução completa</span>. Acompanhamos
      todos os processos para garantir a efetividade e assertividade no projeto."<br />
      <b>- Ismael dos Santos, Head Comercial da Weplan.</b>
    </BCol>
  </BRow>
  <BRow v-show="step == 2">
    <BCol cols="12" md="6" class="mb-4">
      <div class="carousel-container">
        <div class="video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/55YKDHmWdwY"
            title="Northin Investiments"
            frameborder="0"
            loading="lazy"
            allow="
              accelerometer;
              autoplay;
              clipboard-write;
              encrypted-media;
              gyroscope;
              picture-in-picture;
              web-share;
            "
            allowfullscreen
          ></iframe>
        </div>
        <button class="carousel-button left" @click="nextStep()">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE1LjQxLDE2LjU4TDEwLjgzLDEyTDE1LjQxLDcuNDFMMTQsNkw4LDEyTDE0LDE4TDE1LjQxLDE2LjU4WiIgLz48L3N2Zz4="
            width="20px"
            height="20px"
            alt="Próximo"
            class="my-auto"
          />
        </button>
        <button class="carousel-button right" @click="prevStep()">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTguNTksMTYuNThMMTMuMTcsMTJMOC41OSw3LjQxTDEwLDZMMTYsMTJMMTAsMThMOC41OSwxNi41OFoiIC8+PC9zdmc+"
            width="20px"
            height="20px"
            alt="Anterior"
            class="my-auto"
          />
        </button>
      </div>
    </BCol>
    <BCol cols="12" md="6">
      "A
      <a
        href="https://www.instagram.com/northininvestments/"
        target="_blank"
        class="highlighted-words-yellow"
        >Northin Investiments</a
      >
      é uma consultoria de investimentos de alta performance, alicerçada no atendimento humanizado,
      personalizado e tecnológico.<br />
      <span class="highlighted-words-yellow"
        >Juntamente com nosso credenciado
        <a
          href="https://www.instagram.com/casa21gestaodeprojetos/"
          target="_blank"
          class="highlighted-words-yellow"
          >Casa 21</a
        >
        fizemos a gestão completa da obra</span
      >, desde o projeto até a finalização.<br />
      O cuidado com cada detalhe, o cumprimento de prazos e a entrega com qualidade nos destacam e
      fazem com que nossos clientes, tanto para projetos residenciais como corporativos confiem em
      nosso trabalho".<br />
      <b>- Ismael dos Santos, Head Comercial da Weplan.</b>
    </BCol>
  </BRow>
</template>

<script setup lang="ts">
const step = ref(1)
const lastStep = 2
const nextStep = () => (step.value == lastStep ? (step.value = 1) : step.value++)
const prevStep = () => (step.value == 1 ? (step.value = lastStep) : step.value--)
</script>

<style scoped>
.carousel-container {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  padding: 2em;
}

.button-svg {
  margin: auto;
}

.video {
  max-width: 600px;
}

.video iframe {
  width: 100%;
  height: 340px;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 35px;
  background-color: #cccccc;
  border: 0px;
  cursor: pointer;
}

.carousel-button img {
  filter: invert(1);
  display: block;
  margin: 5px auto;
}

.carousel-button.left {
  left: 0;
  border-radius: 0 2px 2px 0;
}

.carousel-button.right {
  right: 0;
  border-radius: 2px 0 0 2px;
}

.hide {
  display: none;
}

@media screen and (max-width: 425px) {
  .video iframe {
    height: 230px;
  }
}

@media screen and (max-width: 375px) {
  .video iframe {
    height: 205px;
  }
}

@media screen and (max-width: 320px) {
  .video iframe {
    height: 172px;
  }
}

@media screen and (max-width: 320px) {
  .video iframe {
    height: auto;
  }
}
</style>
