<template>
  <div>
    <DesktopNav />
    <v-container v-if="car">
      <v-row justify="center">
        <v-col cols="11" md="7">
          <h2 class="text-center text-md-h4 font-weight-bold">
            {{ car.name }}
          </h2>
          <div class="mt-2 text-center">
            <v-rating
              readonly
              half-increments
              class="mb-2"
              color="yellow darken-2"
              background-color="grey lighten-1"
              :value="car.ratings"
              dense
              size="20"
            ></v-rating>
            <v-chip
              small
              label
              outlined
              class="mr-1"
              v-for="(t, i) in car.tags"
              :key="`prod${car.id}-${i}`"
            >
              {{ t }}
            </v-chip>
          </div>
          <br />
          <v-img
            width="100%"
            class="el rounded-lg"
            height="50vh"
            :src="car.image"
          ></v-img>
          <p class="mt-5 mb-7">
            {{ car.description }}
          </p>
           <p class="mt-5 mb-7">
           Amount  : ET BIRR {{ car.amount }}
          </p>
           <p class="mt-5 mb-7">
            Amount : ET BIRR {{ car.salePrice }}
          </p>
          <v-btn
            @click="$store.commit('cart/AddToCart', car)"
            min-height="45"
            min-width="170"
            class="text-capitalize"
            color="primary"
            >Add To Cart</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
    <br /><br />
   
  </div>
</template>

<script>
export default {
  async created() {
    let d = await this.$content("productss")
      .where({ id: parseInt(this.$route.params.id) })
      .limit(1)
      .fetch();
    this.car = d[0];
  },
  data() {
    return {
      car: null,
    };
  },
};
</script>

<style></style>
