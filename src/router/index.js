import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login"),
  },
  {
    path: "/",
    name: "admin",
    redirect: {
      name: "dashboard",
    },
    component: () => import("@/layouts/admin.vue"),
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/adminPanel/dashboard"),
      },
      {
        path: "/clientes",
        name: "clients",
        component: () => import("@/views/adminPanel/clients"),
      },
      {
        path: "/chat",
        name: "chat",
        component: () => import("@/views/adminPanel/chat"),
        children: [
          {
            path: ":chatId",
            name: "chatWindow",
            component: () => import("@/components/adminPanel/chat/chatWindow"),
          },
        ],
      },
      {
        path: "/configuracion",
        name: "config",
        component: () => import("@/views/adminPanel/config"),
      },
      {
        path: "/catalogo",
        name: "catalog",
        component: () => import("@/views/adminPanel/catalog"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
