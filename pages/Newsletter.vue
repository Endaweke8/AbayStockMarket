<template>
  <v-container class="text-center pa-md-10 pa-10 abcd blue-grey lighten-5">
    <v-card rounded="lg" class="pa-md-10 pa-5 text-center">
      <h2 class="text-md-h3">Contact Us</h2>
      <p class="text-md-h6 mt-5">Contact Us for more information</p>
      <br />
      <v-sheet color="transparent" class="mx-auto" max-width="400">
        <v-text-field v-model="name" color="dark" label="name" outlined></v-text-field>
        <v-text-field v-model="email" color="dark" label="Email" outlined></v-text-field>
        <v-text-field v-model="phone_number" color="dark" label="phone_number" outlined></v-text-field>
        <v-btn @click="submit" outlined min-height="50" block>Contact Us</v-btn>
      </v-sheet>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: null,
    };
  },
  methods: {
    async submit() {
      await this.$swal({
        title: "Thank You For Subscribing.",
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

<script setup>

</script>

<style>
</style>
