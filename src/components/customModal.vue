<template>
  <div>
    <b-modal
      ref="my-modal"
      id="modal-lg"
      footer-class="disable-footer"
      :title="title"
      button-size="sm"
    >
      <!-- inicio del body -->
      <slot></slot>
      <!-- fin del body -->
      <!-- <template v-slot:modal-footer>
        <slot name="saveButton"></slot>
        <slot name="cancelButton"></slot>
      </template> -->
    </b-modal>
    <!-- trigger button -->
    <b-button
      variant="primary"
      @click="
        showModal();
        $emit('onOpenModal');
      "
      >Agregar</b-button
    >
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Edición",
    },
  },
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
  },
};
</script>

<style lang="scss">
.disable-footer {
  display: none;
}
</style>
