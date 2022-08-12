<template>
  <div>
    <DesktopNav />
    <v-container v-if="house">
      <v-row justify="center">
        <v-col cols="6" md="6">
          <h2 class="text-center text-md-h4 font-weight-bold">
            {{ house.name }}
          </h2>
          <div class="mt-2 text-center">
            <v-rating
              readonly
              half-increments
              class="mb-2"
              color="yellow darken-2"
              background-color="grey lighten-1"
              :value="house.ratings"
              dense
              size="20"
            ></v-rating>
            <v-chip
              small
              label
              outlined
              class="mr-1"
              v-for="(t, i) in house.tags"
              :key="`prod${house.id}-${i}`"
            >
              {{ t }}
            </v-chip>
          </div>
          <br />
          <v-img
            width="100%"
            class="el rounded-lg"
            height="50vh"
            :src="house.image"
          ></v-img>
          <p class="mt-5 mb-7">
            {{ house.description }}
          </p>
          <v-btn
            @click="$store.commit('cart/AddToCart', house)"
            min-height="45"
            min-width="170"
            class="text-capitalize"
            color="primary"
            >Add To Cart</v-btn
          >
        </v-col>
         <v-col cols="6" md="6">
          <p class="mt-15 mb-7">
            {{ house.description }}
          </p>
         
        </v-col>
      </v-row>
    </v-container>
    <br /><br />
   
  </div>
</template>

<script>
export default {
  async created() {
    let d = await this.$content("houses")
      .where({ id: parseInt(this.$route.params.id) })
      .limit(1)
      .fetch();
    this.house = d[0];
  },
  data() {
    return {
      house: null,
    };
  },
};
</script>

<style></style>
