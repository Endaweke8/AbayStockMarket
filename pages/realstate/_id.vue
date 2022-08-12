<template>
  <div>
    <DesktopNav />
    <v-container v-if="realstate">
      <v-row justify="center">
        <v-col cols="6" md="6">
          <h2 class="text-center text-md-h4 font-weight-bold">
            {{ realstate.name }}
          </h2>
          <div class="mt-2 text-center">
            <v-rating
              readonly
              half-increments
              class="mb-2"
              color="yellow darken-2"
              background-color="grey lighten-1"
              :value="realstate.ratings"
              dense
              size="20"
            ></v-rating>
            <v-chip
              small
              label
              outlined
              class="mr-1"
              v-for="(t, i) in realstate.tags"
              :key="`prod${realstate.id}-${i}`"
            >
              {{ t }}
            </v-chip>
          </div>
          <br />
          <v-img
            width="100%"
            class="el rounded-lg"
            height="50vh"
            :src="realstate.image"
          ></v-img>
          <p class="mt-5 mb-7">
            {{ realstate.description }}
          </p>
          <v-btn
            @click="$store.commit('cart/AddToCart', realstate)"
            min-height="45"
            min-width="170"
            class="text-capitalize"
            color="primary"
            >Add To Cart</v-btn
          >
        </v-col>
         <v-col cols="6" md="6">
          <p class="mt-15 mb-7">
            {{ realstate.description }}
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
    let d = await this.$content("realstate")
      .where({ id: parseInt(this.$route.params.id) })
      .limit(1)
      .fetch();
    this.realstate = d[0];
  },
  data() {
    return {
      realstate: null,
    };
  },
};
</script>

<style></style>
