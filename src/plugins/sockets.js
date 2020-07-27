import store from "../store";
import io from "socket.io-client";
const socket = io("http://localhost:3000");

socket.on("messages", (msg) => {
  let activeChatId = store.state.chatsModule.activeChat
    ? store.state.chatsModule.activeChat._id
    : null;
  if (msg.chatId == activeChatId) store.commit("messagesModule/create", msg);
});

export { socket };
