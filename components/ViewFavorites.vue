<template>
  <v-app id="inspire">
   <Header @drawerEvent="drawer = !drawer" />
   <SideBar :drawer="drawer" />

    <v-main>
      <v-container
        class="py-8 px-6"
        fluid
      >
       <v-row>
        <v-col lg="9">
              <v-data-table
     caption="Recent Favorite Orders"
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  >
  <template v-slot:item.action>
    <v-btn color="success" class="mr-0" >View</v-btn>
  </template>
  </v-data-table>
        </v-col>
     </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from '~/components/Header.vue';
import SideBar from '~/components/SideBar.vue';

  export default {
    layout: "adminlayout",
     data(){
            return{
        headers: [
          {
            text: 'Catagories',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Total Orders', value: 'total' },
          { text: 'Action', value: 'action' },
        ],
        desserts: [
          {
            name: 'Cars',
            total: 15,
            
          },
          {
            name: 'Houses',
            total: 23,
          },
          {
            name: 'Axions',
            total: 40,
          },
          {
            name: 'Shop Items',
            total: 305,
          },
          {
            name: 'Land Lease',
            total: 10,
            
          },
          
        ],
            };
        },
    components: { Header, SideBar}
}
</script>