<template>
  <v-app
    dark
    :style="{ backgroundColor: $vuetify.theme.dark ? '#0a0514' : 'white' }"
  >
  <v-app-bar app>
    <DesktopNav />
  </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
    <v-footer>
       <Footer />
        <ScrollTop />
    </v-footer>
  </v-app>
</template>

<script>
export default {
  head: {
    title: "Ethiopian Stock Market",
    titleTemplate:"%s | የኢትዮጵያ ስቶክ ማርኬት",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Bank Share Sales,Bank Stock,Ethiopian Stock Market,Ethiopian Security Exchange,Bank Share, Bank Axion,ባንክ አክሲዮን,አክሲዮን ሽያጭ,አክሲዮን ግዥ",
      },
      {
        hid: "keywords",
        name: "keywords",
        content: "Bank, Axions,Stoks",
      },

      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

 
};
</script>
