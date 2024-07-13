'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  // biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
  class Curso extends Model {
    static associate(models) {
      Curso.belongsTo(models.Categoria, {
        foreignKey: 'categoria_id',
      });
      Curso.belongsTo(models.Matricula, {
        foreignKey: 'curso_id',
      });
    }
  }
  Curso.init(
    {
      titulo: DataTypes.STRING,
      descricao: DataTypes.STRING,
      data_inicio: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: 'Curso',
      tableName: 'cursos',
    },
  );
  return Curso;
};
