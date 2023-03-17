<template>
  <div>
    <b-container>
      <div class="section-1">
      <b-row>
        <b-col cols="12">
          <h1 class="display-4 font-weight-bold">Móveis Planejados</h1>
          <p>De maneira facilitada<br>
          De alta qualidade e sofisticação<br>
          De acordo com o seu desejo</p>
          <p>
            <b-link to="/como-funciona">
              <button type="button" class="button-link">Descubra mais</button>
            </b-link>
          </p>
        </b-col>
      </b-row>
      </div>
    </b-container>
  </div>
</template>
<script>
export default {
  name: 'IndexPage',
}
</script>
<style scoped>
div.container div.section-1 {
  background-image: url("~/assets/images/projeto-weplan.webp");
  min-width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
}
</style>
