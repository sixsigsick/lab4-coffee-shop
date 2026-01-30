<template>
    <div>
        <h2>รายการเมนูกาแฟ (Coffee Shop)</h2>
        <p><button @click="navigateTo('/coffee/create')">สร้างเมนูกาแฟใหม่</button></p>
        
        <div v-if="coffees.length">
            <div>จำนวนเมนู: {{ coffees.length }}</div>
            <div v-for="coffee in coffees" :key="coffee.id">
                <p>id: {{ coffee.id }}</p>
                <p>ชื่อเมนู: {{ coffee.name }}</p>
                <p>ราคา: {{ coffee.price }}</p>
                <p>ประเภท: {{ coffee.type }}</p>
                <p>
                    <button @click="navigateTo('/coffee/'+ coffee.id)">ดูข้อมูล</button>
                    <button @click="navigateTo('/coffee/edit/'+ coffee.id)">แก้ไขข้อมูล</button>
                    <button @click="deleteCoffee(coffee)">ลบเมนู</button>
                </p>
                <hr>
            </div>
        </div>
        <div v-else>
            <p>ไม่มีข้อมูลเมนูกาแฟ</p>
        </div>
    </div>
</template>
<script>
import CoffeesService from '../../services/CoffeesService'

export default {
    data () {
        return {
            coffees: []
        }
    },
    async created () {
        this.coffees = (await CoffeesService.index()).data
    },
    methods: {
        navigateTo (route) {
            this.$router.push(route)
        },
        async deleteCoffee (coffee) {
            let result = confirm("คุณต้องการลบข้อมูลใช่หรือไม่?")
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
        },
        goShow(coffeeId) {
            this.$router.push('/coffee/' + coffeeId)
        }
    }
}
</script>
<style scoped>
</style>