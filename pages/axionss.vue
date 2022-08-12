<template>
  <v-container class="text-center pa-md-10 pa-10 lighten-5">
    <v-card rounded="lg" class="pa-md-10 pa-5 text-center">
      <h2 class="text-md-h3">Add your Axion</h2>
      <!-- <p class="text-md-h6 mt-5"></p> -->
      <br />
      <v-sheet color="transparent" class="mx-auto" max-width="400">
        <v-row>
          <v-col>
            <v-select :items="items" label="Axion Type" outlined></v-select>
          </v-col>
          <v-col>
            <v-text-field v-model="a" color="dark" :rules="nameRules" label="Location" outlined></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-text-field type="number" v-model="a" color="dark" label="amount" outlined></v-text-field>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field v-model="a" color="dark" label="Seling Price" outlined></v-text-field>
          </v-col>
          <v-col>
            <v-text-field v-model="a" color="dark" label="commision" outlined></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field v-model="email" color="dark" label="Full Name" outlined></v-text-field>
          </v-col>
          <v-col>
            <v-text-field v-model="email" color="dark" label="Address" outlined></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field v-model="email" color="dark" label="Phone Number" outlined></v-text-field>
          </v-col>
          <v-col>
            <v-text-field v-model="email" color="dark" label="Email" outlined required></v-text-field>
          </v-col>
        </v-row>
        <v-btn @click="submit" outlined min-height="50" block>Add Your Axion</v-btn>
      </v-sheet>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      items: [
        "Bank axions",
        "Insurance axions",
        "Real State axiona",
        "Scool axions",
        "Bussnes Center axions",
      ],
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
