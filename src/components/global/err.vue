<template>
  <b-toast
    id="my-toast"
    variant="danger"
    solid
    v-model="snackbar"
    auto-hide-delay="3000"
  >
    <template v-slot:toast-title>
      <div class="d-flex flex-grow-1 align-items-baseline">
        <b-img
          src="/assets/images/yes_check.webp"
          class="mr-2"
          width="30"
          height="12"
        ></b-img>
        <strong class="mr-auto">Acción</strong>
      </div>
    </template>
    {{ snackbarText }}
  </b-toast>
</template>

<script>
export default {
  computed: {
    snackbar: {
      get() {
        return this.$store.state.showErrMessage;
      },
      set(newValue) {
        this.$store.state.showErrMessage = newValue;
      },
    },
    snackbarText() {
      return this.$store.state.errMessage;
    },
  },
};
</script>

<style lang="scss" scoped></style>
