<template>
  <div>
    <content-title title="Pedidos pendientes"></content-title>
    <!-- page title area end -->
    <div class="main-content-inner">
      <div class="row">
        <!-- table primary start -->
        <div class="col-lg-12 mt-5">
          <div class="card">
            <div class="card-body">
              <h4 class="header-title">
                Pedidos pendientes a través del <b>chatbot</b>:
                {{ pendingOrders.length }}
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
                        <th scope="col">Marcar como hecho</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(pendingOrder, idx) in pendingOrders"
                        :key="pendingOrder.id"
                      >
                        <th scope="row">{{ idx + 1 }}</th>
                        <td>
                          <ul>
                            <li
                              v-for="item in pendingOrder.detail"
                              :key="item.id"
                            >
                              ✔️ {{ item.name }}
                            </li>
                          </ul>
                        </td>
                        <td>{{ pendingOrder.date }}</td>
                        <td>$120</td>
                        <td>
                          <span class="badge badge-danger">Pendiente</span>
                        </td>
                        <td>
                          <b-form-checkbox
                            v-model="status"
                            name="checkbox-1"
                            value="accepted"
                            unchecked-value="not_accepted"
                          >
                          </b-form-checkbox>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12 mt-5">
          <div class="card">
            <div class="card-body">
              <h4 class="header-title">
                Pedidos agregados manualmente:
                {{ pendingOrders.length }}
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
                        <th scope="col">Marcar como hecho</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(pendingOrder, idx) in pendingOrders"
                        :key="pendingOrder.id"
                      >
                        <th scope="row">{{ idx + 1 }}</th>
                        <td>
                          <ul>
                            <li
                              v-for="item in pendingOrder.detail"
                              :key="item.id"
                            >
                              ✔️ {{ item.name }}
                            </li>
                          </ul>
                        </td>
                        <td>{{ pendingOrder.date }}</td>
                        <td>$120</td>
                        <td>
                          <span class="badge badge-danger">Pendiente</span>
                        </td>
                        <td>
                          <b-form-checkbox
                            name="checkbox-1"
                            value="accepted"
                            unchecked-value="not_accepted"
                          ></b-form-checkbox>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- table primary end -->
        <!-- table success start -->
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
  data() {
    return {
      pendingOrders: [
        {
          id: 1,
          detail: [
            { id: 1, name: "1/4 Pollo a la brasa", price: 4, qty: 2 },
            { id: 2, name: "Gaseosa Cola real", price: 4, qty: 2 },
          ],
          date: "09/05/2020",
          status: "pending",
        },
        {
          id: 2,
          detail: [
            { id: 1, name: "1/2 Pollo a la brasa", price: 4, qty: 1 },
            { id: 2, name: "Gaseosa Cola real", price: 4, qty: 2 },
          ],
          date: "09/05/2020",
          status: "pending",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
