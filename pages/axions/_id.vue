<template>
  <div>
    <DesktopNav />
    <v-container v-if="axions">
      <v-row justify="center" v-for="item in axions" :key="item.id">
        <v-col cols="11" md="7" >
          <h2 class="text-center text-md-h4 font-weight-bold">
            {{ item.axions_type }}
          </h2>
          <br />
          <v-img
            width="100%"
            class="el rounded-lg"
            height="50vh"
            :src="item.image_url"
          ></v-img>
          <h2 class="mt-5 mb-7">
           Axion Amount : {{ item.axions_amount }}.00  Birr
          </h2>
          <h2 class="mt-5 mb-7">
           Selling Price : {{ item.selling_price }}.00  Birr
          </h2>
          <h2 class="mt-5 mb-7">
         {{ item.axions_description }}
          </h2>
          <v-btn
            nuxt to="/orders"
            min-height="45"
            min-width="170"
            class="text-capitalize"
            color="primary"
            >Buy Axion</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
    <br /><br />
   
  </div>
</template>

<script>
import axions from '~/apollo/queries/fetchAxionById'
export default {
  apollo: {
    axions: {
      query: axions,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id }
      },
      
    }
  },
  head() {
    return {
      title: 'Articles by Author'
    }
  }
}
</script>

<style></style>
