<template>
  <div>
    <b-modal id="modal-form-profissional-interiores" ref="modalFormProfissionalInteriores" hide-header hide-footer @hidden="onHiddenModal">
      <b-container>
        <b-row v-show="step == 1" class="step-1">
          <b-col cols="12">
            <p>Parabéns!</p>
            <p>Você faz parte de um seleto grupo de profissionais que quer inovar no mercado.</p>
            <p>A WePlan é uma startup que entrega móveis planejados direto da indústria através de profissionais de interiores, levando mais soluções para seus clientes e fazendo isso em menos tempo.</p>
          </b-col>
          <b-col cols="12">
            <p>Agora, me conta um pouco sobre você.</p>
          </b-col>
          <b-col cols="12" v-show="error" class="error alert alert-danger">
            Por gentileza, preencha todos os campos.
          </b-col>
          <b-col cols="12">
            <label for="nome">Qual é o seu nome?</label>
          </b-col>
          <b-col cols="12">
            <b-form-input id="nome" v-model="nome" type="text" placeholder="Digite aqui seu nome ⌨️" maxlength="150" required></b-form-input>
          </b-col>
          <b-col cols="12">
            <br />
            <label for="email">Qual é o seu melhor e-mail?</label>
          </b-col>
          <b-col cols="12">
            <b-form-input id="email" v-model="email" type="email" placeholder="Digite aqui seu e-mail ⌨️" maxlength="150"></b-form-input>
          </b-col>
          <b-col cols="12">
            <br />
            <label for="telefone">Qual é o seu telefone (WhatsApp)?</label>
          </b-col>
          <b-col cols="12">
            <b-form-input id="telefone" v-model="telefone" type="text" placeholder="Digite aqui seu telefone ⌨️" maxlength="15" required></b-form-input>
          </b-col>
          <b-col cols="12" class="btn-actions">
            <b-button @click="nextStep()">Próxima</b-button>
          </b-col>
        </b-row>
        <b-row v-show="step == 2" class="step-2">
          <b-col cols="12" v-show="error" class="error alert alert-danger">
            Por gentileza, preencha todos os campos.
          </b-col>
          <b-col cols="12">
            <p>Maravilha, {{ nome }}!</p>
          </b-col>
          <b-col cols="12">
            <label for="setor">E em qual setor você atua?</label>
          </b-col>
          <b-col cols="12">
            <b-form-select id="setor" v-model="setor" :options="setorOptions" required>
              <template #first>
                <b-form-select-option :value="null" disabled>Selecione o seu setor de atuação</b-form-select-option>
              </template>
            </b-form-select>
          </b-col>
          <b-col cols="12" class="btn-actions">
            <b-button @click="previousStep()">Anterior</b-button>
            <b-button @click="nextStep()">Próxima</b-button>
          </b-col>
        </b-row>
        <b-row v-show="step == 3" class="step-3">
          <b-col cols="12" v-show="error" class="error alert alert-danger">
            Por gentileza, preencha todos os campos.
          </b-col>
          <b-col cols="12">
            <p>Muito bacana, {{ nome }}. É bom saber que podemos contar com um profissional de {{ setor }}.</p>
          </b-col>
          <b-col cols="12">
            <label for="autonomo">Sobre a sua atuação, você trabalha como autônomo?</label>
          </b-col>
          <b-col cols="12">
            <b-form-select id="autonomo" v-model="autonomo" :options="autonomoOptions" required>
              <template #first>
                <b-form-select-option :value="null" disabled>Selecione a sua forma de atuação</b-form-select-option>
              </template>
            </b-form-select>
          </b-col>
          <b-col cols="12" class="btn-actions">
            <b-button @click="previousStep()">Anterior</b-button>
            <b-button @click="nextStep()">Próxima</b-button>
          </b-col>
        </b-row>
        <b-row v-show="step == 4" class="step-4">
          <b-col cols="12" v-show="error" class="error alert alert-danger">
            Por gentileza, preencha todos os campos.
          </b-col>
          <b-col cols="12">
            <p>Perfeito, {{ nome }}.</p>
            <p>A WePlan é para profissionais que trabalham com interiores e querem alavancar seus resultados entregando móveis planejados.</p>
          </b-col>
          <b-col cols="12">
            <label for="possuiClientes">{{ nome }}, você acredita que teria uma carteira de clientes para atuar como autônomo?</label>
          </b-col>
          <b-col cols="12">
            <b-form-select id="possuiClientes" v-model="possuiClientes" :options="possuiClientesOptions" required>
              <template #first>
                <b-form-select-option :value="null" disabled>Selecione uma das opções</b-form-select-option>
              </template>
            </b-form-select>
          </b-col>
          <b-col cols="12" class="btn-actions">
            <b-button @click="previousStep()">Anterior</b-button>
            <b-button @click="nextStep()">Próxima</b-button>
          </b-col>
        </b-row>
        <b-row v-show="step == 5" class="step-5">
          <b-col cols="12" v-show="error" class="error alert alert-danger">
            Por gentileza, preencha todos os campos.
          </b-col>
          <b-col cols="12">
            <label for="tempoCidade">Certo, {{ nome }}, você reside na sua cidade de atuação a quanto tempo?</label>
          </b-col>
          <b-col cols="12">
            <b-form-select id="tempoCidade" v-model="tempoCidade" :options="tempoCidadeOptions" required>
              <template #first>
                <b-form-select-option :value="null" disabled>Selecione uma das opções</b-form-select-option>
              </template>
            </b-form-select>
          </b-col>
          <b-col cols="12" class="btn-actions">
            <b-button @click="previousStep()">Anterior</b-button>
            <b-button @click="nextStep()">Próxima</b-button>
          </b-col>
        </b-row>
        <b-row v-show="step == 6" class="step-6">
          <b-col cols="12" v-show="error" class="error alert alert-danger">
            Por gentileza, preencha todos os campos.
          </b-col>
          <b-col cols="12">
            <label for="experienciaMoveis">{{ nome }}, você já atuou ou teve experiência com móveis planejados?</label>
          </b-col>
          <b-col cols="12">
            <b-form-select id="experienciaMoveis" v-model="experienciaMoveis" :options="experienciaMoveisOptions" required>
              <template #first>
                <b-form-select-option :value="null" disabled>Selecione uma das opções</b-form-select-option>
              </template>
            </b-form-select>
          </b-col>
          <b-col cols="12" class="btn-actions">
            <b-button @click="previousStep()">Anterior</b-button>
            <b-button @click="nextStep()">Próxima</b-button>
          </b-col>
        </b-row>
        <b-row v-show="step == 7" class="step-7">
          <b-col cols="12" v-show="error" class="error alert alert-danger">
            Por gentileza, preencha todos os campos.
          </b-col>
          <b-col cols="12">
            <label for="problema">Para finalizar, {{ nome }}, me conta qual o maior problema que você tem hoje e está buscando resolver?</label>
          </b-col>
          <b-col cols="12">
            <b-form-textarea
              id="problema"
              v-model="problema"
              placeholder="Me conta aqui como podemos ajudar você..."
              rows="3"
              max-rows="3"
              maxlength="1500"
              required
            ></b-form-textarea>
          </b-col>
          <b-col cols="12" class="btn-actions">
            <b-button @click="previousStep()">Anterior</b-button>
            <b-button @click="submitForm()">Enviar</b-button>
          </b-col>
        </b-row>
        <b-row v-show="step == 8" class="step-8">
          <b-col cols="12">
            <p>Excelente!</p>
            <p>A WePlan é a solução ideal para você alavancar seus resultados.</p>
            <p>Em breve nossa equipe entrará em contato para agendar uma conversa e apresentar nossa solução para você.</p>
          </b-col>
          <b-col cols="12" class="btn-actions">
            <b-button @click="$bvModal.hide('modal-form-profissional-interiores')">Fechar</b-button>
          </b-col>
        </b-row>
      </b-container>
    </b-modal>
  </div>
