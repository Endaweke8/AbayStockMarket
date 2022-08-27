
<template>
            <div class="deco">
                <v-container grid-list-xs >   
            <v-row justify="center">
                 <v-card class="text-center mx-15 my-5 px-15" width="600">
                <v-card-title class="text-h5">
                    Message Us
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
                
                    <v-textarea 
                      name="Message"
                      label="Description"
                       v-model="message"
                      :rules="messageRules"
                      outlined required>
                    </v-textarea>             
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="insertMessages" color="success">Submit</v-btn>
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
import mutationMessages from '~/apollo/mutations/messages_mutations'
export default {
    layout: 'blank',
    data() {
        return {
         messages:[],
          name: '',
         nameRules: [
         v => !!v || 'Name is required',
      ],
       phone_number: '',
         phone_numberRules: [
         v => !!v || 'Phone number is required',
      ],
      address: '',
         addressRules: [
         v => !!v || 'Address  is required',
      ],
      email: '',
      emailRules: [
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      message: '',
         messageRules: [
         v => !!v || 'Message is required',
      ],
            
        }
    },
    methods: {
        insertMessages() {
            this.$apollo.mutate({
                mutation: mutationMessages.insert_messages,
                variables: {
                    name: this.name,
                    phone_number:this.phone_number,
                    address:this.address,
                    email: this.email, 
                    message:this.message, 
                }
            }).then(rs => {  
            this.messages.push(rs.data.insert_messages)
           this.$swal({
      toast: true,
      text: "Your message is sent successfuly",
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