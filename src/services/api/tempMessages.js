import axios from "axios";
export default {
  list() {
    return axios.get("/api/temp-messages");
  },
  update(id, payload) {
    return axios.put(`/api/temp-messages/${id}`, payload);
  },
  create(payload) {
    return axios.post("/api/temp-messages", payload);
  },
  delete(id) {
    return axios.delete(`/api/temp-messages/${id}`);
  },
};
