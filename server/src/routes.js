const MenuController = require('./controllers/MenuController')
const CoffeeController = require('./controllers/CoffeeController')
const isAuthenController = require('./controllers/isAuthenController')
const UserAuthenController = require('./controllers/UserAuthenController')

module.exports = (app) => {
  // ===== Auth =====
  app.post('/login', UserAuthenController.login)
  app.post('/register', UserAuthenController.register)

  // ===== Public Menu =====
  app.get('/menus', MenuController.index)
  app.get('/menu/:id', MenuController.show)

  // ===== Protected Menu =====
  app.post('/menu', isAuthenController, MenuController.create)
  app.put('/menu/:id', isAuthenController, MenuController.update)
  app.delete('/menu/:id', isAuthenController, MenuController.delete)

  // ==============================
  // ===== Coffee Routes ==========
  // ==============================

  // Public
  app.get('/coffees', CoffeeController.index)
  app.get('/coffee/:coffeeId', CoffeeController.show)

  // Protected (ต้องมี Token)
  app.post('/coffee', isAuthenController, CoffeeController.create)
  app.put('/coffee/:coffeeId', isAuthenController, CoffeeController.put)
  app.delete('/coffee/:coffeeId', isAuthenController, CoffeeController.remove)
}
