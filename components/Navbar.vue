<template>
  <div>
    <BNavbar id="navbar" toggleable="lg" type="dark" :class="`fixed-top ${navbarIsColored ? 'navbar-colored' : ''}`">
      <BNavbarBrand to="/">
        <BImg src="/images/logo/white.svg" width="140px" height="39.19px" alt="WePlan" />
      </BNavbarBrand>
      <BNavbarToggle target="nav-collapse">
        <svg width="30" height="30">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" fill="silver" />
          </svg>
        </svg>
      </BNavbarToggle>
      <BCollapse id="nav-collapse" is-nav class="py-2">
        <BNavbarNav class="ms-auto mb-2 mb-lg-0">
          <BNavItem class="navlink" to="/como-funciona">
            <span class="navlink">
              Como funciona
            </span>
          </BNavItem>
          <BNavItem to="/para-voce">
            <span class="navlink">
              Para você
            </span>
          </BNavItem>
          <BNavItem to="/para-seu-negocio">
            <span class="navlink">
              Para seu negócio
            </span>
          </BNavItem>
          <BNavItem to="/seja-nosso-parceiro">
            <span class="navlink">
              Seja nosso parceiro
            </span>
          </BNavItem>
          <BNavItem to="/quem-somos">
            <span class="navlink">
              Quem somos
            </span>
          </BNavItem>
          <!-- <NuxtLink class="navlink" to="/projetos">Projetos</NuxtLink> // nothing here yet -->
          <BNavItem to="/contato">
            <span class="navlink">
              Contato
            </span>
          </BNavItem>
        </BNavbarNav>
      </BCollapse>
    </BNavbar>
  </div>
</template>
<script setup>
const navbarIsColored = ref(false)
function handleScroll() { navbarIsColored.value = window.scrollY >= 200 }
onMounted(() => window.addEventListener('scroll', handleScroll))
onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.navbar {
  background-color: transparent;
  padding: 1rem;
  transition-duration: 0.25s;
}


.navbar-toggler {
  border: 0;
}

.navbar-toggler:focus {
  box-shadow: 0 0 0 0 !important;
}

.navlink {
  color: white;
  font-weight: 500;
  text-decoration: none;
}

.navbar-colored {
  background-color: #000000b3;
  backdrop-filter: blur(5px);
  transition-duration: 0.25s;
}

.navlink:hover,
.navlink:active,
.navlink:focus,
.navlink .nuxt-link-active {
  color: #dadada;
  text-decoration: underline #ffc821 4px;
  text-decoration-skip-ink: none;
}


button.navbar-toggler {
  border: 0px;
  box-shadow: 0px;
}


@media only screen and (max-width: 997px) {
  .navbar {
    background-color: #000000bf;
    backdrop-filter: blur(5px);
  }
}
</style>
