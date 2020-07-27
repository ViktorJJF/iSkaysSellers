<template>
  <div class="dt-page__header">
    <h1 class="dt-page__title">{{title}}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: " ",
    },
  },
};
</script>

<style lang="scss" scoped></style>
