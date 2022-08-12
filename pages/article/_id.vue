<template>
  <v-container class="text-center pa-md-10 pa-10 lighten-5">
    <div v-if="cars">
      <h1>this the selected car</h1>
      <div v-for="item in cars" :key="item.id">
        <h3>car_name: {{ item.car_name }}</h3>
        <p>car_brand: {{ item.car_brand }}</p>
        <p>car_model: {{ item.car_model }}</p>
        <p>car_type: {{ item.car_type }}</p>
        <p>
          <nuxt-link to="/">
            Home page
          </nuxt-link>
        </p>
      </div>
    </div>
  </v-container>
</template>

<script>
import cars from '~/apollo/queries/fetchArticle'
export default {
  apollo: {
    cars: {
      query: cars,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id }
      }
    }
  },
  head() {
    return {
      title: 'Articles by Author'
    }
  }
}
</script>
