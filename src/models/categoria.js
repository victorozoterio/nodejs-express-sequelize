'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  // biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
  class Categoria extends Model {
    static associate(models) {
      Categoria.hasMany(models.Curso, {
        foreignKey: 'categoria_id',
      });
    }
  }
  Categoria.init(
    {
      titulo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Categoria',
      tableName: 'categorias',
    },
  );
  return Categoria;
};
