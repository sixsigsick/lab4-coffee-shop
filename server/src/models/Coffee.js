module.exports = (sequelize, DataTypes) => {
  const Coffee = sequelize.define('Coffee', {
    name: DataTypes.STRING,   // ชื่อเมนู
    price: DataTypes.FLOAT,   // ราคา
    type: DataTypes.STRING,   // ประเภท: ร้อน, เย็น, ปั่น
    status: DataTypes.STRING  // สถานะ: มีจำหน่าย, หมด
  })

  return Coffee
}