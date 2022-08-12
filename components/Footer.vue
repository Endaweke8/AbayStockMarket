 <template>
  <v-card tile flat rounded="lg" class="pa-md-10 pa-5 text-center cyan lighten-5 abcd" width="100%">
    <h1 class="text-md-h6 font-weight-bold bg-stone-300">አባይ እንጅነሪንግ አማ</h1>
    <h3 class="text-md-body-2 mt-5"> አባይ ኃ/የተወሰነ ጠቅላላ የድለላ ስራ</h3>
    <br>
    <br>
    <div class="text-center">
      <v-btn color="primary" class="mr-2" v-for="(b, i) in sm" :key="`sm${i}`" fab depressed>
        <v-icon>{{ b.icon }}</v-icon>
      </v-btn>
    </div>
    <br />
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      sm: [
        { icon: "mdi-facebook", link: "#" },
        { icon: "mdi-twitter", link: "#" },
        { icon: "mdi-instagram", link: "#" },
        { icon: "mdi-youtube", link: "#" },
      ],
    };
  },
};
</script>

<style>
.abcd {
  font-size: larger;
}
</style>