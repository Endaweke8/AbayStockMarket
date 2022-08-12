<template>
  <v-container class="text-center pa-md-10 pa-10">
    <div class="p-8">
      <h1 class="font-bold text-2xl mb-8">avelable Cars</h1>
      <div class="grid grid-cols-3 gap-8">
        <article
          v-for="car in cars"
          :key="car.id"
          class="flex flex-col items-start">
          <v-row class="text-center">
            <v-col lg="6">
              <h2 class="font-bold">{{ car.ID }}</h2>
            </v-col>
            <v-col lg="5">
              <p>Car Brand: {{ car.car_brand }}</p>
              <p>Car car_model: {{ car.car_model }}</p>
              <p>Car name: {{ car.car_name }}</p>
            </v-col>
          </v-row>
          <!-- <NuxtLink
          :to="`/character/${car.id}`"
          class="border rounded px-2 py-1 text-gray-800 border-gray-800 text-sm mt-2"
        >
          Read more
        </NuxtLink> -->
        </article>
      </div>
    </div>
  </v-container>
</template>

<script>
import gql from "graphql-tag";

export default {
  apollo: {
    cars: gql`
      query getCars {
        cars {
          ID
          car_brand
          car_model
          car_name
          car_type
          created_at
          updated_at
        }
      }
    `, 
  }
};
</script>
<style scoped>
p {
  font-weight: bolder;
  font-size: larger;
}
</style>
