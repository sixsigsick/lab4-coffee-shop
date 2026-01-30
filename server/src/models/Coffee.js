module.exports = (sequelize, DataTypes) => {
    const Coffee = sequelize.define('Coffee', {
        name: DataTypes.STRING,
        price: DataTypes.INTEGER, // หรือ DataTypes.STRING แล้วแต่การออกแบบ
        type: DataTypes.STRING,   // เช่น hot, iced, frappe
        description: DataTypes.TEXT
    })
    return Coffee
}