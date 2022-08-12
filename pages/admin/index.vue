<template>
  <v-app id="inspire">
   <Header @drawerEvent="drawer = !drawer" />
   <SideBar :drawer="drawer" />

    <v-main>
      <v-container
        class="py-8 px-6"
        fluid
      >
        <Dashboard />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from '~/components/Header.vue';
import SideBar from '~/components/SideBar.vue';
import Dashboard from '../../components/Dashboard.vue';
  export default {
    layout: "adminlayout",
    data: () => ({
        cards: ["Today", "Yesterday"],
        drawer:null,
        links: [
            ["mdi-inbox-arrow-down", "Inbox"],
            ["mdi-send", "Send"],
            ["mdi-delete", "Trash"],
            ["mdi-alert-octagon", "Spam"],
        ],
    }),
    components: { Header, SideBar, Dashboard }
}
</script>