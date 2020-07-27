import axios from "axios";
export default {
  list() {
    return axios.get("/api/chats");
  },
  update(id, payload) {
    return axios.put(`/api/chats/${id}`, payload);
  },
  create(payload) {
    return axios.post("/api/chats", payload);
  },
  delete(id) {
    return axios.delete(`/api/chats/${id}`);
  },
};
