<template>
  <div class="container">
    <h1>Show Coffee Data</h1>
    
    <div v-if="coffee">
      <p><strong>Coffee ID:</strong> {{ coffee.id }}</p>
      <p><strong>Name:</strong> {{ coffee.name }}</p> <p><strong>Price:</strong> {{ coffee.price }} บาท</p>
      <p><strong>Type:</strong> {{ coffee.type }}</p> <p><strong>Description:</strong> {{ coffee.description }}</p>
    </div>

    <div class="actions">
      <button @click="navigateTo('/coffees')">กลับหน้ารายการ</button>
    </div>
  </div>
</template>

<script>
// Import Service ของ Coffee โดยเฉพาะ
import CoffeesService from '../../services/CoffeesService'

export default {
  data () {
    return {
      coffee: null // เปลี่ยนชื่อตัวแปรเป็น coffee
    }
  },
  async created () {
    try {
      // ดึง ID จาก URL (ต้องตรงกับที่ตั้งใน router.js เช่น path: '/coffee/:coffeeId')
      let coffeeId = this.$route.params.coffeeId
      // เรียก Service ดึงข้อมูล
      this.coffee = (await CoffeesService.show(coffeeId)).data
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: left;
}

.actions {
  margin-top: 20px;
}

p {
  font-size: 1.2em;
  margin: 10px 0;
}
</style>