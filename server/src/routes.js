const MenuController = require('./controllers/MenuController')
const isAuthenController = require('./controllers/isAuthenController')
const UserAuthenController = require('./controllers/UserAuthenController')

module.exports = (app) => {
  // ===== Auth =====
  app.post('/login', UserAuthenController.login)
  // optional: สร้าง admin (ถ้าอยากใช้)
  app.post('/register', UserAuthenController.register)

  // ===== Public (ดูเมนูได้สาธารณะ) =====
  app.get('/menus', MenuController.index)
  app.get('/menu/:id', MenuController.show)

  // ===== Protected (ต้องมี Token) =====
  app.post('/menu', isAuthenController, MenuController.create)
  app.put('/menu/:id', isAuthenController, MenuController.update)
  app.delete('/menu/:id', isAuthenController, MenuController.delete)

  // Alias ตามโจทย์ (coffee)
  app.get('/coffees', MenuController.index)
  app.get('/coffee/:id', MenuController.show)
  app.post('/coffee', isAuthenController, MenuController.create)
  app.put('/coffee/:id', isAuthenController, MenuController.update)
  app.delete('/coffee/:id', isAuthenController, MenuController.delete)
}
