<template>
  <div>
    <!-- Page Header -->
    <content-title title="Clientes por atender"></content-title>
    <!-- /page header -->
    <div class="row">
      <div class="col-xl-10">
        <!-- Entry Header -->
        <div class="dt-entry__header">
          <!-- Entry Heading -->
          <div class="dt-entry__heading">
            <h3 class="dt-entry__title">Clientes por atender en la fanpage iSkays - Facebook</h3>
          </div>
          <!-- /entry heading -->
        </div>
        <!-- /entry header -->

        <!-- Card -->
        <div class="dt-card overflow-hidden">
          <!-- Card Body -->
          <div class="dt-card__body p-0">
            <!-- Tables -->
            <div class="table-responsive" v-if="tempMessages.length>0">
              <table class="table table-striped mb-0">
                <thead class="thead-light">
                  <tr>
                    <th scope="col">#</th>
                    <th class="text-uppercase" scope="col">Nombres</th>
                    <th class="text-uppercase" scope="col">Apellidos</th>
                    <th class="text-uppercase" scope="col">ID Facebook</th>
                    <th class="text-uppercase" scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="tempMessage in tempMessages" :key="tempMessage._id">
                    <th scope="row">1</th>
                    <td>{{tempMessage.clientId.first_name}}</td>
                    <td>{{tempMessage.clientId.last_name}}</td>
                    <td>{{tempMessage.clientId.fbId}}</td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm mr-2 mb-2"
                        @click="attendClient(tempMessage.clientId.fbId,tempMessage.clientId._id,$store.getters['authModule/sellerId'])"
                      >Atender</button>
                      <i-modal
                        buttonText="Ver mensajes"
                        buttonSize="sm"
                        :modalTitle="'Mensajes por responder de '+tempMessage.clientId.first_name"
                      >
                        <ul>
                          <li
                            v-for="message in tempMessage.body"
                            :key="message._id"
                          >{{ message.msg }}</li>
                        </ul>
                      </i-modal>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- /tables -->
            <div
              class="alert alert-info"
              role="alert"
              v-else
            >Todos los clientes fueron atendidos ... regresa más tarde</div>
          </div>
          <!-- /card body -->
        </div>
        <!-- /card -->
      </div>
    </div>
  </div>
</template>

<script>
import contentTitle from "@/components/adminPanel/contentTitle";
import iModal from "@/components/global/i-modal";
import axios from "axios";
export default {
  components: {
    contentTitle,
    iModal,
  },
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      tempMessages: [],
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
    try {
      this.tempMessages = this.$deepCopy(
        await this.$store.dispatch("tempMessagesModule/list")
      );
    } catch (error) {
      console.log("algo salio mal...", error);
    }
  },
  methods: {
    attendClient(fbId, clientId, sellerId) {
      axios
        .post("/api/attend", { sellerId, clientId })
        .then(async (res) => {
          let createdChatId = res.data.payload.chatId;
          let welcomeMessage =
            "Se conectó el asesor: " +
            this.$store.getters["authModule/fullname"];
          try {
            await this.$store.dispatch("messagesModule/sendFacebookMessage", {
              fbId,
              text: welcomeMessage,
            });
            //save into db
            await this.$store.dispatch("messagesModule/create", {
              chatId: createdChatId,
              body: welcomeMessage,
              from: "SELLER",
            });
          } catch (error) {
            console.log(error);
          }
          this.$router.push({
            name: "chatWindow",
            params: { chatId: createdChatId },
          });
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>