<template>
  <div class="dt-root">
    <div class="dt-root__inner">
      <!-- Header -->
      <navbar></navbar>
      <!-- Site Main -->
      <main class="dt-main">
        <!-- Sidebar -->
        <sidebar></sidebar>
        <!-- Sidebar -->
        <!-- Site Content Wrapper -->
        <div class="dt-content-wrapper">
          <!-- Site Content -->
          <div class="dt-content">
            <router-view></router-view>
          </div>
          <!-- Footer -->
          <v-footer></v-footer>
          <!-- Footer -->
        </div>
        <!-- Theme Chooser -->
        <div class="dt-customizer-toggle">
          <a href="javascript:void(0)" data-toggle="customizer">
            <i class="icon icon-customizer animation-customizer"></i>
          </a>
        </div>
        <!-- Customizer Sidebar -->
        <aside class="dt-customizer dt-drawer position-right">
          <div class="dt-customizer__inner">
            <!-- Customizer Header -->
            <div class="dt-customizer__header">
              <!-- Customizer Title -->
              <div class="dt-customizer__title">
                <h3 class="mb-0">Theme Settings</h3>
              </div>
              <!-- /customizer title -->

              <!-- Close Button -->
              <button type="button" class="close" data-toggle="customizer">
                <span aria-hidden="true">&times;</span>
              </button>
              <!-- /close button -->
            </div>
            <!-- /customizer header -->

            <!-- Customizer Body -->
            <div class="dt-customizer__body ps-custom-scrollbar">
              <!-- Customizer Body Inner  -->
              <div class="dt-customizer__body-inner">
                <!-- Section -->
                <section>
                  <h4>Theme</h4>

                  <!-- List -->
                  <ul class="dt-list dt-list-sm" id="theme-chooser">
                    <li class="dt-list__item">
                      <div class="choose-option">
                        <a href="javascript:void(0)" class="choose-option__icon" data-theme="light">
                          <img src="assets/images/customizer-icons/theme-light.png" alt="Light" />
                        </a>
                        <span class="choose-option__name">Light</span>
                      </div>
                    </li>
                    <li class="dt-list__item">
                      <div class="choose-option">
                        <a
                          href="javascript:void(0)"
                          class="choose-option__icon"
                          data-theme="semidark"
                        >
                          <img src="assets/images/customizer-icons/theme-normal.png" alt="Normal" />
                        </a>
                        <span class="choose-option__name">Semi-dark</span>
                      </div>
                    </li>
                    <li class="dt-list__item">
                      <div class="choose-option">
                        <a href="javascript:void(0)" class="choose-option__icon" data-theme="dark">
                          <img src="assets/images/customizer-icons/theme-dark.png" alt="Dark" />
                        </a>
                        <span class="choose-option__name">Dark</span>
                      </div>
                    </li>
                  </ul>
                  <!-- /list -->
                </section>
                <!-- /section -->

                <!-- Section -->
                <section>
                  <h4>Style</h4>

                  <!-- List -->
                  <ul class="dt-list dt-list-sm">
                    <li class="dt-list__item d-none d-lg-block">
                      <div class="choose-option">
                        <a
                          href="javascript:void(0)"
                          id="toggle-fixed-sidebar"
                          class="choose-option__icon"
                        >
                          <img
                            src="assets/images/customizer-icons/fix-sidebar.png"
                            alt="Fix Sidebar"
                          />
                        </a>
                        <span class="choose-option__name">Fix Sidebar</span>
                      </div>
                    </li>
                    <li class="dt-list__item">
                      <div class="choose-option">
                        <a
                          href="javascript:void(0)"
                          id="toggle-fixed-header"
                          class="choose-option__icon"
                        >
                          <img src="assets/images/customizer-icons/fix-header.png" alt="Fix Header" />
                        </a>
                        <span class="choose-option__name">Fix Header</span>
                      </div>
                    </li>
                  </ul>
                  <!-- /list -->
                </section>
                <!-- /section -->

                <!-- Section -->
                <section id="theme-style-chooser">
                  <h4>Color</h4>

                  <!-- List -->
                  <ul class="dt-list dt-list-sm dt-color-options">
                    <li class="dt-list__item">
                      <span class="dt-color-option" data-style="style-1"></span>
                    </li>
                    <li class="dt-list__item">
                      <span class="dt-color-option" data-style="style-2"></span>
                    </li>
                    <li class="dt-list__item">
                      <span class="dt-color-option" data-style="style-3"></span>
                    </li>
                    <li class="dt-list__item">
                      <span class="dt-color-option" data-style="style-4"></span>
                    </li>
                    <li class="dt-list__item">
                      <span class="dt-color-option" data-style="style-5"></span>
                    </li>
                    <li class="dt-list__item">
                      <span class="dt-color-option" data-style="style-6"></span>
                    </li>
                    <li class="dt-list__item">
                      <span class="dt-color-option" data-style="style-7"></span>
                    </li>
                    <li class="dt-list__item">
                      <span class="dt-color-option" data-style="style-8"></span>
                    </li>
                    <li class="dt-list__item">
                      <span class="dt-color-option" data-style="style-9"></span>
                    </li>
                    <li class="dt-list__item">
                      <span class="dt-color-option" data-style="style-10"></span>
                    </li>
                  </ul>
                  <!-- /list -->
                </section>
                <!-- /section -->

                <!-- Section -->
                <section class="d-none d-lg-block" id="sidebar-layout">
                  <h4>Sidebar Layout</h4>

                  <!-- List -->
                  <ul class="dt-list dt-list-sm">
                    <li class="dt-list__item">
                      <div class="choose-option">
                        <a
                          href="javascript:void(0)"
                          class="choose-option__icon"
                          id="sl-option1"
                          data-value="folded"
                        >
                          <img src="assets/images/customizer-icons/folded.png" alt="Folded" />
                        </a>
                        <span class="choose-option__name">Folded</span>
                      </div>
                    </li>
                    <li class="dt-list__item">
                      <div class="choose-option">
                        <a
                          href="javascript:void(0)"
                          class="choose-option__icon"
                          id="sl-option2"
                          data-value="default"
                        >
                          <img src="assets/images/customizer-icons/default.png" alt="Default" />
                        </a>
                        <span class="choose-option__name">Default</span>
                      </div>
                    </li>
                    <li class="dt-list__item">
                      <div class="choose-option">
                        <a
                          href="javascript:void(0)"
                          class="choose-option__icon"
                          id="sl-option3"
                          data-value="drawer"
                        >
                          <img src="assets/images/customizer-icons/drawer.png" alt="Drawer" />
                        </a>
                        <span class="choose-option__name">Drawer</span>
                      </div>
                    </li>
                  </ul>
                  <!-- /list -->
                </section>
                <!-- /section -->

                <!-- Section -->
                <section class="d-none d-lg-block" id="layout-chooser">
                  <h4>Layout</h4>

                  <!-- List -->
                  <ul class="dt-list dt-list-sm">
                    <li class="dt-list__item">
                      <div class="choose-option">
                        <a
                          href="javascript:void(0)"
                          class="choose-option__icon"
                          data-layout="framed"
                        >
                          <img src="assets/images/customizer-icons/framed.png" alt="Framed" />
                        </a>
                        <span class="choose-option__name">Framed</span>
                      </div>
                    </li>
                    <li class="dt-list__item">
                      <div class="choose-option">
                        <a
                          href="javascript:void(0)"
                          class="choose-option__icon"
                          data-layout="full-width"
                        >
                          <img src="assets/images/customizer-icons/full-width.png" alt="Full Width" />
                        </a>
                        <span class="choose-option__name">Full Width</span>
                      </div>
                    </li>
                    <li class="dt-list__item">
                      <div class="choose-option">
                        <a
                          href="javascript:void(0)"
                          class="choose-option__icon"
                          data-layout="boxed"
                        >
                          <img src="assets/images/customizer-icons/boxed.png" alt="Boxed" />
                        </a>
                        <span class="choose-option__name">Boxed</span>
                      </div>
                    </li>
                  </ul>
                  <!-- /list -->
                </section>
                <!-- /section -->

                <!-- Section -->
                <section>
                  <h4>Nav Style</h4>

                  <!-- List -->
                  <ul class="dt-list">
                    <li class="dt-list__item">
                      <div class="choose-option">
                        <a
                          href="http://drift.g-axon.work/html-bs4/default"
                          target="_blank"
                          class="choose-option__icon"
                        >
                          <img
                            src="assets/images/customizer-icons/layout-default.png"
                            alt="Layout Default"
                          />
                        </a>
                        <span class="choose-option__name">Default</span>
                      </div>
                    </li>
                    <li class="dt-list__item">
                      <div class="choose-option">
                        <a
                          href="http://drift.g-axon.work/html-bs4/saas"
                          target="_blank"
                          class="choose-option__icon"
                        >
                          <img
                            src="assets/images/customizer-icons/layout-saas.png"
                            alt="Layout SAAS"
                          />
                        </a>
                        <span class="choose-option__name">SAAS Layout</span>
                      </div>
                    </li>
                    <li class="dt-list__item">
                      <div class="choose-option">
                        <a
                          href="http://drift.g-axon.work/html-bs4/listing"
                          target="_blank"
                          class="choose-option__icon"
                        >
                          <img
                            src="assets/images/customizer-icons/layout-listing.png"
                            alt="Layout listing"
                          />
                        </a>
                        <span class="choose-option__name">Listing</span>
                      </div>
                    </li>
                    <li class="dt-list__item">
                      <div class="choose-option">
                        <a
                          href="http://drift.g-axon.work/html-bs4/intranet"
                          target="_blank"
                          class="choose-option__icon"
                        >
                          <img
                            src="assets/images/customizer-icons/layout-intranet.png"
                            alt="Layout Intranet"
                          />
                        </a>
                        <span class="choose-option__name">Intranet</span>
                      </div>
                    </li>
                    <li class="dt-list__item">
                      <div class="choose-option">
                        <a
                          href="http://drift.g-axon.work/html-bs4/back-office"
                          target="_blank"
                          class="choose-option__icon"
                        >
                          <img
                            src="assets/images/customizer-icons/layout-back-office.png"
                            alt="Layout Back Office"
                          />
                        </a>
                        <span class="choose-option__name">Back Office</span>
                      </div>
                    </li>
                    <li class="dt-list__item">
                      <div class="choose-option">
                        <a
                          href="http://drift.g-axon.work/html-bs4/back-office-mini"
                          target="_blank"
                          class="choose-option__icon"
                        >
                          <img
                            src="assets/images/customizer-icons/layout-back-office-mini.png"
                            alt="Layout Back Office Minimal"
                          />
                        </a>
                        <span class="choose-option__name">Back Office Minimal</span>
                      </div>
                    </li>
                    <li class="dt-list__item">
                      <div class="choose-option">
                        <a
                          href="http://drift.g-axon.work/html-bs4/modern"
                          target="_blank"
                          class="choose-option__icon"
                        >
                          <img
                            src="assets/images/customizer-icons/layout-modern.png"
                            alt="Layout Modern"
                          />
                        </a>
                        <span class="choose-option__name">Modern</span>
                      </div>
                    </li>
                    <li class="dt-list__item">
                      <div class="choose-option">
                        <a
                          href="http://drift.g-axon.work/html-bs4/crm"
                          target="_blank"
                          class="choose-option__icon"
                        >
                          <img src="assets/images/customizer-icons/layout-crm.png" alt="Layout CRM" />
                        </a>
                        <span class="choose-option__name">CRM</span>
                      </div>
                    </li>
                  </ul>
                  <!-- /list -->
                </section>
                <!-- /section -->
              </div>
              <!-- /customizer body inner -->
            </div>
            <!-- /customizer body -->
          </div>
        </aside>
        <!-- /customizer sidebar -->
      </main>
    </div>
  </div>
</template>

<script>
import sidebar from "@/components/adminPanel/sidebar";
import navbar from "@/components/adminPanel/navbar";
import vFooter from "@/components/adminPanel/footer";
// import { addCustomScript } from "@/utils/utils";
// import successSnackbar from "@/components/global/success";
// import overlay from "@/components/global/overlay";
export default {
  components: {
    sidebar,
    navbar,
    vFooter,
    // successSnackbar,
    // overlay,
  },
  mounted() {
    // this.initialData();
  },
  methods: {
    async initialData() {
      //dishes
      this.$store.commit("showLoadingScreen");
      try {
        await this.$store.dispatch("getDishes");
        console.log("esto hay en store: ", this.$store.state.dishes);
      } catch (error) {
        this.$store.commit("showErr");
        console.log(error);
      } finally {
        this.$store.commit("showLoadingScreen", false);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
