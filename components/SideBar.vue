<template>
   <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbncsOurHir1fiJZS6GwNHlhkNwRKiBOKkuA&usqp=CAU" class="ma-2 rounded-lg" >
        <div class="text-center mt-4" >
             <v-avatar
          class="mb-4"
          color="grey darken-1"
          size="64"
        >
        <v-img aspect-ratio="30" src="https://simg.nicepng.com/png/small/263-2635963_admin-png.png">

        </v-img>
        </v-avatar>

        <h2 class="white--text">Admin Panel</h2>
        </div>
      </v-img>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
         
        >
          <v-list-item-icon>
            <v-icon>mdi-ubuntu</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Dashbaord</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
         
        >
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
         
        >
          <v-list-item-icon>
            <v-icon>mdi-clipboard-list-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Product</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
         <v-list-item
         
        >
          <v-list-item-icon>
            <v-icon>mdi-clipboard-list</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Order</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
         <v-list-item
         
        >
          <v-list-item-icon>
            <v-icon>mdi-cog-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>System Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
         <v-list-item
         
        >
          <v-list-item-icon>
            <v-icon>mdi-plus</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              <nuxt-link to="/admin/addAxions">Add Axions</nuxt-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        props: ["drawer"],
        data: () => ({
        links: [
            ["mdi-ubuntu", "Dashbaord"],
            ["mdi-account", "Profile"],
            ["mdi-clipboard-list-outline", "Product"],
            ["mdi-clipboard-list", "Order"],
             ["mdi-cog-outline", "System Settings"],
        ],
    }),
    }
</script>

<style scoped>

</style>