<template>
  <div>
    <b-navbar toggleable="lg" type="dark">
      <b-navbar-brand to="/">
        <b-img src="~/assets/images/weplan-logo.svg" width="140px" alt="WePlan" />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav class="py-2">
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/como-funciona">Como funciona</b-nav-item>
          <b-nav-item to="/seja-um-parceiro">Seja um parceiro</b-nav-item>
          <b-nav-item to="/para-voce">Para você</b-nav-item>
          <b-nav-item to="/projetos">Projetos</b-nav-item>
          <b-nav-item href="https://weplan.com.br/blog/" target="_blank">Blog</b-nav-item>
          <b-nav-item to="/contato">Contato</b-nav-item>
          <b-nav-item href="https://app.weplan.com.br/" target="_blank">Login</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: 'NavbarComponent',
}
</script>
<style scoped>
.navbar{
  background-color:#6a1b9a;
  padding: 1rem;
}

.nav-item a.nav-link{
  color:#fff;
  font-weight:500;
}

button.navbar-toggler {
  border: 0;
}
</style>