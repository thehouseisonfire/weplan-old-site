<template>
  <div>
    <b-container fluid class="section-1 img-background">
      <b-row class="background-title">
        <b-col cols="12">
          <b-container>
            <h1 class="page-title">Estamos à disposição</h1>
            <p class="page-subtitle">
              Ficou com alguma dúvida ou necessidade?<br />
              Entre em contato por meio de um de nossos canais de atendimento.
            </p>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid class="section-2 section-background-light-color">
      <b-row>
        <b-col cols="12" md="6">
          <iframe
            style="width: 100%; height: 100vh; min-height: 800px"
            scrolling="no"
            frameborder="0"
            src="https://pages.weplan.com.br/contato"
          ></iframe>
        </b-col>
        <b-col
          class="img-entre-contato img-background"
          cols="12"
          md="6"
        ></b-col>
        <!-- <b-col cols="12" md="6" style="padding: 0;">
          <iframe
            style="width: 100%; height: 100vh; min-height: 800px;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            frameborder="0"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7103.071279581198!2d-52.619134!3d-27.107934!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e4b53885c1fc7b%3A0x8175b694e5a93f9c!2sWePlan%20M%C3%B3veis%20Planejados!5e0!3m2!1spt-BR!2sbr!4v1687971227694!5m2!1spt-BR!2sbr"
          ></iframe>
        </b-col> -->
      </b-row>
    </b-container>
    <b-container id="trabalhe-conosco" fluid class="section-3">
      <b-row>
        <b-col class="img-conversa img-background" cols="12" md="6"></b-col>
        <b-col cols="12" md="6">
          <iframe
            style="width: 100%; height: 100vh; min-height: 1000px"
            scrolling="no"
            frameborder="0"
            src="https://pages.weplan.com.br/trabalhe-conosco"
          ></iframe>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: 'ContatoPage',
}
</script>
<style scoped>
.section-1 {
  background-image: url('~/assets/images/reuniao-com-cliente.webp');
}

.img-entre-contato {
  background-image: url('~/assets/images/fornecedor.webp');
}

.img-conversa {
  background-image: url('~/assets/images/conversa.webp');
}
</style>
