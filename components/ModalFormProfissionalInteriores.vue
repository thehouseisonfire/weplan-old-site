<template>
  <div>
    <b-modal id="modal-form-profissional-interiores" ref="modalFormProfissionalInteriores" hide-header hide-footer @hidden="onHiddenModal">
      <iframe width='100%' height='580'
        src='https://lp.weplan.com.br/form-seja-parceiro'
        frameborder='0'
      ></iframe>
    </b-modal>
  </div>
</template>
<script>
export default {
  name: 'ModalFormProfissionalInterioresComponent',
}
</script>
<style>
.modal-body {
  border: 1px solid #000;
  border-radius: 0;
  background-color: #1c1c1c;
  color: #fff;
  box-shadow: 0 0 0 0.2rem #1c1c1c40;
  padding: 0;
}
</style>
