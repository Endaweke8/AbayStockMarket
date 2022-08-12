<template>
  <v-app
    dark
    :style="{ backgroundColor: $vuetify.theme.dark ? '#0a0514' : 'white' }"
  >
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
export default {};
</script>
