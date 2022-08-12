<template>
    <v-container class="text-center pa-md-10 pa-10 lighten-5">
        <div>
            <h3>Welcome to cars Shope</h3>
            <br />
            <br />
            <v-layout row wrap>
                <v-btn @click="showAdd = !showAdd" color="success" absolute icon top right>
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
                <br />
                <br />
                <v-flex>
                    <v-text-field v-model="car_form.car_name" name="car_name" label="car name" outlined>
                    </v-text-field>
                    <v-text-field v-model="car_form.car_model" name="car_model" label="car model" outlined>
                    </v-text-field>
                    <v-text-field v-model="car_form.car_brand" name="car_brand" label="car brand" outlined>
                    </v-text-field>
                    <v-text-field v-model="car_form.car_type" name="car_type" label="car type" outlined>
                    </v-text-field>
                    <v-btn @click="saveAction" class="success">save</v-btn>
                    <v-btn @click="showAdd != showAdd" class="error">cancel</v-btn>
                    <br><br>
                </v-flex>
            </v-layout>
            <table>
                <thead>
                    <th>car_ID</th>
                    <th>car_brand</th>
                    <th>car_model</th>
                    <th>car_name</th>
                    <th>car_type</th>
                </thead>
                <tbody>
                    <tr v-for="item in cars" :key="item.ID">
                        <nuxt-link :to="`/article/${item.ID}`">{{ item.ID }}</nuxt-link>
                        <td>car_name: {{ item.car_name }}</td>
                        <td>car_brand: {{ item.car_brand }}</td>
                        <td>car_model: {{ item.car_model }}</td>
                        <td>car_type: {{ item.car_type }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </v-container>
</template>

<script>
import mutationCars from '~/apollo/mutations/cars_mutations'
export default {
    data() {
        return {
            cars: [],
            car_form: {
                car_name: "",
                car_brand: "",
                car_model: "",
                car_type: "",
            },
            showAdd: true,
        }
    },
    mounted() {
        this.getCars();
    },
    methods: {
        getCars() {
            this.$apollo.query({
                query: require('~/apollo/queries/fetchAuthor')
            }).then(res => {
                this.cars = res.data.cars;
                console.log(res)
            }).catch(error => {
                console.log(error)
            })
        },


        saveAction() {
            this.$apollo.mutate({
                mutation: mutationCars.insert_cars,
                variables: {
                    car_name: this.car_form.car_name,
                    car_brand: this.car_form.car_brand,
                    car_model: this.car_form.car_model,
                    car_type: this.car_form.car_type,
                }
            }).then(res => {
                console.log(res)
            }).catch(er => { console.log(er) })
        }
    },

}
</script>

