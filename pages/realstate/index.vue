<template>
  <div>
    <DesktopNav />
    <v-container>
      <v-row dense>
        <v-col md="3">
          <div style="position: sticky; top: 92px">
            <v-text-field
              prepend-inner-icon="mdi-magnify"
              outlined
              v-model="search"
              clearable
              placeholder="Search"
            ></v-text-field>
            <v-list
              v-if="$vuetify.breakpoint.mdAndUp"
              color="transparent"
              subheader
            >
              <v-subheader><h1>Categories</h1></v-subheader>
                <v-list-item>
                <v-list-item-content>
                  <v-list-item-title  class="mb-3">
                     <nuxt-link class="linkk"  to="/realstate">Real State</nuxt-link>
                  </v-list-item-title>
                   <v-list-item-title class="mb-3" >
                    <nuxt-link class="linkk" to="/condominium">Condominium</nuxt-link>
                  </v-list-item-title>
                   <v-list-item-title  class="mb-3">
                     <nuxt-link class="linkk" to="/villa">Villa</nuxt-link>
                  </v-list-item-title>
                   <v-list-item-title  class="mb-3">
                    <nuxt-link  class="linkk" to="/apartama">Apartama</nuxt-link>
                  </v-list-item-title>
                   <v-list-item-title  class="mb-3">
                   <nuxt-link class="linkk" to="/others">Others</nuxt-link>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </div>
        </v-col>
        <v-col md="9">
          <v-row>
            <template v-for="(p, i) in filteredRealstate">
              <v-fade-transition :key="`product${p.id}-${i}`">
                <v-col cols="12" md="6">
                  <v-card
                    nuxt
                    :to="`/realstate/${p.id}`"
                    color="surface"
                    class="el ma-2 mb-5 mr-5"
                  >
                    <v-img :src="p.image" height="300">
                      <template #placeholder>
                        <v-row
                          class="fill-height"
                          justify="center"
                          align="center"
                        >
                          <v-progress-circular
                            width="2"
                            size="100"
                            color="primary"
                            indeterminate
                          ></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                    <v-card-title class="text-md-body-1 font-weight-bold">{{
                      p.name
                    }}</v-card-title>
                    <v-card-subtitle class="primary--text pb-3">
                      ${{ p.price }}
                    </v-card-subtitle>
                    <v-card-text>
                      <v-chip
                        x-small
                        label
                        outlined
                        class="mr-1"
                        v-for="(t, i) in p.tags"
                        :key="`prod${p.id}-${i}`"
                      >
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
</template>

<script>
export default {
  async created() {
    this.realstate = await this.$content("realstate").fetch();
    this.houses = await this.$content("houses").fetch();
  },
  data() {
    return {
      realstate: null,
      houses: null,
      search: null,
    };
  },
  computed: {
    filteredRealstate() {
      if (!this.realstate || !this.search) return this.realstate;
      return this.realstate.filter((p) => {
        const s = this.search.toLowerCase();
        const n = p.name.toLowerCase();
        const price = p.price.toString();
        const sprice = p.salePrice?.toString() || "";
        const r = p.ratings.toString();
        return (
          n.includes(s) ||
          price.includes(s) ||
          sprice.includes(s) ||
          r.includes(s)
        );
      });
    },
  },
};
</script>

<style></style>
