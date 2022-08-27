<template>
  <v-container>
    
      <v-spacer></v-spacer>
 <h1 class="text-md-h4 text-h6">Check these out 🔥</h1><v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
      <br>
      <br>
<br>
            <v-row >
              <template v-for="(p, i) in filteredAxions">
                <v-fade-transition>
                  <v-col cols="12" sm="6" md="6" lg="4" :key="i">
                    
                        <v-hover
                        v-slot="{ hover }"
                        open-delay="200"
                      >
                    <v-card 
                       :elevation="hover ? 16 : 3"
                 :class="{ 'on-hover': hover }"
                     class="mx-auto"
                     height="430"
                     max-width="350"
                    nuxt :to="`/axions/${p.id}`"
                     color="surface" 
                     width="300"
                    
                    >
                      <v-img :src="p.image_url" height="150" wid="300">
                        <template #placeholder>
                          <v-row class="fill-height" justify="center" align="center">
                            <v-progress-circular width="2" size="100" color="primary" indeterminate>
                            </v-progress-circular>
                          </v-row>
                        </template>
                      </v-img>
                      <v-card-title class="text-md-body-1 mt-5 font-weight-bold">
                          <h3>{{p.axions_type}}</h3>
                      </v-card-title>
                      <v-card-text class="primary--text ">
                        <h3 class="font-weight-bold" color="green">Amount : ET BIRR {{ p.axions_amount }}</h3>
                      </v-card-text>
                      <v-card-text class="primary--text ">
                        <h3 class="font-weight-bold" color="green">Sale Price : ET BIRR {{ p.selling_price }}</h3>
                      </v-card-text>
                      <v-card-text class="primary--text ">
                        <h3 class="font-weight-bold" color="green">See More...</h3>
                      </v-card-text>
                      <v-card-text>

                      <v-btn
                          nuxt :to="`/axions/${p.id}`"
                          class="text-capitalize"
                          color="primary"
                          >Buy Axion</v-btn>

                      </v-card-text>
                      <!-- <v-card-text>
                        <v-chip x-small label outlined class="mr-1" v-for="(t, i) in p.tags" :key="`prod${p.id}-${i}`">
                          {{ t }}
                        </v-chip>
                      </v-card-text> -->
                    </v-card>
                       </v-hover>
                  </v-col>
                </v-fade-transition>
              </template>
            </v-row>
      </v-container>
</template>

<script>
export default {
 
  data() {
    return {
       axions: [],
      search: '',
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
      computed: {
    filteredAxions() {
      if (!this.axions || !this.search) return this.axions;
      return this.axions.filter((p) => {
        const s = this.search.toLowerCase();
        const n = p.axions_type.toLowerCase();
        const price = p.axions_amount.toString();
        const sprice = p.selling_price?.toString() || "";
        
        return (
          n.includes(s) ||
          price.includes(s) ||
          sprice.includes(s)
       
        );
      });
    },
  },
};
</script>

<style lang="sass" scoped>
.v-card.on-hover.theme--dark
  background-color: rgba(#FFF, 0.8)
  >.v-card__text
    color: #000
</style>

