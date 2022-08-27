<template>
  <div>
    <v-app-bar
      color="surface"
      height="100"
      elevation="3"
      flat
      class="el"
      :style="{
        padding: $vuetify.breakpoint.mdAndUp ? '0px 30px' : '',
      }"
      app
    >   
       <div class="ml-15 "  nuxt to="/">
         <img src="~/assets/cropped-Abay.png"    @click="$router.push('/')"
        class="text-md-h5 font-weight-bold pointer pl-5 d-none d-lg-flex"  width="100px" height="50px"/>
        <p class="d-none d-lg-flex">Abay Stoke Market</p>
       </div>
    
        <v-spacer />
        <v-list class="d-none d-md-flex d-lg-flex d-xl-none">
          <v-list-item class="responsiveMenu">
            <v-list-item-title class="res">
              <nuxt-link class="link black--text d-none d-sm-flex" to="/">Home</nuxt-link>
            </v-list-item-title>
            <v-spacer />
             <v-list-item-title class="res">
              <nuxt-link class="link black--text" to="/axions">BuyStocks</nuxt-link>
            </v-list-item-title>
            <v-spacer />
            <v-list-item-title class="res">
              <nuxt-link class="link black--text" to="/sellaxions">SellStocks</nuxt-link>
            </v-list-item-title>
            <v-list-item-title class="res">
              <nuxt-link class="link black--text" to="/favorites">AskStocks</nuxt-link>
            </v-list-item-title>
            <v-spacer />

             <v-list-item-title class="res">
              <nuxt-link class="link black--text" to="/about">AboutUs</nuxt-link>
            </v-list-item-title>
            <v-spacer />
            <v-list-item-title class="res">
              <nuxt-link class="link con black--text mr-2" to="/contactus" >ContactUs</nuxt-link>
            </v-list-item-title>
          </v-list-item>
        </v-list>

    <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-list>
          <v-list-item>
            <v-list-item-title class=""
              v-bind="attrs"
               v-on="on">
              <v-app-bar-nav-icon v-on="on" class="d-sm-flex d-md-none " color="black"></v-app-bar-nav-icon>
               </v-list-item-title>

          </v-list-item>
        </v-list>
      </template>
      <v-list>
        <v-list-item>
        <v-list-item-title >
          <nuxt-link class="link" to="/">
            Home</nuxt-link>
        </v-list-item-title>
        </v-list-item>
        <v-list-item>
        <v-list-item-title>
          <nuxt-link class="link" to="/axions">
            BuyStocks
          </nuxt-link>
        </v-list-item-title>
        </v-list-item>
        <v-list-item>
        <v-list-item-title>
          <nuxt-link class="link" to="/sellaxions">
            SellStocks
          </nuxt-link>
        </v-list-item-title>
        </v-list-item>
        <v-list-item>
        <v-list-item-title>
          <nuxt-link class="link" to="/favorites">
            AskStocks
          </nuxt-link>
        </v-list-item-title>
        </v-list-item>
        <v-list-item>
        <v-list-item-title >
          <nuxt-link class="link" to="/about">
            Aboutus</nuxt-link>
        </v-list-item-title>
        </v-list-item>
        <v-list-item>
        <v-list-item-title>
          <nuxt-link class="link" to="/contactus">
            ContactUs
          </nuxt-link>
        </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
       
         <v-spacer />
         <v-spacer />
        <v-spacer />

        <v-spacer />

         <v-list>
          <v-list-item class="responsiveMenu">
            <v-list-item-title class="res">
              <nuxt-link class="link black--text" to="/signin">Sign in</nuxt-link>
            </v-list-item-title>
            <v-spacer />
          </v-list-item>
        </v-list>
    </v-app-bar>
  </div>
</template>

<script>
export default {
    data(){
      return{
        
      };
    },
  
};
</script>
<style scoped>
.link{
  font-size: 18px;
  margin: 10px;
  color: black;
  text-decoration: none;
  padding: 10px;
}
.link:hover{
  background-color: rgb(205, 218, 213);
  font-size: 22px;
}
.con{
  margin-right: 20px;
}
</style>
