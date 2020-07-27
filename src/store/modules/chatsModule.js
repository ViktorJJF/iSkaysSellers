import api from "@/services/api/chats";
import { buildSuccess, handleError } from "@/utils/utils.js";
// import { da } from "date-fns/locale";

const module = {
  namespaced: true,
  state: {
    activeChat: null,
    chats: [],
    total: 0,
  },
  actions: {
    setActiveChat({ commit, state }, chatId) {
      let data = state.chats.find((chat) => chat._id == chatId);
      commit("setActiveChat", data);
    },
    list({ commit, state }) {
      return new Promise((resolve, reject) => {
        if (state.chats.length > 0) resolve(state.chats);
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
    endAttention(state) {
      if (state.activeChat) state.activeChat.clientId.sellerId = null;
    },
    setActiveChat(state, data) {
      state.activeChat = data;
    },
    list(state, data) {
      state.chats = data;
    },
    create(state, data) {
      state.chats.push(data);
    },
    update(state, { id, data }) {
      let indexToUpdate = state.chats.findIndex((member) => member._id == id);
      state.chats.splice(indexToUpdate, 1, {
        ...data,
      });
    },
    delete(state, id) {
      let indexToDelete = state.chats.findIndex((member) => member._id == id);
      state.chats.splice(indexToDelete, 1);
    },
  },
  getters: {},
};

export default module;