</template>
<script>
export default {
  name: 'ModalFormProfissionalInterioresComponent',
  data () {
    return {
      step: 1,
      error: false,
      nome: null,
      email: null,
      telefone: null,
      setor: null,
      autonomo: null,
      possuiClientes: null,
      tempoCidade: null,
      experienciaMoveis: null,
      problema: null,
      setorOptions: [
        {
          value: "Arquitetura",
          text: "Arquitetura",
        },
        {
          value: "Design de interiores",
          text: "Design de interiores",
        },
        {
          value: "Venda de móveis",
          text: "Venda de móveis",
        },
        {
          value: "Projeto de móveis",
          text: "Projeto de móveis",
        },
      ],
      autonomoOptions: [
        {
          value: "Sim, há menos de 2 anos.",
          text: "Sim, há menos de 2 anos.",
        },
        {
          value: "Sim, há mais de 2 anos.",
          text: "Sim, há mais de 2 anos.",
        },
        {
          value: "Não atuo como autônomo.",
          text: "Não atuo como autônomo.",
        },
      ],
      possuiClientesOptions: [
        {
          value: "Sim, tenho clientes.",
          text: "Sim, tenho clientes.",
        },
        {
          value: "Não tenho clientes.",
          text: "Não tenho clientes.",
        },
      ],
      tempoCidadeOptions: [
        {
          value: "Há menos de 2 anos.",
          text: "Há menos de 2 anos.",
        },
        {
          value: "Há mais de 2 anos.",
          text: "Há mais de 2 anos.",
        },
        {
          value: "Não resido na cidade onde atuo.",
          text: "Não resido na cidade onde atuo.",
        },
      ],
      experienciaMoveisOptions: [
        {
          value: "Sim, já trabalhei em uma loja de planejados.",
          text: "Sim, já trabalhei em uma loja de planejados.",
        },
        {
          value: "Sim, executo meus projetos em uma loja de planejados.",
          text: "Sim, executo meus projetos em uma loja de planejados.",
        },
        {
          value: "Sim, tenho uma conexão direta com uma indústria (Modelo Studio).",
          text: "Sim, tenho uma conexão direta com uma indústria (Modelo Studio).",
        },
        {
          value: "Nunca trabalhei com móveis planejados.",
          text: "Nunca trabalhei com móveis planejados.",
        },
      ],
    }
  },
  watch: {
    telefone(novoTelefone) {
      this.telefone = this.formatPhoneNumber(novoTelefone);
    }
  },
  methods: {
    nextStep () {
      switch (this.step) {
        case 1:
          if (!this.nome || !this.email || !this.telefone) {
            this.error = true;
          } else {
            this.error = false;
          }
          break;

        case 2:
          if (!this.setor) {
            this.error = true;
          } else {
            this.error = false;
          }
          break;

        case 3:
          if (!this.autonomo) {
            this.error = true;
          } else {
            this.error = false;
          }
          break;

        case 4:
          if (!this.possuiClientes) {
            this.error = true;
          } else {
            this.error = false;
          }
          break;

        case 5:
          if (!this.tempoCidade) {
            this.error = true;
          } else {
            this.error = false;
          }
          break;

        case 6:
          if (!this.experienciaMoveis) {
            this.error = true;
          } else {
            this.error = false;
          }
          break;

        case 7:
          if (!this.problema) {
            this.error = true;
          } else {
            this.error = false;
          }
          break;
      
        default:
          break;
      }
      if (!this.error) {
        this.step < 8 ? this.step++ : this.step = 8;
      }
    },
    previousStep () {
      this.step > 1 ? this.step-- : this.step = 1;
    },
    onHiddenModal () {
      this.step = 1;
    },
    resetForm () {
      this.error = false;
      this.nome = null;
      this.email = null;
      this.telefone = null;
      this.setor = null;
      this.autonomo = null;
      this.possuiClientes = null;
      this.tempoCidade = null;
      this.experienciaMoveis = null;
      this.problema = null;
    },
    submitForm () {
      // console.log(this.removePhoneMask(this.telefone));
      this.nextStep();
      this.resetForm();
    },
    formatPhoneNumber (phoneNumber) {
      console.log("formatPhoneNumber:", phoneNumber);
      let formattedPhoneNumber = phoneNumber.replace(/\D/g, '');
      formattedPhoneNumber = formattedPhoneNumber.replace(/^(\d{2})(\d)/g, '($1) $2');
      formattedPhoneNumber = formattedPhoneNumber.replace(/(\d)(\d{4})$/, '$1-$2');
      return formattedPhoneNumber;
    },
    removePhoneMask (phoneNumber) {
      return phoneNumber.replace(/\D/g, '');
    },
  },
}
</script>
<style>
.modal-body {
  border: 0;
  border-radius: 0;
  background-color: #1c1c1c;
  color: #fff;
  box-shadow: 0 0 0 0.2rem #1c1c1c40;
}

.form-control,
.custom-select {
  border-radius: 0;
  border-color: #0009;
  background-color: #0009;
  color: #fff;
}

.form-control:focus,
.form-control:active,
.custom-select:focus,
.custom-select:active {
  background-color: #0009;
  color: #fff;
  border-color: #ffc821;
  outline: 0;
  box-shadow: 0 0 0 0.2rem #ffc82140;
}

.form-control::placeholder {
  color: #fff;
  opacity: 0.5;
}

.btn {
  border-radius: 0;
  border-color: #1c1c1c;
  background-color: #1c1c1c;
  color: #fff;
}

.btn:hover,
.btn:active,
.btn:focus {
  transition-duration: 0.25s;
}

.btn-actions {
  margin-top: 2rem;
  display: flex;
  justify-content: right;
}

.btn-actions button {
  margin-left: 5px;
}

.error {
  margin-top: 10px;
  text-align: center;
}
</style>
