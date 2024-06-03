<template>
    <div>
        <h1>City page</h1>
        <!-- {{ cities }}
        [ { "cityId": 1, "name": "Zawia", "createdOn": null }, { "cityId": 2, "name": "مصراته", "createdOn": null } ]
        
        create a table to display the cities name with index , please make the table with good style
         -->
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>City Name</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(city, index) in cities" :key="city.cityId">
                    <td>{{ index + 1 }}</td>
                    <td>{{ city.name }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'Cities',
    data () {
        return {
            cities: [],
            page: 1,
            pageSize: 10

        }
    },
    created () {

    },
    mounted () {
        this.GetCities(this.page, this.pageSize)
    },
    methods: {
        GetCities (page, pageSize) {
            axios.get('https://localhost:7090/Api/Admin/Cities?page=' + page + '&pageSize=' + pageSize)
                .then(response => {
                    this.cities = response.data
                })
                .catch(error => {
                    console.log(error)
                })
        }


    }
}
</script>

<style scoped>
    table {
        width: 100%;
        border-collapse: collapse;
    }

    th, td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th {
        background-color: #f2f2f2;
    }

    tr:nth-child(even) {
        background-color: #f2f2f2;
    }
    

</style>