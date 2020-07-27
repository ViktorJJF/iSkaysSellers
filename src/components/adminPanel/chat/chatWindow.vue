<template>
  <div class="dt-module__container" v-if="isDataReady">
    <!-- Module Header -->
    <div class="dt-module__header">
      <!-- User Detail  -->
      <div class="dt-avatar-wrapper">
        <div class="dt-avatar-status mr-2">
          <img class="dt-avatar size-45" :src="activeChat.clientId.profile_pic" alt="Domnic Brown" />
          <div class="dot-shape bg-success dot-shape-lg"></div>
        </div>
        <span class="dt-avatar-info">
          <a href="javascript:void(0)" class="dt-avatar-name">{{fullname}}</a>
          <!-- <span class="d-inline-block">ron.brown@example.com</span> -->
        </span>
      </div>
      <!-- User Detail  -->

      <!-- Dropdown -->
      <div class="dropdown ml-auto">
        <a
          class="dropdown-toggle no-arrow text-dark"
          href="#"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i class="icon icon-horizontal-more icon-lg"></i>
        </a>

        <div class="dropdown-menu dropdown-menu-right">
          <a class="dropdown-item" href="javascript:void(0)">
            <i class="icon icon-editors icon-fw"></i> Edit
          </a>
          <a class="dropdown-item" href="javascript:void(0)">
            <i class="icon icon-trash icon-fw"></i> Delete
          </a>
          <a class="dropdown-item" href="javascript:void(0)">
            <i class="icon icon-contacts icon-fw"></i> Contact List
          </a>
          <a class="dropdown-item" href="javascript:void(0)">
            <i class="icon icon-heart icon-fw"></i> Favourite List
          </a>
        </div>
      </div>
      <!-- /dropdown -->
    </div>
    <!-- /module header -->

    <!-- Module Content -->
    <div class="dt-module__content ps-custom-scrollbar">
      <!-- Module Content Inner -->
      <div class="dt-module__content-inner">
        <!-- Chat Conversation -->
        <div class="dt-chat__conversation">
          <div
            v-for="message in $store.state.messagesModule.messages"
            :key="message._id"
            :class="{'dt-chat__item':true,'reply':message.from==='SELLER'?true:false}"
          >
            <!-- Avatar -->
            <img
              class="dt-avatar size-30"
              :src="activeChat.clientId.profile_pic"
              alt="Domnic Brown"
              v-show="message.from==='CLIENT'"
            />
            <img
              class="dt-avatar size-30"
              :src="$store.state.authModule.user.profile_pic"
              alt="Domnic Brown"
              v-show="message.from!=='CLIENT'"
            />
            <!-- /avatar -->

            <!-- Messages -->
            <div class="dt-chat__message-wrapper">
              <!-- Message -->
              <div class="dt-chat__message pre-formatted">{{message.body}}</div>
              <!-- /message -->
            </div>
            <!-- /messages -->
          </div>
        </div>
        <!-- /chat conversation -->
      </div>
      <!-- /module content inner -->
    </div>
    <!-- /module content -->

    <!-- Comment Box -->
    <div class="add-comment-box">
      <!-- Action Tools -->
      <div class="action-tools">
        <button
          :disabled="!activeChat.clientId.sellerId"
          type="button"
          class="btn btn-danger btn-sm mr-2 mb-2"
          @click="endAttention(activeChat.clientId._id,activeChat.sellerId._id)"
        >Terminar Atención</button>
        <button
          :disabled="!activeChat.clientId.sellerId"
          class="btn btn-primary dt-fab-btn"
          type="button"
          @click="sendFacebookMessage(activeChat.clientId.fbId,message)"
        >
          <i class="icon icon-send-new icon-xl"></i>
        </button>

        <div class="dt-fab-btn dt-attachment-btn size-30">
          <input type="file" />
          <i class="icon icon-attach-v"></i>
        </div>
      </div>
      <!-- /action tools -->

      <!-- Media -->
      <div class="media">
        <!-- Avatar -->
        <img
          class="dt-avatar"
          :src="$store.state.authModule.user.profile_pic"
          :alt="$store.state.authModule.user.first_name"
        />
        <!-- /avatar -->

        <!-- Media Body -->
        <div class="media-body">
          <!-- Text Area -->
          <input
            v-if="activeChat.clientId.sellerId"
            type="text"
            class="form-control border-0 shadow-none bg-focus"
            id="validationDefault01"
            placeholder="Escribe tu mensaje"
            v-model="message"
            @keyup.enter="sendFacebookMessage(activeChat.clientId.fbId,message)"
          />
          <div v-else>
            <span class="text-danger">La conversación con este cliente ha terminado</span>
            <input
              disabled
              type="text"
              class="form-control border-0 shadow-none bg-focus"
              placeholder="Chat bloqueado"
            />
          </div>
          <!-- <textarea
                    class="form-control border-0 shadow-none bg-focus"
                    rows="1"
                    placeholder="Write your comment..."
                    v-model="message.body"
                    @keyup.enter="replyMessage(message.body)"
          ></textarea>-->
          <!-- /text area -->
        </div>
        <!-- /media body -->
      </div>
      <!-- /media -->
    </div>
    <!-- /comment box -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      isDataReady: false,
      message: "",
    };
  },
  async mounted() {
    try {
      let chatId = this.$route.params.chatId;
      console.log("se recibio este chatid: ", chatId);
      this.$store.dispatch("chatsModule/setActiveChat", chatId);
      await this.$store.dispatch("messagesModule/list", { chatId });
      this.isDataReady = true;
      console.log(
        "se cargaron estos mensajes bruses: ",
        this.$store.state.messagesModule.messages
      );
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    clearMessage() {
      this.message = "";
    },
    sendFacebookMessage(fbId, text) {
      this.clearMessage();
      axios
        .post("/api/sendmessage", { fbId, text })
        .then(async (res) => {
          console.log(res.data);
          try {
            await this.$store.dispatch("messagesModule/create", {
              chatId: this.$route.params.chatId,
              body: text,
              from: "SELLER",
            });
          } catch (error) {
            console.log(error);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
    endAttention(clientId, sellerId) {
      this.$store.commit("chatsModule/endAttention");
      let msg = "Gracias por contactar con iSkays";
      axios
        .post("/api/end-attend", { clientId, sellerId })
        .then(async () => {
          try {
            //send fb message
            await this.$store.dispatch("messagesModule/sendFacebookMessage", {
              fbId: this.activeChat.clientId.fbId,
              text: "Gracias por contactar con iSkays",
            });
            //save into db
            await this.$store.dispatch("messagesModule/create", {
              chatId: this.$route.params.chatId,
              body: msg,
              from: "SELLER",
            });
          } catch (error) {
            console.log(error);
          }
        })
        .catch((error) => console.log(error));
    },
  },
  computed: {
    fullname() {
      return (
        this.activeChat.clientId.first_name +
        " " +
        this.activeChat.clientId.last_name
      );
    },
    activeChat() {
      return this.$store.state.chatsModule.activeChat;
    },
  },
};
</script>

<style lang="scss" scoped>
.pre-formatted {
  white-space: pre-wrap;
}
</style>