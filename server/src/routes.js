const MenuController = require('./controllers/MenuController')
const CoffeeController = require('./controllers/CoffeeController') // Import Controller
const isAuthenController = require('./controllers/isAuthenController') // Middleware ตรวจสอบ Token
const UserAuthenController = require('./controllers/UserAuthenController')

module.exports = (app) => {
  // ==============================
  // ===== Authentication =======
  // ==============================
  app.post('/login', UserAuthenController.login)
  app.post('/register', UserAuthenController.register)

  // ==============================
  // ===== Menu Routes ==========
  // ==============================
  // Public
  app.get('/menus', MenuController.index)
  app.get('/menu/:id', MenuController.show)

  // Protected (ต้อง Login)
  app.post('/menu', isAuthenController, MenuController.create)
  app.put('/menu/:id', isAuthenController, MenuController.update)
  app.delete('/menu/:id', isAuthenController, MenuController.delete)

  // ==============================
  // ===== Coffee Routes ==========
  // ==============================
  
  // Public: ดูรายการกาแฟทั้งหมด และดูรายเมนู
  app.get('/coffees', CoffeeController.index)
  app.get('/coffee/:coffeeId', CoffeeController.show)

  // Protected: สร้าง, แก้ไข, ลบ (ต้องมี Token)
  app.post('/coffee', isAuthenController, CoffeeController.create)
  app.put('/coffee/:coffeeId', isAuthenController, CoffeeController.put)
  app.delete('/coffee/:coffeeId', isAuthenController, CoffeeController.remove)
}