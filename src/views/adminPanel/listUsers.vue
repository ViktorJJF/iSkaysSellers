<template>
  <div>
    <content-title title="Listado de usuarios"></content-title>
    <div class="main-content-inner">
      <div class="row">
        <div class="col-lg-12 mt-5">
          <div class="card">
            <div class="card-body">
              <h4 class="header-title">
                Usuarios que interactuaron con el chatbot:
                {{ chatbotUsers.length }}
              </h4>
              <div class="single-table">
                <div class="table-responsive">
                  <b-table
                    :table-class="['table', 'text-center']"
                    :thead-tr-class="[
                      'text-uppercase',
                      'bg-primary',
                      'text-white',
                    ]"
                    responsive
                    id="my-table"
                    :items="chatbotUsers"
                    :per-page="perPage"
                    :current-page="currentPage"
                    :fields="fields"
                  >
                    <template v-slot:cell(N°)="data">
                      {{ data.index + 1 }}
                    </template>
                  </b-table>
                </div>
              </div>
              <b-alert variant="danger" show v-show="chatbotUsers.length === 0"
                >Aún no hubo interacciones con tu chatbot</b-alert
              >
              <b-pagination
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                aria-controls="my-table"
              ></b-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import contentTitle from "@/components/adminPanel/contentTitle";
// import { listChatbotUsers } from "@/services/api";
export default {
  components: {
    contentTitle,
  },
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      chatbotUsers: [],
      fields: [
        "N°",
        { key: "first_name", label: "Nombres" },
        { key: "last_name", label: "Apellidos" },
        { key: "email", label: "Email" },
        { key: "dni", label: "DNI" },
        { key: "created_at", label: "Fecha" },
      ],
    };
  },
  async mounted() {
    this.initialData();
  },
  methods: {
    async initialData() {
      // this.chatbotUsers = await listChatbotUsers();
    },
  },
  computed: {
    rows() {
      return this.chatbotUsers.length;
    },
  },
};
</script>

<style lang="scss" scoped></style>
