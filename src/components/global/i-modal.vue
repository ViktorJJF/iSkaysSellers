<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      :class="'btn btn-'+buttonColor+' btn-'+buttonSize"
      data-toggle="modal"
      data-target="#defaul-modal"
    >{{buttonText}}</button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="defaul-modal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="model-1"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <!-- Modal Content -->
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header">
            <h3 class="modal-title" id="model-1">{{modalTitle}}</h3>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <!-- /modal header -->

          <!-- Modal Body -->
          <div class="modal-body">
            <slot></slot>
          </div>
          <!-- /modal body -->

          <!-- Modal Footer -->
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary btn-sm" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Save changes</button>
          </div>
          <!-- /modal footer -->
        </div>
        <!-- /modal content -->
      </div>
    </div>
    <!-- /modal -->
  </div>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: "Modal",
    },
    buttonColor: {
      type: String,
      default: "primary",
    },
    modalTitle: {
      type: String,
      default: "Título de modal",
    },
    buttonSize: {
      type: String,
      default: "sm",
    },
  },
};
</script>

<style lang="scss" scoped>
</style>