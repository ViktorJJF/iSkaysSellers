import api from "@/services/api/tempMessages";
import { buildSuccess, handleError } from "@/utils/utils.js";

const module = {
  namespaced: true,
  state: {
    tempMessages: [],
    total: 0,
  },
  actions: {
    list({ commit, state }) {
      return new Promise((resolve, reject) => {
        if (state.tempMessages.length > 0) resolve(state.tempMessages);
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
            commit("loadingModule/showLoading", true, { root: true });
            buildSuccess("Registro guardado con éxito", commit, resolve);
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
      state.tempMessages = data;
    },
    create(state, data) {
      state.tempMessages.push(data);
    },
    update(state, { id, data }) {
      let indexToUpdate = state.tempMessages.findIndex((member) => member._id == id);
      state.tempMessages.splice(indexToUpdate, 1, {
        ...data,
      });
    },
    delete(state, id) {
      let indexToDelete = state.tempMessages.findIndex((member) => member._id == id);
      state.tempMessages.splice(indexToDelete, 1);
    },
  },
  getters: {},
};

export default module;
