<template>
  <v-container class="text-center pa-md-10 pa-10 lighten-5">
    <v-card rounded="lg" class="pa-md-10 pa-5 text-center  
" light>
      <h2 class="text-md-h3">Add your Cars</h2>
      <!-- <p class="text-md-h6 mt-5"></p> -->
      <br />
      <v-sheet color="transparent" class="mx-auto" max-width="400">

        <v-row class="text-center">
          <v-col lg="6">
            <v-file-input v-model="files" color="deep-purple accent-4" counter label="Add Your Car Image" multiple
              placeholder="Select your files" prepend-icon="mdi-paperclip" outlined :show-size="1000">

              <template v-slot:selection="{ index, text }">
                <v-chip v-if="index < 2" color="deep-purple accent-4" dark label small>
                  {{ text }}
                </v-chip>

                <span v-else-if="index === 2" class="text-overline grey--text text--darken-3 mx-2">
                  +{{ files.length - 2 }} File(s)
                </span>
              </template>
            </v-file-input>
          </v-col>
          <v-col lg="6">
            <v-text-field v-model="Catagories" color="dark" label="Car Type" outlined></v-text-field>
          </v-col>
        </v-row>
        <v-row class="text-center">
          <v-col lg="6">
            <v-text-field v-model="a" color="dark" label="Car Model" outlined></v-text-field>
          </v-col>
          <v-col lg="6">
            <v-text-field v-model="a" color="dark" label="Manfactured Year" outlined></v-text-field>
          </v-col>
        </v-row>
        <v-row class="text-center">
          <v-text-field v-model="a" color="dark" label="commision" outlined></v-text-field>
        </v-row>
        <v-row>
          <v-col lg="6">
            <v-text-field v-model="email" color="dark" label="Full Name" outlined></v-text-field>
          </v-col>
          <v-col lg="6">
            <v-text-field v-model="email" color="dark" label="Address" outlined></v-text-field>
          </v-col>
        </v-row>
        <v-row text-center>
          <v-col lg="6">
            <v-text-field v-model="email" color="dark" label="Phone Number" outlined></v-text-field>
          </v-col>
          <v-col lg="6">
            <v-text-field v-model="email" color="dark" label="Email" outlined required></v-text-field>
          </v-col>
        </v-row>
        <v-btn @click="submit" outlined min-height="50" block>Add Your Cars</v-btn>
      </v-sheet>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      items: ['Yechinet', 'bus',
        'Aoutomobile',
        'Toyota', 'Bajaj'],
    };
  },
  methods: {
    async submit() {
      await this.$swal({
        title: "Thank You For your comment.",
        icon: "success",
        allowEscapeKey: false,
        allowOutsideClick: false,
        timer: 4000,
        timerProgressBar: true,
        text: "You will be notified when we have a deal or items on sale.",
        showConfirmButton: false,
      });
    },
  },
};
</script>
 
<style>
</style>
