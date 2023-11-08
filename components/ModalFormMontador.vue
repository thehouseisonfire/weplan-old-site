<template>
  <div>
    <b-modal id="modal-form-montador" ref="modalFormMontador" hide-footer>
      <iframe
        style="width: 100%; height: 100vh"
        src="https://lp.weplan.com.br/form-seja-montador-parceiro"
        frameborder="0"
      ></iframe>
    </b-modal>
  </div>
</template>
<script>
export default {
  name: 'ModalFormMontadorComponent',
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

.modal-header {
  border-radius: 0;
  background-color: #1c1c1c;
  border: 1px solid #000;
}

.modal-header .close {
  color: #fff;
}
</style>
