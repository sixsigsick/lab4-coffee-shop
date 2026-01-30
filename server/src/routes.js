const CoffeeController = require('./controllers/CoffeeController')

module.exports = (app) => {
    // Get all coffees
    app.get('/coffees', CoffeeController.index)
    
    // Create coffee
    app.post('/coffee', CoffeeController.create)
    
    // Edit coffee
    app.put('/coffee/:coffeeId', CoffeeController.put)
    
    // Delete coffee
    app.delete('/coffee/:coffeeId', CoffeeController.delete)
    
    // Show coffee by id
    app.get('/coffee/:coffeeId', CoffeeController.show)
}