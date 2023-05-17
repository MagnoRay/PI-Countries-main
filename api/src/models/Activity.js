const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activity', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    difficulty: {
        type: DataTypes.ENUM('1', '2', '3', '4', '5'),
        allowNull: false
    }, 
    duration: {
        type: DataTypes.TIME,
        allowNull: false
    },
    season: {
        type: DataTypes.ENUM('Invierno','Primavera', 'Verano','Otoño'), 
        allowNull: false
    }   
  },{timestamps: false});
};
