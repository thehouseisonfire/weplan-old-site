<template>
  <div>
    <footer class="footer">
      <b-container>
        <b-row>
          <b-col cols="12" md="4" class="mb-3">
            <b-container>
              <b-row class="mb-1">
                <b-link to="/">
                  <b-img
                    src="~/assets/images/weplan-logo.svg"
                    width="140px"
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
          <b-col cols="12" md="4" class="mb-3">
            <b-container>
              <b-row>
                <ul class="footer-group-links">
                  <li><b-link to="/como-funciona">Como funciona</b-link></li>
                  <li>
                    <b-link to="/seja-nosso-parceiro">Seja nosso parceiro</b-link>
                  </li>
                  <li><b-link to="/para-voce">Para você</b-link></li>
                  <li><b-link to="/projetos">Projetos</b-link></li>
                  <li>
                    <b-link href="https://weplan.com.br/blog/" target="_blank"
                      >Blog</b-link
                    >
                  </li>
                  <li><b-link to="/contato">Contato</b-link></li>
                  <li>
                    <b-link href="https://app.weplan.com.br/" target="_blank"
                      >Login no APP</b-link
                    >
                  </li>
                  <li><b-link to="#">WePlan Educação</b-link></li>
                  <li>
                    <b-link to="/#quem-faz-a-weplan">Quem faz a Weplan?</b-link>
                  </li>
                </ul>
              </b-row>
            </b-container>
          </b-col>
          <b-col cols="12" md="4">
            <b-container>
              <b-row> Acompanhe-nos nas redes: </b-row>
              <b-row>
                <a
                  href="https://www.instagram.com/weplanmob/"
                  target="_blank"
                  class="footer-icon"
                >
                  <b-img
                    src="~/assets/images/icons/instagram.svg"
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
                    alt="Youtube"
                  ></b-img>
                </a>
              </b-row>
              <b-row>
                <b-img src="~/assets/images/nps-footer.png" width="100px" alt="Net Promoter Score da WePlan" class="img-fluid"></b-img>
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
  background-color: #6a1b9a;
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
</style>
