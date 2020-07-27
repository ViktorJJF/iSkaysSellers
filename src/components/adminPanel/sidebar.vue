<template>
  <aside id="main-sidebar" class="dt-sidebar">
    <div class="dt-sidebar__container">
      <!-- Sidebar Navigation -->
      <ul class="dt-side-nav">
        <!-- Menu Header -->
        <li class="dt-side-nav__item dt-side-nav__header">
          <span class="dt-side-nav__text">Opciones</span>
        </li>
        <!-- /menu header -->
        <!-- Menu Header -->
        <li class="dt-side-nav__item" v-for="item in items" :key="item.id">
          <router-link :to="item.to" class="dt-side-nav__link">
            <i class="icon icon-layout icon-fw icon-lg"></i>
            <span class="dt-side-nav__text">{{item.title}}</span>
          </router-link>
        </li>
      </ul>
      <!-- /sidebar navigation -->
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      items: [
        {
          id: 1,
          title: "Dashboard",
          to: { name: "dashboard" },
          icon: "ti-dashboard",
        },
        {
          id: 2,
          title: "Clientes por atender",
          to: { name: "clients" },
          icon: "ti-dashboard",
        },
        {
          id: 3,
          title: "Chats",
          to: { name: "chat" },
          icon: "ti-dashboard",
        },
        {
          id: 4,
          title: "Catálogo",
          to: { name: "catalog" },
          icon: "fa fa-table",
        },
      ],
    };
  },
  methods: {
    getActiveIndex(index) {
      this.activeIndex = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar-font {
  font-size: 18px;
}
</style>
