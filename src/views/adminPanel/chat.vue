<template>
  <div>
    <!-- Page Header -->
    <content-title title="Chat"></content-title>
    <!-- /page header -->
    <div class="row">
      <!-- Grid Item -->
      <div class="col-xl-12">
        <!-- Module -->
        <div class="dt-module dt-module--chat">
          <!-- Module Sidebar -->
          <div class="dt-module__sidebar">
            <!-- Sidebar Header -->
            <div class="dt-module__sidebar-header pb-0">
              <!-- User Detail  -->
              <div class="dt-avatar-wrapper mb-8 d-none d-md-flex">
                <div class="dt-avatar-status">
                  <img
                    class="dt-avatar"
                    :src="$store.state.authModule.user.profile_pic"
                    :alt="$store.state.authModule.user.first_name"
                  />
                  <div class="dot-shape bg-success dot-shape-lg"></div>
                </div>
                <span class="dt-avatar-info">
                  <a
                    href="javascript:void(0)"
                    class="dt-avatar-name"
                  >{{$store.getters["authModule/fullname"]}}</a>
                  <span class="f-12 d-inline-block">online</span>
                </span>

                <!-- Dropdown -->
                <div class="dropdown ml-auto align-self-start mt-1">
                  <a
                    class="dropdown-toggle no-arrow"
                    href="#"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="icon icon-vertical-more"></i>
                  </a>

                  <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="javascript:void(0)">
                      <i class="icon icon-editors icon-fw"></i> Edit
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
              <!-- User Detail  -->

              <!-- App Quick Menu -->
              <div class="quick-menu-list">
                <!-- Search Box -->
                <form class="search-box d-md-none">
                  <input
                    class="form-control"
                    type="search"
                    id="address"
                    name="address"
                    placeholder="Search in app..."
                  />
                  <button type="submit" class="search-icon">
                    <i class="icon icon-search icon-lg"></i>
                  </button>
                </form>
                <!-- /search box -->

                <a
                  href="javascript:void(0)"
                  class="quick-menu d-none d-md-block"
                  data-toggle="mdrawer"
                  data-target="#drawer-search-bar"
                >
                  <i class="icon icon-search"></i>
                </a>
                <a
                  href="javascript:void(0)"
                  class="quick-menu"
                  data-toggle="mdrawer"
                  data-target="#drawer-notifications"
                >
                  <i class="icon icon-notification2"></i>
                </a>
                <!-- Dropdown -->
                <div class="quick-menu dropdown">
                  <!-- Dropdown Button -->
                  <a
                    href="#"
                    class="dropdown-toggle no-arrow"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="icon icon-circle-add-o"></i>
                  </a>
                  <!-- /dropdown button -->

                  <!-- Dropdown Menu -->
                  <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="javascript:void(0)">Add New Group</a>
                    <a class="dropdown-item" href="javascript:void(0)">Add New Chat</a>
                    <a class="dropdown-item" href="javascript:void(0)">
                      Add New
                      Contact
                    </a>
                  </div>
                  <!-- /dropdown menu -->
                </div>
                <!-- /dropdown -->

                <div class="quick-menu dropdown d-md-none">
                  <!-- Dropdown Link -->
                  <a
                    href="#"
                    class="dropdown-toggle no-arrow"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      class="dt-avatar size-25"
                      src="assets/images/user-avatar/amay.jpg"
                      alt="Reece Jacklin"
                    />
                  </a>
                  <!-- /dropdown link -->

                  <!-- Dropdown Option -->
                  <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="javascript:void(0)">
                      <i class="icon icon-editors icon-fw"></i> Edit
                    </a>
                    <a class="dropdown-item" href="javascript:void(0)">
                      <i class="icon icon-contacts icon-fw"></i> Contact List
                    </a>
                    <a class="dropdown-item" href="javascript:void(0)">
                      <i class="icon icon-heart icon-fw"></i> Favourite List
                    </a>
                  </div>
                  <!-- /dropdown option -->
                </div>

                <a
                  href="javascript:void(0)"
                  class="quick-menu d-md-none"
                  data-toggle="msidebar-content"
                >
                  <i class="icon icon-menu"></i>
                </a>
              </div>
              <!-- /app quick menu -->
            </div>
            <!-- /sidebar header -->

            <!-- Sidebar Menu -->
            <div class="dt-module__sidebar-content">
              <!-- Card Header -->
              <div class="card-header card-nav bg-transparent border-bottom">
                <ul class="card-header-links nav nav-underline text-uppercase" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      data-toggle="tab"
                      href="#tab-pane1"
                      role="tab"
                      aria-controls="tab-pane1"
                      aria-selected="true"
                    >Recientes</a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      data-toggle="tab"
                      href="#tab-pane2"
                      role="tab"
                      aria-controls="tab-pane2"
                      aria-selected="true"
                    >Clientes</a>
                  </li>
                </ul>
              </div>
              <!-- /card header -->

              <!-- Tab Content-->
              <div class="tab-content">
                <!-- Tab panel -->
                <div id="tab-pane1" class="tab-pane active">
                  <!-- Contact Container -->
                  <div class="dt-contacts__container ps-custom-scrollbar">
                    <div class="dt-contacts__container-inner">
                      <!-- Contacts -->
                      <div class="dt-contacts contacts-list">
                        <!-- Contact Heading -->
                        <h5 class="dt-contact__heading">Hoy</h5>
                        <!-- /contact heading -->

                        <!-- Contact -->
                        <div
                          v-for="chat in chats"
                          :key="chat._id"
                          class="dt-contact"
                          @click="selectChat(chat._id,chat)"
                        >
                          <!-- Avatar -->
                          <img
                            class="dt-avatar"
                            :src="chat.clientId.profile_pic"
                            :alt="chat.clientId.first_name"
                          />
                          <!-- /avatar -->

                          <!-- Contact Info -->
                          <div class="dt-contact__info">
                            <h4
                              class="dt-contact__title"
                            >{{chat.clientId.first_name}} {{chat.clientId.last_name}}</h4>
                            <p class="dt-contact__desc">hola que hace</p>
                          </div>
                          <!-- /contact info -->
                        </div>
                        <!-- /contact -->
                      </div>
                      <!-- contacts -->
                    </div>
                  </div>
                  <!-- /contact container -->
                </div>
                <!-- /tab panel -->

                <!-- Tab panel -->
                <div id="tab-pane2" class="tab-pane">
                  <!-- Contact Container -->
                  <div class="dt-contacts__container ps-custom-scrollbar">
                    <div class="dt-contacts__container-inner">
                      <!-- Contacts -->
                      <div class="dt-contacts contacts-list">
                        <!-- Contact -->
                        <div class="dt-contact" data-location="chat-start.html">
                          <!-- Avatar -->
                          <img
                            class="dt-avatar"
                            src="assets/images/user-avatar/kemroon-white.jpg"
                            alt="Kemroon White"
                          />
                          <!-- /avatar -->

                          <!-- Contact Info -->
                          <div class="dt-contact__info">
                            <h4 class="dt-contact__title">Kemroon White</h4>
                            <p class="dt-contact__desc">tried the suggest...</p>
                          </div>
                          <!-- /contact info -->
                        </div>
                        <!-- /contact -->

                        <!-- Contact -->
                        <div class="dt-contact" data-location="chat-start.html">
                          <!-- Avatar -->
                          <span class="dt-avatar bg-orange text-white">RJ</span>
                          <!-- /avatar -->

                          <!-- Contact Info -->
                          <div class="dt-contact__info">
                            <h4 class="dt-contact__title">Reece Jacklin</h4>
                            <p class="dt-contact__desc">tried the suggest...</p>
                          </div>
                          <!-- /contact info -->
                        </div>
                        <!-- /contact -->

                        <!-- Contact -->
                        <div class="dt-contact" data-location="chat-start.html">
                          <!-- Avatar -->
                          <img
                            class="dt-avatar"
                            src="assets/images/user-avatar/jimmy-jo.jpg"
                            alt="Jimmy Jo"
                          />
                          <!-- /avatar -->

                          <!-- Contact Info -->
                          <div class="dt-contact__info">
                            <h4 class="dt-contact__title">Jimmy Jo</h4>
                            <p class="dt-contact__desc">tried the suggest...</p>
                          </div>
                          <!-- /contact info -->
                        </div>
                        <!-- /contact -->

                        <!-- Contact -->
                        <div class="dt-contact" data-location="chat-start.html">
                          <!-- Avatar -->
                          <span class="dt-avatar bg-dark-blue text-white">JB</span>
                          <!-- /avatar -->

                          <!-- Contact Info -->
                          <div class="dt-contact__info">
                            <h4 class="dt-contact__title">Jeo Brown</h4>
                            <p class="dt-contact__desc">tried the suggest...</p>
                          </div>
                          <!-- /contact info -->
                        </div>
                        <!-- /contact -->

                        <!-- Contact -->
                        <div class="dt-contact" data-location="chat-start.html">
                          <!-- Avatar -->
                          <img
                            class="dt-avatar"
                            src="assets/images/user-avatar/steve-smith.jpg"
                            alt="Steve Smith"
                          />
                          <!-- /avatar -->

                          <!-- Contact Info -->
                          <div class="dt-contact__info">
                            <h4 class="dt-contact__title">Domnic Joe</h4>
                            <p class="dt-contact__desc">tried the suggest...</p>
                          </div>
                          <!-- /contact info -->
                        </div>
                        <!-- /contact -->

                        <!-- Contact -->
                        <div class="dt-contact" data-location="chat-start.html">
                          <!-- Avatar -->
                          <span class="dt-avatar bg-dark-blue text-white">RB</span>
                          <!-- /avatar -->

                          <!-- Contact Info -->
                          <div class="dt-contact__info">
                            <h4 class="dt-contact__title">Ron Brown</h4>
                            <p class="dt-contact__desc">tried the suggest...</p>
                          </div>
                          <!-- /contact info -->
                        </div>
                        <!-- /contact -->

                        <!-- Contact -->
                        <div class="dt-contact" data-location="chat-start.html">
                          <!-- Avatar -->
                          <img
                            class="dt-avatar"
                            src="assets/images/user-avatar/stella-johnson.jpg"
                            alt="Stella Johnson"
                          />
                          <!-- /avatar -->

                          <!-- Contact Info -->
                          <div class="dt-contact__info">
                            <h4 class="dt-contact__title">Stella Johnson</h4>
                            <p class="dt-contact__desc">tried the suggest...</p>
                          </div>
                          <!-- /contact info -->
                        </div>
                        <!-- /contact -->

                        <!-- Contact -->
                        <div class="dt-contact" data-location="chat-start.html">
                          <!-- Avatar -->
                          <span class="dt-avatar bg-orange text-white">TG</span>
                          <!-- /avatar -->

                          <!-- Contact Info -->
                          <div class="dt-contact__info">
                            <h4 class="dt-contact__title">Tyler Guerrero</h4>
                            <p class="dt-contact__desc">tried the suggest...</p>
                          </div>
                          <!-- /contact info -->
                        </div>
                        <!-- /contact -->
                      </div>
                      <!-- contacts -->
                    </div>
                  </div>
                  <!-- /contact container -->
                </div>
                <!-- /tab panel -->
              </div>
              <!-- /tab content-->
            </div>
            <!-- /sidebar Menu -->
          </div>
          <!-- /module sidebar -->
          <router-view v-if="isDataReady" :key="rerender"></router-view>
          <!-- <chat-window :activeChat="activeChat"></chat-window> -->
          <!-- Module Container -->

          <!-- /module container -->
        </div>
        <!-- /module -->
      </div>
      <!-- /grid item -->
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
      rerender: 0,
      isDataReady: false,
      chats: [],
    };
  },
  // async beforeRouteEnter(to, from, next) {
  //   let chats;
  //   try {
  //   } catch (error) {
  //     console.log("algo salio mal...", error);
  //   }
  //   next((vm) => {
  //     vm.initialData(chats);
  //   });
  // },
  async mounted() {
    try {
      this.chats = this.$deepCopy(
        await this.$store.dispatch("chatsModule/list")
      );
      this.isDataReady = true;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    initialData(chats) {
      this.chats = chats;
    },
    selectChat(chatId, chat) {
      this.rerender = this.rerender + 1;
      this.$store.dispatch("chatsModule/setActiveChat", chat);
      this.$router.push({ name: "chatWindow", params: { chatId: chatId } });
    },
  },
};
</script>

<style lang="scss" scoped>
.dt-module__sidebar {
  width: 1500px !important;
}
</style>