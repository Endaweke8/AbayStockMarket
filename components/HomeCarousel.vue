<template>
  <v-container>
    <div class="home">
      <v-carousel class="mt-1 ml-5 mb-15 mr-5" cycle height="100vh" width="100vh" hide-delimiter-background>
        <template #prev="{ attrs, on }">
          <v-btn v-bind="attrs" v-on="on" color="transparent" fab depressed>
            <v-icon size="20">mdi-arrow-left</v-icon>
          </v-btn>
        </template>
        <template #next="{ attrs, on }">
          <v-btn v-bind="attrs" v-on="on" color="transparent" fab depressed>
            <v-icon size="20">mdi-arrow-right</v-icon>
          </v-btn>
        </template>
        <template #placeholder>
          <v-row class="fill-height" justify="center" align="center">
            <v-progress-circular width="2" size="150" color="primary" indeterminate></v-progress-circular>
          </v-row>
        </template>
        <v-carousel-item v-for="(p, i) in axions" :key="i">
          <v-img height="100vh" :src="p.image_url" >
            <v-container class="fill-height">
              <v-row dense align="center">
                <v-col md="7">
                  <div class="pa-md-10 pa-5 rounded-lg black--text text-center text-md-left"
                    style="background-color: rgba(255, 255, 255, 0.8)">
                    <h2 class="text-md-h3 text-h5">
                      {{ p.axions_type }}
                    </h2>
                    <h3 class="text-md-h5 text-subtitle-1 primary--text mt-5">
                     Axion Amount {{ p.axions_amount }}.00 Birr
                    </h3>
                    <h3 class="text-md-h5 text-subtitle-1 primary--text mt-5">
                     Selling Price {{ p.selling_price }}.00 Birr
                    </h3>
                    <p class="text-md-body-2 mb-7">{{ p.axions_description }}</p>
                    <v-btn depressed nuxt :to="`/axions/${p.id}`" color="primary" class="text-capitalize"
                      min-height="40">Check It Out</v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-img>
        </v-carousel-item>
      </v-carousel>
    </div>
  </v-container>
</template>

<script>
export default {
   data() {
    return {
       axions: [],
      search: null,
    };
  },

   mounted() {
        this.getData()
    },
    methods: {
        getData() {
            this.$apollo.query({
                query: require('~/apollo/queries/fetchAxions'),
            }).then(rs => {
                this.axions = rs.data.axions
                console.log(rs);
            }).catch(error => {
                console.log(error);
            });
        },
        
        },
};
</script>

<style scoped>
.home {
  margin-top: 0;
  margin-right: 90px;
  margin-left: 80px;
}
</style>
