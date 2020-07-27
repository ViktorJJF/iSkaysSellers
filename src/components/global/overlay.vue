<template>
  <b-overlay :show="overlay" rounded="sm" no-wrap> </b-overlay>
</template>

<script>
export default {
  mounted() {},
  computed: {
    overlay() {
      return this.$store.state.loadingScreen;
    },
    overlayText() {
      return this.$store.state.overlay.text;
    },
  },
};
</script>

<style lang="scss" scoped></style>
