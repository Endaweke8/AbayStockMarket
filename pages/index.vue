<template>
  <div>
    <DesktopNav />
    <HomeCarousel :sale_items="sale_items" />
    <br /><br />
    <v-container>
      <h1 class="text-md-h4 text-h6">Check these out 🔥</h1>
      <br />
      <CarsSlider :productss="productss" />
      <br /><br /><br />
      <HouseSlider :houses="houses" />
      <br /><br /><br />

      <ShopItemSlider :products="products" />
      <br /><br /><br />

      <AxionSlider :axions="axions" />
      <br /><br /><br />
      <Newsletter />
    </v-container>
    <br /><br />

  </div>
</template>

<script>
import HouseSlider from "../components/HouseSlider.vue";
import CarsSlider from "../components/CarsSlider.vue";
import ShopItemSlider from "../components/ShopItemSlider.vue";
import AxionSlider from "../components/AxionSlider.vue";
export default {
  async created() {
    this.sale_items = await this.$content("products")
      .where({ onSale: true })
      .fetch();
    this.productss = await this.$content("productss").fetch();
    this.products = await this.$content("products").fetch();
    this.houses = await this.$content("houses").fetch();
    this.axions = await this.$content("axions").fetch();
  },
  data() {
    return {
      houses: null,
      products: null,
      productss: null,
      sale_items: null,
      axions: null,
    };
  },
  components: { HouseSlider, CarsSlider, ShopItemSlider, AxionSlider }
};
</script>

<style>
</style>
