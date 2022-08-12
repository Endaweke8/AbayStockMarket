<template>
  <div>
    <DesktopNav />
    <br><br>
    <v-app>
      <br><br>
      <v-card width="800" class="mx-auto mt-5 lighten-5">
        <v-card-title class="pb-0">
          <h1>Describe here what you want to buy</h1>
        </v-card-title>
        <br><br>
        <v-card-text>
          <v-form>
            <v-text-field label="userName" required prepend-icon="mdi-account" large color="teal darken-2" />
            <br>
            <v-text-field label="Address" />
            <br>
            <v-text-field label="Phone" required />
            <br>
            <v-textfield>
              <v-col class="d-flex" cols="12" sm="15">
                <v-select :items="items" filled label="your type" dense></v-select>
              </v-col>
            </v-textfield>
            <v-textarea clearable clear-icon="mdi-close-circle" label="Describe your product" value=""
              placeholder="የአክሲዮን መጠን 100,000፤ ዋጋ 150,000 ብር"></v-textarea>

          </v-form>
        </v-card-text>
        <br>
        <v-divider></v-divider>
        <br>
        <v-card-actions>
          <v-btn color="info">Send</v-btn>
        </v-card-actions>
      </v-card>
    </v-app>
    <ScrollTop />
  </div>
</template>

<script>
export default {
  data: () => ({
    items: ['Land', 'Car', 'Axion', 'House'],
  }),
}
</script>
<style>
.pb-0 {
  color: deepskyblue;
}
</style>