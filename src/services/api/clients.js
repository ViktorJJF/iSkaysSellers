import axios from "axios";
export default {
  list() {
    return axios.get("/api/clients");
  },
  update(id, payload) {
    return axios.put(`/api/clients/${id}`, payload);
  },
  create(payload) {
    return axios.post("/api/clients", payload);
  },
  delete(id) {
    return axios.delete(`/api/clients/${id}`);
  },
};
