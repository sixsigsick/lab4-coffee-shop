<template>
  <div v-if="coffee">
    <h1>Show Coffee</h1>

    <p>id: {{ coffee.id }}</p>
    <p>name: {{ coffee.name }}</p>
    <p>price: {{ coffee.price }}</p>
    <p>type: {{ coffee.type }}</p>
    <p>status: {{ coffee.status }}</p>

    <p>
      <button @click="navigateTo('/coffee/edit/' + coffee.id)">
        แก้ไขเมนู
      </button>
      <button @click="navigateTo('/coffees')">
        กลับ
      </button>
    </p>
  </div>
</template>

<script>
import CoffeesService from '../../services/CoffeeService'

export default {
  data () {
    return {
      coffee: null
    }
  },

  async created () {
    try {
      let coffeeId = this.$route.params.coffeeId
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
</style>
