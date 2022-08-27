
<template>
            <div class="deco">
                <v-container grid-list-xs >   
            <v-row justify="center">
                 <v-card class="text-center mx-15 my-5 px-15" width="600">
                <v-card-title class="text-h5">
                    Sell axions
                </v-card-title>
                <v-card-text>
                     <v-text-field 
                      name="full name"
                      label="full name"
                       v-model="name"
                      :rules="nameRules"
                      outlined>
                    </v-text-field>
                    <v-text-field 
                      name="axion type"
                      label="axion type"
                       v-model="axion_type"
                      :rules="axion_typeRules"
                      outlined required>
                    </v-text-field>
                    <v-text-field 
                      name="axion amount"
                      label="axion amount"
                       v-model="axion_amount"
                      :rules="axion_amountRules"
                      outlined required>
                    </v-text-field>
                      <v-text-field 
                      name="selling price"
                      label="Selling price"
                       v-model="selling_price"
                      :rules="sellingPrice_Rules"
                      outlined required>
                    </v-text-field>
                     <v-text-field 
                      name="phone"
                      label="Phone number"
                       v-model="phone_number"
                      :rules="phone_numberRules"
                      outlined required>
                    </v-text-field>
                    <v-text-field 
                      name="address"
                      label="Your address"
                      v-model="address"
                      :rules="addressRules"
                      outlined>
                    </v-text-field>
                    <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        outlined
                      ></v-text-field>               
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="insertOrders" color="success">Submit</v-btn>
                </v-card-actions> 
            </v-card>
            </v-row>
     </v-container>
     <br>
     <br>
<AxionSlider />
</div>
</template>
<script>
import mutationSellAxions from '~/apollo/mutations/sellAxion_mutations'
export default {
    layout: 'blank',
    data() {
        return {
         sellaxions:[],
         valid: true,
          name: '',
         nameRules: [
         v => !!v || 'Name is required',
      ],
       axion_type: '',
         axion_typeRules: [
         v => !!v || 'Axion type is required',
      ],
       axion_amount: '',
         axion_amountRules: [
         v => !!v || 'Axion amount is required',
      ],
        selling_price: '',
         sellingPrice_Rules: [
         v => !!v || 'Selling Price is required',
      ],
       phone_number: '',
         phone_numberRules: [
         v => !!v || 'Phone number is required',
      ],
    
      address: '',
         addressRules: [
         v => !!v || 'address  is required',
      ],
      email: '',
      emailRules: [
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
            
        }
    },
    methods: {
        insertOrders() {
            this.$apollo.mutate({
                mutation: mutationSellAxions.insert_sellaxions,
                variables: {
                    name: this.name,
                    axion_type:this.axion_type,
                    axion_amount:this.axion_amount,
                    selling_price:this.selling_price,
                    phone_number:this.phone_number,
                    address:this.address,
                    email: this.email,  
                }
            }).then(rs => {  
            this.sellaxions.push(rs.data.insert_sellaxions)
           this.$swal({
      toast: true,
      text: "Your request is successful",
      icon: "success",
      timer: 6000,
      timerProgressBar: true,
      showConfirmButton: false,
      position: "top-end",
               });


            console.log(rs)
            }).catch(error => {
                console.log(error)
            })
        }, 
        
    },
}
</script>
<style scoped>

</style>