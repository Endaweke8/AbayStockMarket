 <template>
  <v-row no-gutters>
    <v-col cols="12" lg="4" md="6" order="first">
      <v-card tile flat rounded="lg" class="pa-md-10  text-center grey lighten-2 lighten-3  abcd " outlined
        height="400px">

        <div>
          <v-btn nuxt to="/contact" text>
            <h1>Contact Us</h1>
          </v-btn>
          <br /><br />

          <h4>አድራሻ መገናኛ</h4>
          <h4>ደራርቱ ሕንፃ 2ኛ ፎቅ</h4>
          <h4>ቢሮ ቁጥር 226</h4>

          <br>
          <p>
            <v-icon color="indigo">
              mdi-phone
            </v-icon>
            0911248597
          </p>
          <p>
            <v-icon color="indigo">
              mdi-phone
            </v-icon>
            0940599595
          </p>
          <p> </p>
          <br>
          <div class="text-center">
            <v-btn color="primary" class="mr-2" v-for="(b, i) in sm" :key="`sm${i}`" fab depressed>
              <v-icon>{{ b.icon }}</v-icon>
            </v-btn>
          </div>
        </div>

      </v-card>
    </v-col>

    <v-col cols="12" lg="4" md="6" order="last">
      <v-card ile flat rounded="lg" class="pa-md-10  text-center grey lighten-2 lighten-3  abcd " outlined
        height="400px">

        <div>
          <v-btn nuxt to="/about" text>
            <h1>About</h1>
          </v-btn>
          <br /><br />
          <v-btn nuxt to="/axions" text>
            <h1>Stokes</h1>
          </v-btn>
          <br /><br />
          <h1 class="text-md-h6 font-weight-bold bg-stone-300">አባይ እንጅነሪንግ አማ</h1>
          <h3 class="text-md-body-2 mt-5"> አባይ ኃ/የተወሰነ ጠቅላላ የድለላ ስራ</h3>
          <br>
          <br>
        </div>
        <br />
      </v-card>
    </v-col>
    <v-col cols="12" lg="4" md="6" order="last">
      <v-card ile flat rounded="lg" class="pa-md-10  text-center grey lighten-2 lighten-3  abcd " outlined
        height="400px">

        <div>
          <v-btn nuxt to="/" text>
            <h1>Services</h1>
          </v-btn>
          <br /><br />
          <h4>የአክሲዮን ድርሻዎትን መግዛትና መሸጥ</h4>
          <br>
          <h4>በአክሲዮን ግዥና ሽያጭ ዙሪያ ማማከር</h4>
          <br>
          <h4>ስለአክሲዮን ገበያ ትክክለኛ መረጃዎችን</h4>
          <h4>መስጠት</h4>
          <br>
          <h4>ጉዳይ ማስፈጸም </h4>

          <br>
          <br>

        </div>
        <br />
      </v-card>
    </v-col>
  </v-row>

</template>

<script>
export default {
  data() {
    return {
      sm: [
        { icon: "mdi-facebook", link: "https://www.facebook.com/abayaxionmarket" },
        { icon: "mdi-twitter", link: "https://t.me/abayaxionmarket" },
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

h4 {
  padding-left: 0;
}
</style>