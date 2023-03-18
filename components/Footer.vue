<template>
  <div>
    <footer class="footer">
      <b-container>
        <b-row>
          <b-col cols="12" md="4">
            <b-row>
              <b-img src="~/assets/images/weplan-logo.svg" width="140px" alt="WePlan" />
            </b-row>
            <b-row>
              Rua Clevelândia, 557-D, Sala 02<br>
              Jardim Itália, Chapecó - SC<br>
              CEP: 89802-405<br>
              CNPJ: 37.124.126/0001-88
            </b-row>
          </b-col>
          <b-col cols="12" md="4">
            <b-row>
              <b-link to="/como-funciona">Como funciona</b-link>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
      <b-container fluid class="copyright">
        <b-row>
          <b-col cols="12" md="6" class="text-center">
            © {{currentYear}} Todos os direitos reservados. WePlan Móveis Planejados.
          </b-col>
          <b-col cols="12" md="6" class="text-center">
            Desenvolvido pela WePlan Tech 💜
          </b-col>
        </b-row>
      </b-container>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'FooterComponent',
  data () {
    return {
      currentYear: new Date().getFullYear(),
    }
  },
}
</script>
<style scoped>
.footer{
  background-color:#6a1b9a;
  padding-top: 5rem;
  color: #fff;
}

.copyright {
  font-size: 0.7rem;
  background-color: #240051;
  margin-top: 5rem;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
}
</style>