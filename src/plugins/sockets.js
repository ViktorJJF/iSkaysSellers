import store from "../store";
import io from "socket.io-client";
const socket = io("http://localhost:3000");

socket.on("connect", () => {
  console.log("SE CONECTO");
});

socket.on("messages", (msg) => {
  let activeChatId = store.state.chatsModule.activeChat
    ? store.state.chatsModule.activeChat._id
    : null;
  if (msg.chatId == activeChatId) store.commit("messagesModule/create", msg);
});

socket.on("clientsAttend", (tempMessage) => {
  console.log("se recibio este cliente por atender: ", tempMessage);
  store.commit("tempMessagesModule/create", tempMessage);
});

export { socket };
