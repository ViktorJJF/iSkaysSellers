import axios from "axios";
export default {
  list(query) {
    return axios.get("/api/messages", { params: query });
  },
  update(id, payload) {
    return axios.put(`/api/messages/${id}`, payload);
  },
  create(payload) {
    return axios.post("/api/messages", payload);
  },
  delete(id) {
    return axios.delete(`/api/messages/${id}`);
  },
  sendFacebookMessage(fbId, text) {
    return axios.post("/api/sendmessage", { fbId, text });
  },
};
