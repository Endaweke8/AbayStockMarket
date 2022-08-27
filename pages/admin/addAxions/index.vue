
<template>
   <v-app>
        <Header @drawerEvent="drawer = !drawer" />
       <SideBar :drawer="drawer" />
         <v-main>
  
               
               <v-container grid-list-xs  class="items-center">
        

                <v-btn @click="showAdd = !showAdd" color="success" absolute icon top right>
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
                <v-row justify="center">
                <v-col lg="8" cols="12" md="8">
                <v-flex v-if="showAdd">
                    <v-card>
                        <v-card-title>
                            Add Your Axions
                        </v-card-title>
                        <v-card-text class="px-15">
                            <v-text-field v-model="axion_form.axions_type" name="axions_type" label="Axion Type" outlined required>
                    </v-text-field>
                    <v-text-field v-model="axion_form.axions_amount" name="axions_amount" label="Axion Amount" outlined>
                    </v-text-field>
                    <v-text-field v-model="axion_form.selling_price" name="selling_price" label="Selling price" outlined>
                    </v-text-field>
                    <v-text-field v-model="axion_form.image_url" name="image_url" label="Axion Photo/logo" outlined>
                    </v-text-field >
                    <v-textarea v-model="axion_form.axions_description" name="axions_descriptions" label="Axions Descriptions" outlined>
                    </v-textarea>
                    <v-btn @click="saveAction" color="success">Save</v-btn>
                    <v-btn @click="showAdd = !showAdd" color="error">Cancel</v-btn>
                        </v-card-text>
                    </v-card>
                </v-flex>
               
               
              
         </v-col>
        </v-row>
     </v-container>      

         </v-main>

  </v-app>
</template>

<script>
import mutationAxions from '~/apollo/mutations/axions_mutations'
export default {
    layout: "adminlayout",
    data() {
        return {
            axions: [],
            axion_form: {
                axions_type: '',
                axions_amount: '',
                selling_price: '',
                image_url:'',
                axions_description:'',
            },
            axion_edit: {
                axions_type: '',
                axions_amount: '',
                selling_price: '',
                image_url:'',
                axions_description:'',
            },
            showAdd: false,
            showEdit: false,
            deleteForm: false,
        }
    },
    mounted() {
        this.getData()
    },
    methods: {
        getData() {
            this.$apollo.query({
                query: require('~/apollo/queries/fetchAxions'),
            }).then(rs => {
                this.axions = rs.data.axions
                console.log(rs);
            }).catch(error => {
                console.log(error);
            });
        },
        saveAction() {
            this.$apollo.mutate({
                mutation: mutationAxions.insert_axions,
                variables: {
                    axions_type: this.axion_form.axions_type,
                    axions_amount: this.axion_form.axions_amount,
                    selling_price: this.axion_form.selling_price,
                    image_url: this.axion_form.image_url,
                    axions_description: this.axion_form.axions_description,
                }
            }).then(rs => {
                this.showAdd = false
                this.axions.push(rs.data.insert_axions.returning[0])
                console.log(rs)
            }).catch(error => {
                console.log(error)
            })
        },
        getEdit(item) {
            this.showEdit = true;
            this.axion_edit = item;
        },
        updateAction() {
            this.$apollo
                .mutate({
                    mutation: mutationAxions.insert_axions,
                    variables: {
                         axions_type: this.axion_edit.axions_type,
                         axions_amount: this.axion_edit.axions_amount,
                         selling_price: this.axion_edit.selling_price,
                         image_url: this.axion_edit.image_url,
                         axions_description: this.axion_edit.axions_description,
                    }
                })
                .then(rs => {
                    this.showEdit = false;
                })
                .catch(er => {
                    console.log(er);
                });
        },
        openConfigDelte(item, index) {
            this.index = index,
                this.axion_edit = item,
                this.deleteForm = true

        },
        deleteAxion() {
            this.$apollo
                .mutate({
                    mutation: mutationAxions.delete_axions,
                    variables: {
                        id: this.axion_edit.id,
                    }
                })
                .then(rs => {
                    this.deleteForm = false;
                    this.axions.splice(this.index, 1)
                })
                .catch(er => {
                    console.log(er);
                });

        }
    },
}
</script>
<style scoped>
table, td, th {  
  border: 1px solid #ddd;
  text-align: left;
}
  

table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  padding: 15px;
}
</style>