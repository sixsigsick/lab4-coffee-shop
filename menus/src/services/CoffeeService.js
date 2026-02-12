import Api from '../services/Api'

export default {
  // ดึงข้อมูลทั้งหมด
  index () {
    return Api().get('coffees')
  },

  // ดึงข้อมูลตาม id
  show (coffeeId) {
    return Api().get('coffee/' + coffeeId)
  },

  // เพิ่มข้อมูล
  post (coffee) {
    return Api().post('coffee', coffee)
  },

  // แก้ไขข้อมูล
  put (coffee) {
    return Api().put('coffee/' + coffee.id, coffee)
  },

  // ลบข้อมูล
  delete (coffee) {
    return Api().delete('coffee/' + coffee.id)
  }
}
