import api from "@/services/api/messages";
import { buildSuccess, handleError } from "@/utils/utils.js";

const module = {
  namespaced: true,
  state: {
    user: {
      _id: "5f05004eb089d31d606b5a0a",
      first_name: "Donnie Joel",
      last_name: "Paxi Palacios",
      profile_pic:
        "https://scontent.flim6-2.fna.fbcdn.net/v/t1.0-9/92703963_10206987169034519_3884194403312467968_o.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_eui2=AeHUdwk0Tzgzs0irIAQtoAMeLldV5H0tK6EuV1XkfS0roeRjtn5ZBA_1NbxNuJKOKEdshNaibhiisExpbXACDsQI&_nc_ohc=FyIHqZTOVyAAX99pzJW&_nc_ht=scontent.flim6-2.fna&oh=543d0b79d643009c05dd018f8ed277e0&oe=5F410D04",
    },
    token: "",
  },
  actions: {
    list({ commit, state }) {
      return new Promise((resolve, reject) => {
        if (state.messages.length > 0) resolve(state.messages);
        else {
          api
            .list()
            .then((response) => {
              commit("list", response.data.payload);
              resolve(response.data.payload);
            })
            .catch((error) => {
              console.log("se produjo un error");
              handleError(error, commit, reject);
            });
        }
      });
    },
    create({ commit }, data) {
      return new Promise((resolve, reject) => {
        api
          .create(data)
          .then((res) => {
            let data = res.data.payload;
            // commit("loadingModule/showLoading", true, { root: true });
            // buildSuccess("Registro guardado con éxito", commit, resolve);
            commit("create", data);
            resolve();
          })
          .catch((error) => {
            handleError(error, commit, reject);
          });
      });
    },
    update({ commit }, { id, data }) {
      return new Promise((resolve, reject) => {
        api
          .update(id, data)
          .then((res) => {
            let data = res.data.payload;
            commit("loadingModule/showLoading", true, { root: true });
            buildSuccess("Registro guardado con éxito", commit, resolve);
            commit("update", {
              id,
              data,
            });
            resolve();
          })
          .catch((error) => {
            handleError(error, commit, reject);
          });
      });
    },
    delete({ commit }, id) {
      return new Promise((resolve, reject) => {
        api
          .delete(id)
          .then(() => {
            commit("loadingModule/showLoading", true, { root: true });
            buildSuccess("Registro eliminado con éxito", commit, resolve);
            commit("delete", id);
            resolve();
          })
          .catch((error) => {
            handleError(error, commit, reject);
          });
      });
    },
  },
  mutations: {
    list(state, data) {
      state.messages = data;
    },
    create(state, data) {
      state.messages.push(data);
    },
    update(state, { id, data }) {
      let indexToUpdate = state.messages.findIndex(
        (member) => member._id == id
      );
      state.messages.splice(indexToUpdate, 1, {
        ...data,
      });
    },
    delete(state, id) {
      let indexToDelete = state.messages.findIndex(
        (member) => member._id == id
      );
      state.messages.splice(indexToDelete, 1);
    },
  },
  getters: {
    fullname: (state) => {
      return state.user.first_name + " " + state.user.last_name;
    },
    sellerId: (state) => state.user._id,
  },
};

export default module;
