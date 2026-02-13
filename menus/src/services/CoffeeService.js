import Api from '../services/Api' // ตรวจสอบ path ของ Api.js ให้ถูกต้อง (บางโปรเจกต์ใช้ @ หรือ ..)

export default {
  // ดึงข้อมูลกาแฟทั้งหมด (GET /coffees)
  index () {
    return Api().get('coffees')
  },

  // ดึงข้อมูลกาแฟรายเมนูตาม ID (GET /coffee/:coffeeId)
  show (coffeeId) {
    return Api().get('coffee/' + coffeeId)
  },

  // เพิ่มข้อมูลกาแฟใหม่ (POST /coffee)
  post (coffee) {
    return Api().post('coffee', coffee)
  },

  // แก้ไขข้อมูลกาแฟ (PUT /coffee/:coffeeId)
  put (coffee) {
    return Api().put('coffee/' + coffee.id, coffee)
  },

  // ลบข้อมูลกาแฟ (DELETE /coffee/:coffeeId)
  delete (coffee) {
    return Api().delete('coffee/' + coffee.id)
  }
}