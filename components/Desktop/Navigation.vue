<template>
  <v-tool-bar flat>
    <v-toolbar-items class="hidden-xs-only">
      <v-btn text>
        <nuxt-link class="link ml-15  black--text" to="/">Home</nuxt-link>
      </v-btn>
      <v-btn text>
        <nuxt-link class="link    black--text" to="/axions">Axions</nuxt-link>
      </v-btn>
      <v-btn text>
        <nuxt-link class="link   black--text" to="/houses">Houses</nuxt-link>
      </v-btn>
      <v-btn text>
        <nuxt-link class="link   black--text" to="/cars">Car&Machinary</nuxt-link>
      </v-btn>
      <v-btn text>
        <v-spacer width="20" />
        <v-toolbar-title class="text-md-h5 font-weight-bold pointer">
          <div class="text-center">
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn class="black--text links" v-bind="attrs" v-on="on">
                  AddProduct
                </v-btn>
              </template>
              <v-list>
                <v-list-item v-for="(item, index) in items" :key="index">
                  <v-list-item-title>
                    <nuxt-link :to="item.route" class="nuxtlink">{{ item.title }}</nuxt-link>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </v-toolbar-title>
        <v-spacer />
      </v-btn>
      <v-btn text>
        <nuxt-link class="link    black--text" to="/about">AboutUs</nuxt-link>
      </v-btn>
      <v-btn text>
        <nuxt-link class="link    black--text" to="/Newsletter">Contact</nuxt-link>
      </v-btn>
    </v-toolbar-items>

    <div class="text-center d-flex d-sm-none">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on">
            <v-app-bar-nav-icon v-on="on" class="d-flex d-sm-none" color="black"></v-app-bar-nav-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item class="responsiveMenu">
            <v-list-item-title class="res">
              <nuxt-link class="link ml-15  black--text" to="/">Home</nuxt-link>
            </v-list-item-title>
            <v-list-item-title class="res">
              <nuxt-link class="link    black--text" to="/axions">Axions</nuxt-link>
            </v-list-item-title>
            <v-list-item-title class="res">
              <nuxt-link class="link   black--text" to="/houses">Houses</nuxt-link>
            </v-list-item-title>
            <v-list-item-title class="res">
              <nuxt-link class="link   black--text" to="/cars">CarAndMachinary</nuxt-link>
            </v-list-item-title>
            <v-list-item-title class="res">
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn class="black--text links" v-bind="attrs" v-on="on">
                    AddProduct
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(item, index) in items" :key="index">
                    <v-list-item-title>
                      <nuxt-link :to="item.route" class="nuxtlink">{{ item.title }}</nuxt-link>
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-list-item-title>
            <v-list-item-title class="res">
              <nuxt-link class="link    black--text" to="/aboute">AboutUs</nuxt-link>
            </v-list-item-title>
            <v-list-item-title class="res">
              <nuxt-link class="link    black--text" to="/Newsletter">Contact</nuxt-link>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

  </v-tool-bar>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { icon: 'get_cars', title: "get_cars", route: "/cars_query" },
        { icon: 'cars', title: "cars", route: "/carss" },
        { icon: 'hous', title: "house", route: "/house" },
        { icon: 'place', title: "place", route: "/bota" },
        { icon: 'axion', title: "axion", route: "/axionss" },
        { icon: 'midi-plus', title: "add_your_favorite", route: "/add_your_favorite" },
      ],
    }
  },
}
</script>

<style scoped>
.responsiveMenu {
  display: block;
  margin: 10px;

}

.links {
  font-size: 15px;
  background-color: shades;
  background-repeat: no-repeat;
  border: none;
  font-weight: bold;
  text-decoration: none;
}

.res {
  margin: 5px;
  padding: 10px;
}

.nav {

  color: black;
}

.link {
  text-decoration: none;
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin: 5px;
}

/* .link:hover {
  background-color: #b0bdbd;
} */

img {
  background-color: rgb(220, 231, 231);
  border-radius: 50%;
}

.nuxtlink {
  text-decoration: none;
  font-weight: bolder;
  font-size: large;
}
</style>