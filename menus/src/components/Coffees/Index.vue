<template>
    <div>
        <h2>Get all Coffees</h2>
        <p><button @click="logout">Logout</button></p>
        <h4>จำนวนกาแฟ {{ coffees.length }}</h4>
        <p><button @click="navigateTo('/coffee/create')">สร้างกาแฟ</button></p>

        <div v-for="coffee in coffees" :key="coffee.id">
            <p>id: {{ coffee.id }}</p>
            <p>name: {{ coffee.name }}</p>
            <p>price: {{ coffee.price }}</p>
            <p>type: {{ coffee.type }}</p>
            <p>status: {{ coffee.status }}</p>

            <p>
                <button @click="navigateTo('/coffee/' + coffee.id)">ดู</button>
                <button @click="navigateTo('/coffee/edit/' + coffee.id)">แก้ไข</button>
                <button @click="deleteCoffee(coffee)">ลบ</button>
            </p>
            <hr>
        </div>
    </div>
</template>

<script>
import CoffeesService from '../../services/CoffeeService'

export default {
    data() {
        return {
            coffees: []
        }
    },

    async created() {
        this.coffees = (await CoffeesService.index()).data
    },

    methods: {
        logout() {
            this.$store.dispatch('setToken', null)
            this.$router.push({ name: 'login' })
        },

        navigateTo(route) {
            this.$router.push(route)
        },

        async deleteCoffee(coffee) {
            let result = confirm("Want to delete?")
            if (result) {
                try {
                    await CoffeesService.delete(coffee)
                    this.refreshData()
                } catch (err) {
                    console.log(err)
                }
            }
        },

        async refreshData() {
            this.coffees = (await CoffeesService.index()).data
        }
    }
}
</script>
