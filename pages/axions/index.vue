<template>
  <v-container>
    <div>
      <DesktopNav />
      <v-carousel class="mt-15 ml-5 mb-15 mr-5" cycle height="100vh" width="50%" hide-delimiter-background>
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
        <v-carousel-item v-for="(p, i) in axions" :key="i" nuxt :to="`/axions/${p.id}`">
          <v-img height="100vh" :src="p.image">
            <v-container class="fill-height">
              <v-row dense align="center">
                <v-col md="7">
                  <div class="pa-md-10 pa-5 rounded-lg black--text text-center text-md-left"
                    style="background-color: rgba(255, 255, 255, 0.8)">
                    <h2 class="text-md-h3 text-h5">
                      {{ p.name }}
                    </h2>
                    <p class="text-md-h5 text-subtitle-1 primary--text mt-5">
                      ET BIRR{{ p.amount }}
                    </p>
                    <p class="text-md-body-2 mb-7">{{ p.description }}</p>
                    <v-btn depressed nuxt :to="`/axions/${p.id}`" color="primary" class="text-capitalize"
                      min-height="40">Check It Out</v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-img>
        </v-carousel-item>
      </v-carousel>
      <v-container>
        <v-row dense>
          <v-col md="3">
            <div style="position: sticky; top: 92px">
              <v-text-field prepend-inner-icon="mdi-magnify" outlined v-model="search" clearable placeholder="Search">
              </v-text-field>
              <v-list v-if="$vuetify.breakpoint.mdAndUp" color="transparent" subheader>
                <v-subheader>Categories</v-subheader>
                <v-list-item link v-for="(c, i) in axions" :key="`category${i}`">
                  <v-list-item-avatar>
                    <v-img :src="c.image"></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ c.name }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </div>
          </v-col>
          <v-col md="9">
            <v-row>
              <template v-for="(p, i) in filteredAxions">
                <v-fade-transition>
                  <v-col cols="12" md="6" :key="i">
                    <v-card nuxt :to="`/axions/${p.id}`" color="surface" class="el ma-2 mb-5 mr-5">
                      <v-img :src="p.image" height="200">
                        <template #placeholder>
                          <v-row class="fill-height" justify="center" align="center">
                            <v-progress-circular width="2" size="100" color="primary" indeterminate>
                            </v-progress-circular>
                          </v-row>
                        </template>
                      </v-img>
                      <v-card-title class="text-md-body-1 font-weight-bold">{{
                          p.name
                      }}</v-card-title>
                      <v-card-subtitle class="primary--text pb-3">
                        <h3 class="font-weight-bold" color="green">Amount : ET BIRR {{ p.amount }}</h3>
                      </v-card-subtitle>
                      <v-card-subtitle class="primary--text pb-3">
                        <h3 class="font-weight-bold" color="green">Sale Price : ET BIRR {{ p.salePrice }}</h3>
                      </v-card-subtitle>
                      <v-card-text>
                        <v-chip x-small label outlined class="mr-1" v-for="(t, i) in p.tags" :key="`prod${p.id}-${i}`">
                          {{ t }}
                        </v-chip>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-fade-transition>
              </template>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <br /><br />

    </div>
  </v-container>
</template>

<script>
export default {
  async created() {
    this.axions = await this.$content("axions").fetch();

  },
  data() {
    return {
      axions: null,
      search: null,
    };
  },
  computed: {
    filteredAxions() {
      if (!this.axions || !this.search)
        return this.axions;
      return this.axions.filter((p) => {
        const s = this.search.toLowerCase();
        const n = p.name.toLowerCase();
        const price = p.amount.toString();
        const sprice = p.salePrice?.toString() || "";
        const r = p.ratings.toString();
        return (n.includes(s) ||
          price.includes(s) ||
          sprice.includes(s) ||
          r.includes(s));
      });
    },
  },

};
</script>

<style>
</style>
