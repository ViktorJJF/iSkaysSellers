<template>
  <div>
    <content-title title="La Carta"></content-title>
    <div class="main content-inner">
      <div class="row">
        <div class="col-lg-12 mt-5">
          <div class="card">
            <div class="card-body">
              <h4 class="header-title">
                Pedidos pendientes a través del <b>chatbot</b>:
              </h4>
              <div class="single-table">
                <div class="table-responsive">
                  <table class="table text-center">
                    <thead class="text-uppercase bg-primary">
                      <tr class="text-white">
                        <th scope="col">N°</th>
                        <th scope="col">Detalle</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Total</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import contentTitle from "@/components/adminPanel/contentTitle";
export default {
  components: {
    contentTitle,
  },
};
</script>

<style lang="scss" scoped></style>
