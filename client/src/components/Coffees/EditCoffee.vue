<template>
    <div>
        <h1>Edit Coffee</h1>
        <form v-on:submit.prevent="editCoffee">
            <p>Name: <input type="text" v-model="coffee.name"></p>
            <p>Price: <input type="number" v-model="coffee.price"></p>
            <p>Type: <input type="text" v-model="coffee.type"></p>
            <p>Description: <input type="text" v-model="coffee.description"></p>
            <p><button type="submit">Edit Coffee</button></p>
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
        async editCoffee () {
            try {
                await CoffeesService.put(this.coffee)
                this.$router.push({
                    name: 'coffees'
                })
            } catch (err) {
                console.log(err)
            }
        }
    },
    async created () {
        try {
            let coffeeId = this.$route.params.coffeeId
            this.coffee = (await CoffeesService.show(coffeeId)).data
        } catch (error) {
            console.log(error)
        }
    }
}
</script>
<style scoped>
</style>