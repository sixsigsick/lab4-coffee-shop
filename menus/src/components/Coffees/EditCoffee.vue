<template>
  <div>
    <h1>Edit Coffee</h1>

    <form @submit.prevent="editCoffee">
      
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
        <button type="submit">Update Coffee</button>
        <button type="button" @click="navigateTo('/coffees')">กลับ</button>
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
        id: '',
        name: '',
        price: '',
        type: '',
        status: ''
      }
    }
  },

  methods: {
    async editCoffee () {
      try {
        await CoffeeService.put(this.coffee)
        this.$router.push({
          name: 'coffees'
        })
      } catch (err) {
        console.log(err)
      }
    },

    navigateTo (route) {
      this.$router.push(route)
    }
  },

  async created () {
    try {
      const coffeeId = this.$route.params.coffeeId
      this.coffee = (await CoffeeService.show(coffeeId)).data
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style scoped>
</style>
