<template>
    <div class="dashboard">
        <v-subheader class="d-flex justify-space-between align-center" >
           <h1>Dashbaord</h1>
           <v-btn color="success" class="rounded-lg">
            View Orders
          </v-btn>
        </v-subheader>
        <br>
        <br>
        <ViewOrders />
        <br>
        <br>
        <ViewUsers />

        <!-- <v-row>
            <v-col lg="7" cols="12">
                  <v-alert
                    dense
                    text
                    type="success"
                    >
                    <strong>Login Successfuly</strong> Good Morning
                    </v-alert>
                <v-row>
                    <v-col lg="6" cols="12" v-for="(item,index) in activities" :key="index">
                        <v-card class="rounded-lg"  elevation="2" >
                         <v-dard-text class="d-flex justify-space-between align-center">
                             <div class="pa-5">
                                <strong class="pl-2">{{item.title}}</strong><br>
                                <small>Last two weeks</small>

                             </div>
                              <v-avatar :color="item.color" size="60">
                                    <span class="white--text">{{item.amount}}</span>
                                </v-avatar>
                         </v-dard-text>

                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
            <v-col lg="5" cols="12">
                <v-card>
                    <v-card-title>
                        Activities
                    </v-card-title>
                     <v-timeline
        align-top
        dense
      >
        <v-timeline-item
          color="pink"
          small
        >
          <strong>50 minutes ago</strong>
              <div class="text-caption">
                Mobile App
              </div>
        </v-timeline-item>

        <v-timeline-item
          color="pink"
          small
        >
           <strong>10 minutes ago</strong>
              <div class="text-caption">
                Mobile App
              </div>
        </v-timeline-item>

        <v-timeline-item
          color="teal lighten-3"
          small
        >
           <strong>44 minutes ago</strong>
              <div class="text-caption">
                Mobile App
              </div>
        </v-timeline-item>
      </v-timeline>
            </v-card>
            </v-col>
     </v-row>
     <v-row>
        <v-col lg="9" cols="12">
              <v-data-table
     caption="Car Recent Orders"
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
    
  >
  <template v-slot:item.action>
    <v-btn  color="success">
     View
    </v-btn>
  </template>
  </v-data-table>
        </v-col>
     </v-row>
    <br>
    <br>
    <v-row>
        <v-col lg="9" cols="12" >
              <v-data-table
     caption="Shop Item Recent Orders"
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
    
  >
  <template v-slot:item.action>
    <v-btn  color="success">
     View
    </v-btn>
  </template>
  </v-data-table>
        </v-col>
     </v-row> -->
    </div>
</template>

<script>
    export default {
        data(){
            return{
                activities:[
                    {
                        title:"Total Products",
                        color:'red',
                        amount:'4545'
                    },
                    {
                        title:"Total Category",
                        color:'purple',
                        amount:'23'
                    },
                    {
                        title:"Total Orders",
                        color:'indigo',
                        amount:'4545'
                    },
                    {
                        title:"Pending Orders",
                        color:'light-blue',
                        amount:'4545'
                    },

                ],
        headers: [
          {
            text: 'Catagories',
           
            sortable: false,
            value: 'name',
          },
          { text: 'Total Orders', value: 'total' },
          { text: 'Action', value: 'action' },
        ],
        desserts: [
          {
            name: 'Cars',
            total: 15,
            routes:"/admin/cars"
          },
          {
            name: 'Houses',
            total: 23,
            routes:"/admin/houses"
          },
          {
            name: 'Axions',
            total: 40,
            routes:"/admin/axions"
          },
          {
            name: 'Shop Items',
            total: 305,
            routes:"/admin/shopitems"
          },
          {
            name: 'Land Lease',
            total: 10,
            routes:"/admin/landlease"
            
          },
          
        ],
            };
        }
        
    }
</script>

<style scoped>

</style>