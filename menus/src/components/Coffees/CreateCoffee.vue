<template>
  <div>
    <h1>Create Coffee</h1>
    <form @submit.prevent="createCoffee">
      
      <p>
        Name:
        <input type="text" v-model="coffee.name" required />
      </p>

      <p>
        Price:
        <input type="number" v-model="coffee.price" required />
      </p>

      <p>
        Type:
        <select v-model="coffee.type" required>
          <option disabled value="">-- Select Type --</option>
          <option value="ร้อน">ร้อน</option>
          <option value="เย็น">เย็น</option>
          <option value="ปั่น">ปั่น</option>
        </select>
      </p>

      <p>
        Status:
        <select v-model="coffee.status">
          <option value="มีจำหน่าย">มีจำหน่าย</option>
          <option value="หมด">หมด</option>
        </select>
      </p>

      <p>
        <button type="submit">Create Coffee</button>
      </p>

    </form>
  </div>
</template>

<script>
import CoffeeService from '../../services/CoffeeService'

export default {
  data () {
    return {
      coffee: {
        name: '',
        price: '',
        type: '',
        status: 'มีจำหน่าย'
      }
    }
  },
  methods: {
    async createCoffee () {
      try {
        await CoffeeService.post(this.coffee)
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
