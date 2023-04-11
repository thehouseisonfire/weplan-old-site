<template>
  <div>
    <b-navbar
      id="navbar"
      toggleable="lg"
      type="dark"
      :class="`fixed-top ${navbarIsColored ? 'navbar-colored' : ''}`"
    >
      <b-navbar-brand to="/">
        <b-img
          v-show="!navbarIsColored"
          src="~/assets/images/logo/negative.svg"
          width="140px"
          alt="WePlan"
        />
        <b-img
          v-show="navbarIsColored"
          src="~/assets/images/logo/positive.svg"
          width="140px"
          alt="WePlan"
        />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav class="py-2">
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/como-funciona">Como funciona</b-nav-item>
          <b-nav-item to="/seja-nosso-parceiro">Seja nosso parceiro</b-nav-item>
          <b-nav-item to="/para-voce">Para você</b-nav-item>
          <b-nav-item to="/quem-somos">Quem somos</b-nav-item>
          <b-nav-item to="/projetos">Projetos</b-nav-item>
          <b-nav-item href="https://weplan.com.br/blog/" target="_blank"
            >Blog</b-nav-item
          >
          <b-nav-item to="/contato">Contato</b-nav-item>
          <b-nav-item href="https://app.weplan.com.br/" target="_blank"
            >Login</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: 'NavbarComponent',
  data() {
    return {
      navbarIsColored: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.navbarIsColored = window.scrollY >= 200
    },
  },
}
</script>
<style scoped>
.navbar {
  background-color: transparent;
  padding: 1rem;
}

.navbar-colored {
  background-color: #000000bf;
  backdrop-filter: blur(5px);
}

.nav-item a.nav-link {
  color: #fff;
  font-weight: 500;
}

.nav-item a.nav-link:hover,
.nav-item a.nav-link:active,
.nav-item a.nav-link:focus,
.nav-item a.nuxt-link-active {
  color: #dadada;
  text-decoration: underline #ffc821 4px;
  text-decoration-skip-ink: none;
}

button.navbar-toggler {
  border: 0;
}

@media only screen and (max-width: 991px) {
  .navbar {
    background-color: #000000bf;
    backdrop-filter: blur(5px);
  }
}
</style>
