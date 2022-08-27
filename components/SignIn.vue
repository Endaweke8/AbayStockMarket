
<template>
        
            <div class="deco">
                <v-container grid-list-xs >   
            <v-row justify="center">
                 <v-card class="text-center mx-15 my-5 px-15" width="600">
                <v-card-title class="text-h5">
                    Sign In
                </v-card-title>
                <v-card-text>
          
                    <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        outlined
                        required
                      ></v-text-field>
                     <v-text-field
                          v-model="password"
                          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                          :rules="[rules.required, rules.min]"
                          :type="show1 ? 'text' : 'password'"
                          name="input-10-1"
                          label="Your Password"
                          hint="At least 8 characters"
                          counter
                          @click:append="show1 = !show1"
                          outlined
                    ></v-text-field>
                    
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="validate()" color="success">Login</v-btn>
                </v-card-actions>
                 <v-divider></v-divider>
                 <v-card-actions>
                    <v-spacer></v-spacer>
                    <p>Create An Account     </p><v-spacer></v-spacer>
                    <v-btn nuxt to="/signup" color="success">SignUp</v-btn>
                </v-card-actions>
            </v-card>
            </v-row>
     </v-container>
     <br>
     <br>
    <br>
     <br>
     <AxionSlider />
</div>
</template>

<script>

export default {
   data() {
    return {
       show1:false,
        users:[],
        password: '',
        rules: {
          min: v => v.length >= 8 || 'Min 8 characters',
        }, 
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    };
  },
    methods: {
        validate() {
            email:this.email,
            this.$apollo.query({
                query: require('~/apollo/queries/fetchUsers'),
            }).then(rs => {
             
                if (this.email==='endexu@gmail.com' && this.password==='12345678'){
                    this.$router.push('/admin')
                }
                else{
                    console.log('You can not login')
                }
                console.log(rs);
            }).catch(error => {
                console.log(error);
            });
        },
        
        },
}
</script>
<style scoped>

</style>