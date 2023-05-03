<template>
  <div>
    <footer class="footer">
      <b-container fluid>
        <b-row>
          <b-col cols="12" md="3" class="mb-3 col-center">
            <b-container>
              <b-row class="mb-1">
                <b-link to="/">
                  <b-img
                    src="~/assets/images/logo/white.svg"
                    width="140px"
                    height="39.19px"
                    alt="WePlan"
                  />
                </b-link>
              </b-row>
              <b-row>
                <a
                  href="https://www.google.com/maps/place/WePlan/@-27.107929,-52.6217086,17z/data=!3m1!4b1!4m6!3m5!1s0x94e4b53885c1fc7b:0x8175b694e5a93f9c!8m2!3d-27.1079338!4d-52.6191337!16s%2Fg%2F11jp5cq8_q"
                  target="_blank"
                >
                  Rua Clevelândia, 557-D, Sala 02<br />
                  Jardim Itália, Chapecó - SC<br />
                  CEP: 89802-405<br />
                  CNPJ: 37.124.126/0001-88
                </a>
              </b-row>
            </b-container>
          </b-col>
          <b-col cols="12" md="3" class="mb-3 col-center">
            <b-container>
              <b-row class="title-footer">
                Sobre a WePlan
              </b-row>
              <b-row>
                <ul class="footer-group-links">
                  <li><b-link to="/como-funciona">Como funciona</b-link></li>
                  <li><b-link to="/como-funciona#nosso-processo">Nosso processo</b-link></li>
                  <li><b-link to="/como-funciona#vantagens-weplan">Vantagens da WePlan</b-link></li>
                  <li><b-link to="/quem-somos">Quem somos</b-link></li>
                  <li><b-link to="/para-voce">Soluções para você</b-link></li>
                  <li><b-link to="/">Soluções para sua empresa</b-link></li>
                  <li><b-link href="https://www.weplaneducacao.com.br/">WePlan Educação</b-link></li>
                </ul>
              </b-row>
            </b-container>
          </b-col>
          <b-col cols="12" md="3" class="mb-3 col-center">
            <b-container>
              <b-row class="title-footer">
                Links úteis
              </b-row>
              <b-row>
                <ul class="footer-group-links">
                  <li><b-link to="/projetos">Projetos</b-link></li>
                  <li><b-link to="/contato">Contato</b-link></li>
                  <li><b-link to="/seja-nosso-parceiro">Seja nosso parceiro</b-link></li>
                  <li><b-link to="#">Trabalhe conosco</b-link></li>
                  <li><b-link href="https://weplan.com.br/blog/" target="_blank">Blog</b-link></li>
                  <li><b-link href="https://app.weplan.com.br/" target="_blank">Login no app do parceiro</b-link></li>
                </ul>
              </b-row>
            </b-container>
          </b-col>
          <b-col cols="12" md="3" class="col-center">
            <b-container>
              <b-row class="title-footer">
                Acompanhe-nos nas redes:
              </b-row>
              <b-row>
                <a
                  href="https://www.instagram.com/weplanmob/"
                  target="_blank"
                  class="footer-icon"
                >
                  <b-img
                    src="~/assets/images/icons/instagram.svg"
                    width="25px"
                    height="25px"
                    alt="Instagram"
                  ></b-img>
                </a>
                <a
                  href="https://www.facebook.com/weplanmob/"
                  target="_blank"
                  class="footer-icon"
                >
                  <b-img
                    src="~/assets/images/icons/facebook.svg"
                    width="25px"
                    height="25px"
                    alt="Facebook"
                  ></b-img>
                </a>
                <a
                  href="https://www.linkedin.com/company/weplanmob/"
                  target="_blank"
                  class="footer-icon"
                >
                  <b-img
                    src="~/assets/images/icons/linkedin.svg"
                    width="25px"
                    height="25px"
                    alt="Linkedin"
                  ></b-img>
                </a>
                <a
                  href="https://open.spotify.com/show/57tePj1YmRszoXJMIyWJmr?si=4WYunOTSQAGB4KxKx-zH4g&dl_branch=1"
                  target="_blank"
                  class="footer-icon"
                >
                  <b-img
                    src="~/assets/images/icons/spotify.svg"
                    width="25px"
                    height="25px"
                    alt="Spotify"
                  ></b-img>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCQDrFL6ZVfpyPH7pvT5fCUA"
                  target="_blank"
                  class="footer-icon"
                >
                  <b-img
                    src="~/assets/images/icons/youtube.svg"
                    width="25px"
                    height="25px"
                    alt="Youtube"
                  ></b-img>
                </a>
              </b-row>
              <b-row>
                <b-link to="/#nps">
                  <b-img
                    src="~/assets/images/nps-footer.png"
                    width="100px"
                    height="176.98px"
                    alt="Net Promoter Score da WePlan"
                    class="img-fluid"
                  ></b-img>
                </b-link>
              </b-row>
            </b-container>
          </b-col>
        </b-row>
      </b-container>
      <b-container fluid class="copyright">
        <b-row>
          <b-col cols="12" md="6" class="text-center">
            © {{ currentYear }} Todos os direitos reservados. WePlan Móveis
            Planejados.
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
  data() {
    return {
      currentYear: new Date().getFullYear(),
    }
  },
}
</script>
<style scoped>
.footer {
  background-color: #1c1c1c;
  padding-top: 5rem;
  color: #fff;
}

.copyright {
  font-size: 0.7rem;
  background-color: #000;
  margin-top: 5rem;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
}

.footer-group-links {
  list-style-type: none;
  padding-inline-start: 0;
  margin-bottom: 0;
}

.footer a {
  text-decoration: none;
  color: #fff;
}

.footer-group-links a:hover,
.footer-group-links a:active,
.footer-group-links a:focus {
  color: #ffffffd9;
  text-decoration: underline #ffc821 4px;
  text-decoration-skip-ink: none;
}

.footer-icon {
  margin-block: 10px;
  margin-right: 15px;
}

.footer-icon img {
  width: 25px;
  height: auto;
}

.title-footer {
  font-weight: 800;
  margin-bottom: 10px;
}

.col-center {
  display: grid;
  justify-content: center;
}

@media only screen and (max-width: 768px) {
  .col-center {
    justify-content: initial;
  }
}
</style>
