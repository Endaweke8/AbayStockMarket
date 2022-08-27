
<template>
    <v-row class="mx-10">
    <v-col lg="12" cols="12" md="12">  
    <v-card>
   <v-card-title>
     Registered users
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
     caption="Recent Users"
    :headers="headers"
    :items="users"
    :items-per-page="5"
    :search="search"
    class="elevation-1"
  >
  <template v-slot:item.edit ="{item,index}">
    <v-btn @click="getEdit(item, index)" color="success" class="mr-0"  icon>
      <v-icon>mdi-pencil</v-icon>
      </v-btn>
  </template>
  <template v-slot:item.delete="{item,index}">
    <v-btn @click="openConfigDelte(item, index)" color="error" class="mr-0"  icon>
      <v-icon>mdi-delete</v-icon>
      </v-btn>
  </template>
  </v-data-table> 
  </v-card>   
        <v-dialog v-model="showEdit" persistent :overlay="false" max-width="500px" transition="dialog-transition">
            <v-card class="text-center">
                <v-card-title class="text-h5 grey lighten-2">
                    Edit Order
                </v-card-title>
                <v-card-text>
    
                    <v-text-field v-model="user_edit.name" label="Full Name" required>
                    </v-text-field>
                    <v-text-field v-model="user_edit.email" label="email" required>
                    </v-text-field>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="editUser" color="success">Save</v-btn>
                    <v-btn @click="showEdit = !showEdit" color="error">Cancel</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="deleteForm" persistent :overlay="false" max-width="400px" transition="dialog-transition">
            <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                    <h3>Are you sure to delete this user </h3>
                </v-card-title>
                <v-card-text>
                    <h3>User Id {{ user_edit.id }}</h3>
                    <h3>Full Name {{ user_edit.name }}</h3>
                    <h3>User's name   {{ user_edit.email }}</h3>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="deleteForm = !deleteForm" text color="secoundary">cancel</v-btn>
                    <v-btn @click="deleteUser" color="error">delete</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
         </v-col>
        </v-row>
</template>
<script>
import mutationUsers from '~/apollo/mutations/users_mutations'
export default {
    layout: 'blank',
    data() {
        return {
          search:'',
          headers: [
          {
            text: 'User Id',
            align: 'start',
            sortable: false,
            value: 'id',
          },
          { text: 'Full Name', value: 'name' },
          { text: 'Email', value: 'email' },
          { text: 'Edit', value: 'edit' },
          { text: 'Delete', value: 'delete' },
        ],
            users: [],
          
            user_edit: {
               
                name:'',
                email:'',
              
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
                query: require('~/apollo/queries/fetchUsers'),
            }).then(rs => {
                this.users = rs.data.users
                console.log(rs);
            }).catch(error => {
                console.log(error);
            });
        },
        getEdit(item,index) {
            this.index=index,
            this.showEdit = true;
            this.user_edit = item;
        },
        editUser() {
            this.$apollo
                .mutate({
                    mutation: mutationUsers.insert_users,
                    variables: {
 
                         name: this.user_edit.name,
                         email: this.user_edit.email,
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
                this.user_edit = item,
                this.deleteForm = true
        },
        deleteUser() {
            this.$apollo
                .mutate({
                    mutation: mutationUsers.delete_users,
                    variables: {
                        id: this.user_edit.id,
                    }
                })
                .then(rs => {
                    this.deleteForm = false;
                    this.users.splice(this.index, 1)
                })
                .catch(er => {
                    console.log(er);
                });

        }
    },
}
</script>
<style scoped>

</style>