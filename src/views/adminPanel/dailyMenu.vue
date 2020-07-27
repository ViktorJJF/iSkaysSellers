<template>
  <div>
    <content-title title="Menú de hoy"></content-title>
    <div class="main content-inner">
      <div class="row">
        <div class="col-lg-12 mt-5">
          <div class="card">
            <div class="card-body">
              <h4 class="header-title">
                Pedidos pendientes a través del <b>chatbot</b>:
              </h4>
              <b-alert variant="primary" show
                >Si deseas que el <b>chatbot</b> muestre información sobre el
                menú diario que ofreces, se recomienda que destines
                categorías/tipos específicos para ello. Por defecto, se
                encontrarán marcadas las categorías <b>Entrada</b>,
                <b>Segundo</b> y <b>Postre</b>
              </b-alert>
              <p>
                Selecciona los tipos de platos que el chatbot mostrará como
                parte del menú diario (si lo hubiera) (Ejemplo: Entradas,
                Segundos, Postres). Si aún no creaste los tipos de platos,
                ingresa
                <router-link :to="{ name: 'listDishes' }">
                  aquí
                </router-link>
              </p>
              <div class="single-table">
                <b-form-checkbox
                  v-for="dishesType in dishesTypes"
                  :key="dishesType._id"
                  v-model="selectedTypes"
                  :value="dishesType._id"
                  :unchecked-value="dishesType._id"
                  name="flavour-4a"
                  inline
                  @change="updateDishTypeToMenu(dishesType._id)"
                  ref="checkboxForm"
                  >{{ dishesType.name }}
                </b-form-checkbox>
                <b-card-group deck>
                  <b-card
                    v-for="type in selectedTypes"
                    :key="type._id"
                    class="card-max-width mt-3"
                    border-variant="primary"
                    :header="getDishType(type)"
                    header-bg-variant="primary"
                    header-text-variant="white"
                    align="center"
                  >
                    <b-card-text>
                      <ul>
                        <li
                          v-for="dish in getDishesByType(type)"
                          :key="dish._id"
                          class="mb-3"
                        >
                          <span class="mr-2">✔️ {{ dish.name }}</span>
                          <b-icon
                            class="c-clickeable"
                            icon="trash"
                            variant="danger"
                            @click="deleteItem"
                          ></b-icon>
                        </li>
                      </ul>
                      <p v-show="getDishesByType(type).length === 0">
                        ⚠️ No cuentas con platos en esta categoría
                      </p>
                    </b-card-text>
                    <span>¿Deseas agregar nuevos platos?</span>
                    <vue-bootstrap-typeahead
                      size="sm"
                      v-model="text"
                      :data="dishesTypes"
                      :serializer="(s) => s.name"
                      @hit="selectedDish = $event"
                      style="max-width: 300px; margin: 0 auto;"
                    >
                      <template slot="append">
                        <b-button variant="success"
                          ><b-icon icon="plus-circle"></b-icon
                        ></b-button> </template
                    ></vue-bootstrap-typeahead>
                    {{ selectedDish }}
                  </b-card>
                </b-card-group>
                <p class="mt-2 menu-price">
                  Precio del menú: <span v-if="!editMode">{{ menuPrice }}</span
                  ><b-form-input
                    v-else
                    class="c-inline"
                    v-model="menuPrice"
                    placeholder="Enter your name"
                  ></b-form-input>
                  <b-button
                    v-if="!editMode"
                    class="mb-2 ml-2"
                    size="sm"
                    variant="primary"
                    @click="editMode = true"
                  >
                    <b-icon icon="pencil"></b-icon>
                  </b-button>
                  <b-button
                    v-if="editMode"
                    class="mb-2 ml-2"
                    size="sm"
                    variant="success"
                    @click="editMode = false"
                  >
                    <b-icon icon="check-box"></b-icon>
                  </b-button>
                </p>
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
import api from "@/services/api";
import { mapGetters } from "vuex";
import VueBootstrapTypeahead from "vue-bootstrap-typeahead";
export default {
  components: {
    contentTitle,
    VueBootstrapTypeahead,
  },
  data() {
    return {
      menuPrice: "S/.10",
      selectedTypes: [],
      dishesTypes: [],
      editMode: false,
      text: "",
      selectedDish: null,
    };
  },
  mounted() {
    this.initialData();
  },
  methods: {
    async initialData() {
      //get dishes types
      this.$store.commit("showLoadingScreen");
      try {
        this.dishesTypes = (await api.getDishesTypes()).data.payload;
        for (const dishType of this.dishesTypes) {
          if (dishType.isMenu) this.selectedTypes.push(dishType._id);
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.$store.commit("showLoadingScreen", false);
      }
    },
    getDishType(typeId) {
      return this.dishesTypes.find((type) => type._id == typeId).name;
    },
    async updateDishTypeToMenu(dishTypeId) {
      this.$store.commit("showLoadingScreen");
      try {
        let dishTypeIndex = this.dishesTypes.findIndex(
          (type) => type._id == dishTypeId
        );
        this.dishesTypes[dishTypeIndex].isMenu = !this.dishesTypes[
          dishTypeIndex
        ].isMenu;
        await api.updateDishType(dishTypeId, {
          isMenu: this.dishesTypes[dishTypeIndex].isMenu,
        });
      } catch (error) {
        console.log(error);
      } finally {
        this.$store.commit("showLoadingScreen", false);
      }
    },
    deleteItem() {
      console.log("eliminando item");
    },
  },
  computed: {
    ...mapGetters(["getDishesByType"]),
  },
};
</script>

<style lang="scss" scoped>
.card-max-width {
  max-width: 800px;
}
.menu-price {
  padding: 6px;
  // border-radius: 6px;
  // border: 1px solid #007bff;
  font-size: 1.3rem;
  span {
    font-size: 1.9rem;
    font-weight: bold;
  }
}
.c-inline {
  display: inline;
  max-width: 150px;
}
.c-clickeable {
  cursor: pointer;
}
</style>
