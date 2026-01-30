<template>
    <div>
        <h1>Create Coffee</h1>
        <form v-on:submit.prevent="createCoffee">
            <p>Name: <input type="text" v-model="coffee.name"></p>
            <p>Price: <input type="number" v-model="coffee.price"></p>
            <p>Type: <input type="text" v-model="coffee.type" placeholder="hot/iced/frappe"></p>
            <p>Description: <input type="text" v-model="coffee.description"></p>
            <p><button type="submit">Create Coffee</button></p>
        </form>
    </div>
</template>
<script>
import CoffeesService from '../../services/CoffeesService'

export default {
    data () {
        return {
            coffee: {
                name: '',
                price: '',
                type: '',
                description: ''
            }
        }
    },
    methods: {
        async createCoffee () {
            try {
                await CoffeesService.post(this.coffee)
                this.$router.push({
                    name: 'coffees'
                })
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>
<style scoped>
</style>