<template>
    <div>
        <h2>รายการเมนูกาแฟ (Coffee Shop)</h2>
        
        <p><button @click="navigateTo('/coffee/create')">สร้างเมนูกาแฟใหม่</button></p>
        <hr>

        <div v-if="coffees && coffees.length">
            <div>จำนวนเมนู: {{ coffees.length }}</div>
            <div v-for="coffee in coffees" :key="coffee.id">
                <p>id: {{ coffee.id }}</p>
                <p>ชื่อเมนู: {{ coffee.name }}</p>
                <p>ราคา: {{ coffee.price }} บาท</p>
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
            <p>ยังไม่มีข้อมูลเมนูกาแฟในระบบ</p>
        </div>
    </div>
</template>

<script>
// แนะนำให้ใช้ @/ เพื่ออ้างอิงจากโฟลเดอร์ src โดยตรง
import CoffeesService from '../../services/CoffeesService'

export default {
    data () {
        return {
            coffees: []
        }
    },
    async created () {
        try {
            const response = await CoffeesService.index()
            this.coffees = response.data
        } catch (error) {
            console.error("Error fetching coffees:", error)
        }
    },
    methods: {
        navigateTo (route) {
            // ฟังก์ชันเปลี่ยนหน้า
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
            const response = await CoffeesService.index()
            this.coffees = response.data
        }
    }
}
</script>